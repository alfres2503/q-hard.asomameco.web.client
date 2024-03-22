import { GenericService } from "@/services/GenericService";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Member } from "@/types/models/Member";
import {
  Select,
  SelectItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Button from "@/components/common/Button";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";
import { useSearch } from "@/hooks/useSearch";
import { usePagination } from "@/hooks/usePagination";
import { useOrderBy } from "@/hooks/useOrderBy";

const MembersPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [members, setMembers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const { searchTerm, setSearchTerm, handleSearchWithPage } = useSearch();

  const {
    pageNumber,
    pageSize,
    setPageNumber,
    setPageSize,
    PreviousPage,
    NextPage,
    ChangePageSize,
  } = usePagination(searchTerm);

  const { orderBy, setOrderBy, SortByName, SortByEmail, SortByActive } =
    useOrderBy(pageNumber, pageSize);

  useEffect(() => {
    setPageNumber(
      searchParams.has("pageNumber")
        ? Number(searchParams.get("pageNumber"))
        : 1
    );
    setPageSize(
      searchParams.has("pageSize") ? Number(searchParams.get("pageSize")) : 5
    );

    setSearchTerm(
      searchParams.has("searchTerm")
        ? String(searchParams.get("searchTerm"))
        : ""
    );

    setOrderBy(
      searchParams.has("orderBy") ? String(searchParams.get("orderBy")) : ""
    );

    const fetchData = async () => {
      const endpoint = `members?pageNumber=${pageNumber}&pageSize=${pageSize}
      &searchTerm=${searchTerm}&orderBy=${orderBy}`;

      const response = await GenericService.list(endpoint);

      setMembers(response.data.list);
      setTotalPages(response.data.totalPages);
    };

    fetchData();
  }, [searchParams, pageNumber, pageSize, pathname, orderBy]);

  return (
    <Layout>
      <section className="p-0 md:p-0 mx-auto max-w-9xl">
        {members.length === 0 ? (
          <span>No se encontraron registros.</span>
        ) : (
          <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
            {/* Title & add button */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl mx-3 font-bold">Miembros</h1>
              <Button
                onClick={() => {}}
                className=" text-white p-2 text-xs flex items-center gap-2"
              >
                <IoIosAddCircle />
                Registrar
              </Button>
            </div>

            {/* Search bar */}
            <div className="flex">
              <input
                type="text"
                placeholder="Buscar miembro"
                className="w-full p-3 rounded-lg border-2 border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                onClick={() => handleSearchWithPage(pageNumber, pageSize)}
                className="text-white p-2 ml-3"
              >
                Buscar
              </Button>
            </div>

            {/* Table */}
            <div className="w-full">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>
                      <button onClick={SortByName}>Nombre</button>
                    </TableHeaderCell>

                    <TableHeaderCell>Apellido</TableHeaderCell>

                    <TableHeaderCell>
                      <button onClick={SortByEmail}>Correo</button>
                    </TableHeaderCell>

                    <TableHeaderCell>
                      <button onClick={SortByActive}>Activo</button>
                    </TableHeaderCell>

                    <TableHeaderCell>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {members.map((member: Member) => (
                    <TableRow key={member.id}>
                      <TableCell>{member.firstName}</TableCell>
                      <TableCell>{member.lastName}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Switch checked={member.isActive} onChange={() => {}} />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {}}
                          className="text-xs text-white p-2"
                        >
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

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
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default MembersPage;
