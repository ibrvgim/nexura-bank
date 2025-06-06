import { useEffect, RefObject, Dispatch, SetStateAction } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onOutsideClick: () => void | Dispatch<SetStateAction<boolean>>,
  enabled: boolean,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, ref, onOutsideClick]);
}
