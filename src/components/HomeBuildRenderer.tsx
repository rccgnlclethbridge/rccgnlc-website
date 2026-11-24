"use client";

import React from "react";
import { useSiteBuild } from "@/components/BuildPreviewProvider";
import CurrentHomeBuild from "@/components/builds/CurrentHomeBuild";
import EditorialHomeBuild from "@/components/builds/EditorialHomeBuild";
import CinematicHomeBuild from "@/components/builds/CinematicHomeBuild";
import BentoHomeBuild from "@/components/builds/BentoHomeBuild";

/** Switches homepage layout based on the active preview build toggle. */
export default function HomeBuildRenderer() {
  const { build } = useSiteBuild();

  switch (build) {
    case "editorial":
      return <EditorialHomeBuild />;
    case "cinematic":
      return <CinematicHomeBuild />;
    case "bento":
      return <BentoHomeBuild />;
    case "current":
    default:
      return <CurrentHomeBuild />;
  }
}
