import React, { useEffect, useRef } from "react";

export default function useClickOutside(
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => any
) {
  const flag = useRef(false);

  function handleClick(e: Event) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      setTimeout(() => {
        document.addEventListener("click", handleClick);
      }, 5);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
