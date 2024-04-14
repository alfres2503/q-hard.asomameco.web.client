import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import Button from "@/components/common/Button";
import { Attendance } from "@/types/models/Attendance";
import { IoIosAddCircle } from "react-icons/io";
import SearchBar from "@/components/SearchBar";
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { usePagination } from "@/hooks/usePagination";
import { useOrderBy } from "@/hooks/useOrderBy";
import Paginator from "@/components/PaginationFooter";

const AttendanceDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [attendance, setAttendance] = useState<Attendance>();
  const [attendances, setAttendances] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  // Obtener los datos de la API en base a los parametros de la URL\

  useEffect(() => {
  
     setIsLoading(true);

    // Obtener los datos de la API en base a los parametros de la URL
    try {
  
    const fetchData = async () => {

      if (!router.query.idEvent) {
        return;
      }

      console.log(router.query.idEvent);
      const response = await GenericService.getBy(
        "attendances/event",
        router.query.idEvent
      );
      if (response.status !== 200) {
        Notification(response.message);
        return;
      }

      setAttendances(response.data);
      setTotalPages(response.data.totalPages);
      console.log(response.data);

    };

    if (router.isReady) {
      fetchData();
      setIsLoading(false);
    }

  } catch (error: any) {
    Notification(`Acerca del error: ${error.message}`);
  }
}, [router.isReady, router.query.idEvent]);

  // Render attendance details
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
            </div>
            {/* <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onSearch={() => handleSearchWithPage(pageNumber, pageSize)}
            /> */}
            {/* Table */}
            <div className="w-full">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Evento</TableHeaderCell>
                    <TableHeaderCell>Asociado</TableHeaderCell>
                    <TableHeaderCell>Hora de Llegada</TableHeaderCell>
                    <TableHeaderCell>Confirmación</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendances.map((attendance: Attendance) => (
                    <TableRow
                      key={attendance.idEvent}
                    >
                      <TableCell>{attendance.event?.name}</TableCell>
                      <TableCell>{attendance.associate?.name}</TableCell>
                      <TableCell>{attendance.arrivalTime}</TableCell>
                      <TableCell>
                        <Switch
                          checked={attendance.isConfirmed}
                          onChange={() => {}}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className=" flex gap-3 items-center justify-start my-5">
              
                <Button
                  onClick={() => {
                    router.push("/app/events");
                  }}
                  color="blue"
                  className="p-3 text-white"
                >
                  Volver
                </Button>
              </div>

              {/* Pagination 
              <Paginator
                pageNumber={pageNumber}
                totalPages={totalPages}
                PreviousPage={PreviousPage}
                NextPage={NextPage}
                orderBy={orderBy}
                ChangePageSize={ChangePageSize}
              />*/}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AttendanceDetails;
