import { EventCardProps } from "@/types/interfaces/EventCardProps";
import React, { FC } from "react";
import Button from "./Button";
import { Card } from "@tremor/react";

// hay que agregar el tipo de dato de las propiedades del componente
const EventCard: FC<EventCardProps> = ({
  onClickEdit = () => { },
  onClickAttendance = () => { },
  onClickView = () => { },
  eventName = "Evento pichudo",
  description = "Evento pichudo solo pa amarrados",
  dateAndTime = "N/D",
  place = "N/D",
  color = "white",
  isAdmin = false,
}) => {
  const cardColor =
    color === "orange"
      ? "bg-asomamecoPrimary text-white"
      : color === "blue"
        ? "bg-asomamecoDarkBlue text-white"
        : "bg-white text-gray-800";

  return (
    <Card className="w-full">
      <div className="px-6 py-4 flex-grow">
        <p className="text-lg">{eventName}</p>
        <p className="text-gray-900 text-sm">{description}</p>
        <p className="text-gray-700 text-sm">Fecha: {dateAndTime}</p>
        <p className="text-gray-700 text-sm">Lugar: {place}</p>
      </div>
      <div className="px-6 py-2 flex md:flex flex-row-reverse space-x-1">
        {isAdmin ? (

          <Button color="blue"
            onClick={onClickEdit}
            className=" text-white p-2 text-xs flex items-center gap-2 ml-1"
          >
            Editar
          </Button>
        ) : (
          ""
        )}
        <Button
          onClick={onClickView}
          className=" text-white p-2 text-xs flex items-center gap-2"
        >
          Ver
        </Button>
        <Button
          onClick={onClickAttendance}
          className=" text-white p-2 text-xs flex items-center gap-2"
        >
          Asistencia
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
