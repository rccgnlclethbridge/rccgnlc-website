"use client";

import React from "react";
import { useSiteBuild } from "@/components/BuildPreviewProvider";
import CurrentHomeBuild from "@/components/builds/CurrentHomeBuild";
import TransformationHomeBuild from "@/components/builds/TransformationHomeBuild";
import ElevationHomeBuild from "@/components/builds/ElevationHomeBuild";
import ModernHomeBuild from "@/components/builds/ModernHomeBuild";

/** Switches homepage layout based on the active preview build toggle. */
export default function HomeBuildRenderer() {
  const { build } = useSiteBuild();

  switch (build) {
    case "transformation":
      return <TransformationHomeBuild />;
    case "elevation":
      return <ElevationHomeBuild />;
    case "modern":
      return <ModernHomeBuild />;
    case "current":
    default:
      return <CurrentHomeBuild />;
  }
}
