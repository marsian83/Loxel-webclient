import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import PopupDrawerHolder from "./components/PopupDrawerHolder";
import usePopoverDrawer from "../../hooks/usePopoverDrawer";
import useClickOutside from "../../hooks/useClickOutside";

const autoHideTimeout = 500;

interface PopupDrawerProps {
  className?: string;
}

export default function PopupDrawer(props: PopupDrawerProps) {
  const [hide, setHide] = useState(false);

  const holderRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const drawer = usePopoverDrawer();
  useClickOutside(holderRef, () => setHide(true));

  useEffect(() => {
    console.log(hide);
  }, [hide]);

  console.log(holderRef.current);

  return (
    <div
      className={twMerge(
        "bg-background/10 backdrop-blur-[2px] fixed z-[10001] top-0 left-0 w-[99.9%] h-full duration-200",
        drawer.element == null && "opacity-0 pointer-events-none",
        props.className
      )}
    >
      <PopupDrawerHolder
        className={twMerge(
          "w-full duration-300",
          hide && "pointer-events-none translate-y-full",
          drawer.element == null && "translate-y-full scale-150"
        )}
        ref={holderRef}
      >
        {drawer.element}
      </PopupDrawerHolder>
    </div>
  );
}
