import { EventCardProps } from "@/types/interfaces/EventCardProps";
import React, { FC } from "react";
import Button from "./Button";

// hay que agregar el tipo de dato de las propiedades del componente
const EventCard: FC<EventCardProps> = ({
  onClickEdit = () => {},
  onClickAttendance = () => {},
  eventName = "Evento pichudo",
  description = "Evento pichudo solo pa amarrados",
  dateAndTime = "N/D",
  place = "N/D",
  color = "white",
}) => {
  const cardColor =
    color === "orange"
      ? "bg-asomamecoPrimary text-white"
      : color === "blue"
      ? "bg-asomamecoDarkBlue text-white"
      : "bg-white text-gray-800";

  return (
    <div className="rounded overflow-auto shadow-lg flex flex-col bg-white">
      <div className="px-6 py-4 flex-grow">
        <p className="text-lg">{eventName}</p>
        <p className="text-gray-900 text-sm">{description}</p>
        <p className="text-gray-700 text-sm">Fecha: {dateAndTime}</p>
        <p className="text-gray-700 text-sm">Lugar: {place}</p>
      </div>
      <div className="px-6 py-2 flex md:flex flex-row-reverse space-x-1">
        <button
          onClick={onClickEdit}
          className="inline transition-colors text-white rounded focus:outline-none px-4 py-2 mx-2 bg-asomamecoDarkBlue hover:bg-asomamecoDarkBlue-700"
        >
          Editar
        </button>
        <button
          onClick={onClickAttendance}
          className="inline transition-colors text-white rounded focus:outline-none px-4 py-2 bg-asomamecoDarkBlue hover:bg-asomamecoDarkBlue-700"
        >
          Asistencia
        </button>
      </div>
    </div>
  );
};

export default EventCard;
