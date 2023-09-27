"use client";

import cn from "classnames";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export default function Button(props: TButtonProps) {
  const { className, children } = props;

  return (
    <button
      {...props}
      className={cn(
        "bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-950",
        className
      )}
    >
      {children}
    </button>
  );
}
