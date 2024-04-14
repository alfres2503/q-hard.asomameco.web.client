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
import { CateringService } from "@/types/models/CateringService";

const EventDetails = () => {
  const router = useRouter();

  const { Notification } = useNotification();
  const { currentMember } = useMember();

  const [_event, setEvent] = useState<Event>();
  const [_member, setMember] = useState<Member>();
  const [_caterine, setCaterine] = useState<CateringService>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchEvent = async () => {
        const response = await GenericService.getBy("events", router.query.id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setEvent(response.data);
        console.log(response.data)
        fetchMember(response.data.idMember);
        fetchKaterina(response.data.idCateringService);
      };

      const fetchMember = async (id:number) => {
        const response = await GenericService.getBy(
          "members",
          id
        );

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setMember(response.data);
      };

      const fetchKaterina = async (id:number) => {
        const response = await GenericService.getBy(
          "cateringservices",
          id
        );

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setCaterine(response.data);
      };

      if (router.isReady) {
        fetchEvent();
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
          <h1>Evento</h1>
        </div>

        <div>
          {_event ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">ID</span>
                <span>{_event.id}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Nombre</span>
                <span>{_event.name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Descripción</span>
                <span>{_event.description}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Lugar</span>
                <span>{_event.place}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Fecha y hora</span>
                <span>{_event.date + " " + _event.time}</span>

                <div className="flex flex-col gap-2">
                  <span className="text-lg font-bold">Miembro encargado</span>
                  <span>{_member?.firstName + " " + _member?.lastName}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-lg font-bold">
                    Servicio de Catering
                  </span>
                  <span>{_caterine?.name}</span>
                </div>

                <div className=" flex gap-3 items-center justify-start my-5">
                  {currentMember?.idRole === 1 && (
                    <Button
                      onClick={() => {
                        router.push(`/app/events/edit/${_event.id}`);
                      }}
                      className=" text-white p-3"
                    >
                      Editar
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      router.push("/app/attendances/event/" + _event.id);
                    }}
                    color="blue"
                    className="p-3 text-white"
                  >
                    Asistencia
                  </Button>
                  <Button
                    onClick={() => {
                      router.push("/app/events");
                    }}
                    color="blue"
                    className="p-3 text-white"
                  >
                    Volver a la lista
                  </Button>
                </div>
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

export default EventDetails;
