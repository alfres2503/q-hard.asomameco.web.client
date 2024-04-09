import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { Member } from "@/types/models/Member";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { BiDetail } from "react-icons/bi";
import Button from "@/components/common/Button";
import { useMember } from "@/hooks/useAuth";
import { Event } from "@/types/models/Event";
import { Associate } from "@/types/models/Associate";
import { Attendance } from "@/types/models/Attendance";

const AttendanceDetails = () => {
  const router = useRouter();

  const { Notification } = useNotification();
  const { currentMember } = useMember();

  const [event, setEvent] = useState<Event>();
  const [attendance, setAttendance] = useState<Attendance>();
  const [associate, setAssociate] = useState<Associate>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchAttendance = async () => {
        const response = await GenericService.getBy(
          "attendances",
          router.query.id
        );

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setAttendance(response.data);
        console.log(response.data);
        fetchEvent(response.data.idEvent);
        fetchAssociate(response.data.idAssociate);
      };

      const fetchEvent = async (id: number) => {
        const response = await GenericService.getBy("events", id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setEvent(response.data);
      };

      const fetchAssociate = async (id: number) => {
        const response = await GenericService.getBy("associates", id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setAssociate(response.data);
      };

      if (router.isReady) {
        fetchAttendance();
      }
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  }, [router.isReady]);

  // Render member details
  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <BiDetail className="mt-1" />
          <h1>Asistencia</h1>
        </div>

        <div>
          {attendance ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">ID evento</span>
                <span>{attendance.idEvent}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Nombre del evento</span>
                <span>{event?.name}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Descripción</span>
                <span>{event?.description}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Fecha y Hora</span>
                <span>{event?.date + " " + event?.time}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">ID Asociado</span>
                <span>{attendance.idAssociate}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Asociado</span>
                <span>{associate?.name}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Hora Llegada</span>
                <span>{attendance.arrivalTime}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Asociado</span>
                <span>{associate?.name}</span>
              </div>

              <div className=" flex gap-3 items-center justify-start my-5">
                {currentMember?.idRole === 1 && (
                  <Button
                    onClick={() => {
                      router.push(
                        `/app/attendances/edit/${attendance.idEvent}`
                      );
                    }}
                    className=" text-white p-3"
                  >
                    Editar
                  </Button>
                )}
                <Button
                  onClick={() => {
                    router.push("/app/attendances/" + attendance.idEvent);
                  }}
                  color="blue"
                  className="p-3 text-white"
                >
                  Asistencia
                </Button>
                <Button
                  onClick={() => {
                    router.push("/app/attendances");
                  }}
                  color="blue"
                  className="p-3 text-white"
                >
                  Volver a la lista
                </Button>
                \
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center mt-5">
              <span className="text-lg font-bold">
                {isLoading
                  ? "Cargando..."
                  : "Parece que hubo un error, por favor intentelo más tarde."}
              </span>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AttendanceDetails;
