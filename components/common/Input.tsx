"use client";

import { useState, useEffect } from "react";

import cn from "classnames";

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
};

export default function Input(props: TInputProps) {
  const { className, label, value, onChange, ...rest } = props;

  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

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
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange?.(e);
        }}
      />
    </div>
  );
}
