import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function VisitTable() {
  const [visits, setVisits] = useState([]);

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
  });

  return (
    <>
      <table>
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
    </>
  );
}

export default VisitTable;
