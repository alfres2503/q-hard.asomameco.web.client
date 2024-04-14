import { GenericService } from "@/services/GenericService";
import EventCard from "@/components/common/EventCard";
import React, { useEffect, useState } from "react";
import { Event } from "@/types/models/Event";
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
import SearchBar from "@/components/SearchBar";
import Paginator from "@/components/PaginationFooter";
import { useNotification } from "@/hooks/useNotification";
import { useRouter } from "next/router";
import { useMember } from "@/hooks/useAuth";

const _service: GenericService = new GenericService();

const EventsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentMember } = useMember();

  const [events, setEvents] = useState([]);
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

  const { orderBy, setOrderBy, SortByName, SortByEmail, SortByActive } =
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

    loadEvents();

    setIsLoading(false);
  }, [searchParams, pageNumber, pageSize, pathname, orderBy]);

  async function loadEvents() {
    try {
      const response = await GenericService.list(
        `events?pageNumber=${pageNumber}&pageSize=${pageSize}
        &searchTerm=${searchTerm}&orderBy=${orderBy}`
      );
      setEvents(response.data.list);
      setTotalPages(response.data.totalPages);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
      console.log(error);
    }
  }

  async function getCateringName(id: number) {
    try {
      const response = await GenericService.getBy("cateringservices/", id);
      return response.name;
    } catch (error: any) {
      console.log(error);
    }
    return "N/A";
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
        {/* Title & add button */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl mx-3 font-bold">Eventos</h1>
          <Button
            onClick={() => {
              router.push("/app/events/create");
            }}
            className=" text-white p-2 text-xs flex items-center gap-2"
          >
            <IoIosAddCircle />
            Nuevo evento
          </Button>
        </div>
        {/* SearchBar */}
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={() => handleSearchWithPage(pageNumber, pageSize)}
        />
      </div>

      {events.length === 0 ? (
        <div className="flex items-center justify-center mt-5">
          <span className="text-lg font-bold">
            {isLoading
              ? "Cargando..."
              : "Parece que hubo un error, por favor intentelo más tarde."}
          </span>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-10 mx-10 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {/* <EventCard
          eventName="Parrillada de Hombres"
          description="Vuelve a tomar el control de la parrilla."
          dateAndTime="El 27 a las 8"
          place="Donde Charlie"
        ></EventCard> */}

            {events.map((_event: Event) => (
              <EventCard
                key={_event.id}
                eventName={_event.name}
                description={_event.description}
                dateAndTime={_event.date + " " + _event.time}
                place={_event.place}
                onClickEdit={() => editEvent(_event.id)}
                onClickView={() => eventView(_event.id)}
                onClickAttendance={() => eventAttendance(_event)}
                isAdmin={currentMember?.idRole === 1}
              ></EventCard>
            ))}
          </div>

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
      )}
    </Layout>
  );

  function editEvent(id: number) {
    router.push(`/app/events/edit/${id}`);
  }

  function eventView(id: number) {
    router.push(`/app/events/${id}`);
  }

  function eventAttendance(event: Event) {
    let date = new Date();

    if (event?.date === date.toISOString().split("T")[0]) {
      router.push(`/app/attendances/create/${event.id}`);
      return;
    }

    router.push(`/app/attendances/event/${event.id}`);
  }
};

export default EventsPage;
