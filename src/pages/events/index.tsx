import { GenericService } from "@/utils/GenericService";
import EventCard from "@/components/common/EventCard";
import React, { useEffect, useState } from "react";

const _service: GenericService = new GenericService();

const EventsPage = () => {
  useEffect(() => {
    loadEvents();
  }, [])

  return (
    <div className="px-24 py-14 bg-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <EventCard eventName="Parrillada de Hombres" description="Vuelve a tomar el control de la parrilla."></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </div>
  );
};

async function loadEvents(){

}

export default EventsPage;
