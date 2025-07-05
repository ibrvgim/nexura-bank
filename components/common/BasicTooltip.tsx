"use client";

import dynamic from "next/dynamic";

const BasicTooltip = dynamic(() => import("./TooltipWrapper"), {
  ssr: false,
});

export default BasicTooltip;
