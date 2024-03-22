import React from "react";
import { Select, SelectItem } from "@tremor/react";

interface PaginatorProps {
  pageNumber: number;
  totalPages: number;
  PreviousPage: (orderBy: string) => void;
  NextPage: (totalPages: number, orderBy: string) => void;
  orderBy: string;
  ChangePageSize: (value: string) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  pageNumber,
  totalPages,
  PreviousPage,
  NextPage,
  orderBy,
  ChangePageSize,
}) => {
  return (
    <article className="flex flex-col sm:flex-row w-full mt-10 gap-10 text-gray-700">
      {/* Selector de items por página */}
      <div className="flex w-full sm:w-[50%] items-center">
        <Select
          defaultValue="5"
          className="w-full"
          onValueChange={(value) => ChangePageSize(value)}
        >
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </Select>
      </div>

      {/* Selector de página */}
      <div className="flex w-full sm:w-[50%] items-center justify-center sm:justify-end gap-10">
        {pageNumber > 1 && (
          <button
            className="p-3 py-2 hover:bg-gray-300 rounded-lg transition-colors"
            color="blue"
            onClick={() => PreviousPage(orderBy)}
          >
            Anterior
          </button>
        )}

        <span className="text-lg font-semibold">
          Página {pageNumber} de {totalPages}
        </span>

        {pageNumber < totalPages && (
          <button
            className="p-3 py-2 hover:bg-gray-300 rounded-lg transition-colors"
            onClick={() => NextPage(totalPages, orderBy)}
          >
            Siguiente
          </button>
        )}
      </div>
    </article>
  );
};

export default Paginator;
