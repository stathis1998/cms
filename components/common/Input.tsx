"use client";

import cn from "classnames";

export type TInputProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input(props: TInputProps) {
  const { className, label, ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label className="text-sm text-gray-300" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input
        className="bg-gray-900 rounded px-4 py-2 text-sm border border-gray-700"
        {...rest}
      />
    </div>
  );
}
