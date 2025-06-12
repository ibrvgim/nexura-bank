import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
// import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function BasicTooltip({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Tooltip title={title} placement="right" arrow disableInteractive>
      <button>
        {/* <QuestionMarkCircleIcon className="size-4" /> */}
        {children}
      </button>
    </Tooltip>
  );
}
