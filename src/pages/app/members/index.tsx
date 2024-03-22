import { GenericService } from "@/services/GenericService";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Member } from "@/types/models/Member";
import {
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
import SearchBar from "@/components/SearchBar";
import Paginator from "@/components/PaginationFooter";

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

            {/* SearchBar */}
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={() => handleSearchWithPage(pageNumber, pageSize)}
            />

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

              {/* Pagination */}
              <Paginator
                pageNumber={pageNumber}
                totalPages={totalPages}
                PreviousPage={PreviousPage}
                NextPage={NextPage}
                orderBy={orderBy}
                ChangePageSize={ChangePageSize}
              />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default MembersPage;
