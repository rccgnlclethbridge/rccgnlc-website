import { NextResponse } from "next/server";
import { churchInfo, sermonsList, SermonItem } from "@/data/churchData";

export async function GET() {
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${churchInfo.socials.youtubeChannelId}`;
    const response = await fetch(feedUrl, {
      next: { revalidate: 1800 }, // Refresh every 30 minutes automatically
    });

    if (!response.ok) {
      return NextResponse.json({ sermons: sermonsList, source: "fallback" });
    }

    const xml = await response.text();
    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || [];

    const parsedSermons: SermonItem[] = entries
      .map((entry) => {
        const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
        const descMatch = entry.match(
          /<media:description>([\s\S]*?)<\/media:description>/
        );
        const pubMatch = entry.match(/<published>([^<]+)<\/published>/);

        const id = idMatch ? idMatch[1].trim() : "";
        const title = titleMatch
          ? titleMatch[1]
              .replace(/&amp;/g, "&")
              .replace(/&#39;/g, "'")
              .replace(/&quot;/g, '"')
              .trim()
          : "Sermon Message";
        const rawDesc = descMatch ? descMatch[1].trim() : "";
        const firstLine =
          rawDesc.split("\n")[0]?.trim() ||
          "RCCG New Life Chapel Lethbridge";

        return {
          id,
          title,
          subtitle: firstLine,
          url: `https://www.youtube.com/watch?v=${id}`,
          publishedAt: pubMatch ? pubMatch[1].trim() : undefined,
        };
      })
      .filter((item) => Boolean(item.id));

    if (parsedSermons.length === 0) {
      return NextResponse.json({ sermons: sermonsList, source: "fallback" });
    }

    return NextResponse.json({
      sermons: parsedSermons,
      source: "youtube-live-rss",
    });
  } catch {
    return NextResponse.json({ sermons: sermonsList, source: "fallback" });
  }
}
