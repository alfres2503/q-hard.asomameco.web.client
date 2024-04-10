import { GenericService } from "@/services/GenericService";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
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
import Paginator from "@/components/PaginationFooter";
import { useNotification } from "@/hooks/useNotification";
import { useRouter } from "next/router";
import { useMember } from "@/hooks/useAuth";
import { Attendance } from "@/types/models/Attendance";
import SearchBar from "@/components/SearchBar";

const AttendancesPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [attendances, setAttendances] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { currentMember } = useMember();

  // Hooks para la busqueda, paginacion y ordenamiento, son reutilizables para otras paginas
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
  const { orderBy, setOrderBy, SortByName, SortByActive } =
    useOrderBy(pageNumber, pageSize);

  const { Notification } = useNotification();

  useEffect(() => {
    setIsLoading(true);

    // Obtener los parametros de la URL
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

    // Obtener los datos de la API en base a los parametros de la URL
    const fetchData = async () => {
      try {
        const endpoint = `attendances?pageNumber=${pageNumber}&pageSize=${pageSize}
          &searchTerm=${searchTerm}&orderBy=${orderBy}`;

        const response = await GenericService.list(endpoint);

        setAttendances(response.data.list);
        setTotalPages(response.data.totalPages);
      } catch (error: any) {
        Notification(`Acerca del error: ${error.message}`);
      }
    };

    fetchData();
    setIsLoading(false);
  }, [searchParams, pageNumber, pageSize, pathname, orderBy]);

  return (
    <Layout>
      <section className="p-0 md:p-0 mx-auto max-w-9xl">
        {attendances.length === 0 ? (
          <div className="flex items-center justify-center mt-5">
            <span className="text-lg font-bold">
              {isLoading
                ? "Cargando..."
                : "Parece que hubo un error, por favor intentelo más tarde."}
            </span>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
            {/* Title & add button */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl mx-3 font-bold">Asistencias</h1>
              {[/*Se comento ya que se crean las asistencias dentro de eventos */]}
            {/**
              <Button
                onClick={() => {
                  router.push(`/app/attendances/create/`);
                }}
                className=" text-white p-2 text-xs flex items-center gap-2"
              >
                <IoIosAddCircle />
                Registrar
              </Button>
             */}
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
                        <button onClick={SortByName}> Evento</button>
                        </TableHeaderCell>
                    <TableHeaderCell>Asociado</TableHeaderCell>
                    <TableHeaderCell>Hora de Llegada</TableHeaderCell>
                    <TableHeaderCell>
                        <button onClick={SortByActive}>Confirmación</button>
                        </TableHeaderCell>
                    <TableHeaderCell>Acciones</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendances.map((attendance: Attendance) => (
                    <TableRow
                      key={attendance.idEvent}
                    >
                      <TableCell>
                        {
                        attendance.event?.name}
                      </TableCell>
                      <TableCell>
                        {
                          attendance.associate?.name}
                      </TableCell>
                      <TableCell>{attendance.arrivalTime}</TableCell>
                      <TableCell>
                        <Switch
                          checked={attendance.isConfirmed}
                          onChange={() => {}}
                        />
                      </TableCell>
                      <TableCell className="flex gap-3">
                        <Button
                          color="blue"
                          onClick={() => {
                            router.push(
                              `/app/attendances/event/${attendance.idEvent}`
                            );
                          }}
                          className="text-xs text-white p-2"
                        >
                          Detalles
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

export default AttendancesPage;
