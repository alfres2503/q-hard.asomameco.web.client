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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { IoIosAddCircle } from "react-icons/io";

const MembersPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [members, setMembers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setPageNumber(
      searchParams.has("pageNumber")
        ? Number(searchParams.get("pageNumber"))
        : 1
    );
    setPageSize(
      searchParams.has("pageSize") ? Number(searchParams.get("pageSize")) : 5
    );

    const fetchData = async () => {
      const response = await GenericService.list(
        `members?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );

      setMembers(response.data.list);
      setTotalPages(response.data.totalPages);
    };

    fetchData();
  }, [searchParams, pageNumber, pageSize]);

  return (
    <Layout>
      <section className="p-0 md:p-0 mx-auto max-w-9xl">
        <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
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
          <div className="w-full">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Nombre</TableHeaderCell>
                  <TableHeaderCell>Apellido</TableHeaderCell>
                  <TableHeaderCell>Correo</TableHeaderCell>
                  <TableHeaderCell>Activo</TableHeaderCell>
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
                  onValueChange={(value) => {
                    router.push(
                      `/app/members?pageNumber=${1}&pageSize=${value}`
                    );
                  }}
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
                    onClick={() => {
                      router.push(
                        `/app/members?pageNumber=${
                          pageNumber - 1
                        }&pageSize=${pageSize}`
                      );
                    }}
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
                    onClick={() => {
                      router.push(
                        `/app/members?pageNumber=${
                          pageNumber + 1
                        }&pageSize=${pageSize}`
                      );
                    }}
                  >
                    Siguiente
                  </button>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MembersPage;
