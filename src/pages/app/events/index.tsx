import { GenericService } from "@/services/GenericService";
import EventCard from "@/components/common/EventCard";
import React, { useEffect, useState } from "react";
import { Event } from "@/types/models/Event";
import Layout from "../layout";

const _service: GenericService = new GenericService();

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      const response = await GenericService.list(
        `events?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      setEvents(response.data.list);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="px-24 py-14 bg-slate-200">
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
              onClickAttendance={() => eventAttendance(_event.id)}
            ></EventCard>
          ))}
        </div>
      </div>
    </Layout>
  );

  function editEvent(id: number) {
    alert("Editando el evento número: " + id);
  }

  function eventAttendance(id: number) {
    alert("Asistencia del evento número: " + id);
  }
};

export default EventsPage;
