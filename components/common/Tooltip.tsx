import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Tooltip title={title} placement="right" arrow disableInteractive>
      <button>{children}</button>
    </Tooltip>
  );
}
