import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

function VisitTable() {
  const [visits, setVisits] = useState([]);
  const [filtering, setFiltering] = useState("");

  const fetchVisitData = () => {
    const jsonFileUrl =
      "https://raw.githubusercontent.com/hello-isa/react-dental-record-management-system/main/visit-page-mock-data.json";

    fetch(jsonFileUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVisits(data);
      });
  };

  useEffect(() => {
    fetchVisitData();
  }, []);

  const data = visits;

  /**@type import('@tanstack/react-table').ColumnDef<any>*/
  const columns = [
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Visit Purpose",
      accessorKey: "visit_purpose",
    },
    {
      header: "Treatment",
      accessorKey: "treatment",
    },
    {
      header: "Balance",
      accessorKey: "balance",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(!table.getPageCount() - 1)}>
          Last Page
        </button>
      </div>
    </>
  );
}

export default VisitTable;
