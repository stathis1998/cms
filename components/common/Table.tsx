"use client";

import cn from "classnames";

export type TTableProps = React.HTMLAttributes<HTMLTableElement> & {};

export default function Table(props: TTableProps) {
  const { className } = props;

  return (
    <table
      className={cn(
        "w-full bg-gray-900 text-white rounded-lg shadow-lg",
        className
      )}
    >
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}
