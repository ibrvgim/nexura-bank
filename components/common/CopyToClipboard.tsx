"use client";

import { useRef, useState } from "react";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

function CopyToClipboard({ children }: { children: React.ReactNode }) {
  const spanElement = useRef<HTMLSpanElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const iconStyle =
    "ml-2 inline-block size-4 opacity-0 group-hover:opacity-100 mb-1";

  function copyToClipboard() {
    if (!spanElement.current) return;

    const text = spanElement.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .finally(() => setTimeout(() => setIsCopied(false), 4000));
  }

  return (
    <span
      role="button"
      ref={spanElement}
      className="group inline-block cursor-pointer transition-all hover:text-green-500"
      onClick={copyToClipboard}
    >
      {children}
      {isCopied ? (
        <CheckIcon className={iconStyle} />
      ) : (
        <DocumentDuplicateIcon className={iconStyle} />
      )}
    </span>
  );
}

export default CopyToClipboard;
