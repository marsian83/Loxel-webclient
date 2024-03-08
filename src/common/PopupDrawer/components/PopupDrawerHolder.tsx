import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface PopupDrawerHolderProps {
  children?: React.ReactNode;
  className?: string;
}

export default forwardRef<HTMLDivElement, PopupDrawerHolderProps>(
  function PopupDrawerHolder(props, ref) {
    return (
      <article
        className={twMerge(
          "absolute h-[70vh] bottom-0 bg-background rounded-t-3xl border border-front/25",
          props.className
        )}
        ref={ref}
      >
        <div className="flex justify-center p-4">
          <figure className="h-1 rounded-full w-1/5 bg-front/50" />
        </div>
        <div className="flex flex-col overflow-y-scroll h-full scrollbar-none items-center">
          {props.children}
        </div>
      </article>
    );
  }
);
