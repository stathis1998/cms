"use client";

import { useState } from "react";

import cn from "classnames";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type TTableProps = React.HTMLAttributes<HTMLTableElement> & {
  entriesPerPage?: number;
  searchable?: boolean;
  pagination?: boolean;

  columns: {
    Header: string;
    accessor: string;
  }[];
  data: any[];
};

export default function Table(props: TTableProps) {
  const {
    className,
    entriesPerPage = 10,
    searchable = false,
    pagination = false,
    columns,
    data,
  } = props;

  const [searchValue, setSearchValue] = useState("");

  const columnHelper = createColumnHelper<any>();

  const defaultColumns: ColumnDef<any, any>[] = columns.map(
    ({ Header, accessor }) =>
      columnHelper.accessor(accessor, {
        header: Header,
      })
  );

  const { getHeaderGroups, getRowModel, setPageIndex, getPageCount, getState } =
    useReactTable({
      columns: defaultColumns,
      data,
      state: {
        globalFilter: searchValue,
      },
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: entriesPerPage,
        },
      },
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
      getFilteredRowModel: searchable ? getFilteredRowModel() : undefined,
    });

  return (
    <div>
      <div className="py-2">
        {searchable && (
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <input
              className="bg-gray-900 rounded pl-10 pr-3 py-2 text-sm border border-gray-700"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        )}
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-700 shadow">
        <table
          className={cn(
            "min-w-full divide-y divide-gray-700 bg-gray-900",
            className
          )}
        >
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={cn(
                      "py-3.5 text-left text-sm font-semibold text-white",
                      {
                        "pl-4 pr-3": index === 0,
                        "px-3": index !== 0,
                      }
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={cn("divide-y divide-gray-800")}>
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-4 text-center text-gray-500"
                >
                  No data
                </td>
              </tr>
            )}
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "whitespace-nowrap py-4 text-sm font-medium",
                      {
                        "pl-4 pr-3 text-white": index === 0,
                        "px-3 text-gray-300": index !== 0,
                      }
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
