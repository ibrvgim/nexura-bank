"use client";

import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function TooltipWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Tooltip title={title} placement="right" arrow disableInteractive>
      <span className="cursor-pointer">{children}</span>
    </Tooltip>
  );
}
