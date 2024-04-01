import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { Associate } from "@/types/models/Associate";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { BiDetail } from "react-icons/bi";
import Button from "@/components/common/Button";
import { useMember } from "@/hooks/useAuth";

const AssociateDetails = () => {
  const router = useRouter();

  const { Notification } = useNotification();
  const { currentMember } = useMember();

  const [associate, setAssociate] = useState<Associate>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchAssociate = async () => {
        const response = await GenericService.getBy("associates", router.query.id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setAssociate(response.data);
      };

      fetchAssociate();
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  }, []);

  // Render Associate details
  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <BiDetail className="mt-1" />
          <h1>Asociado</h1>
        </div>

        <div>
          {associate ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">ID</span>
                <span>{associate.id}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Cédula</span>
                <span>{associate.idCard}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Nombre</span>
                <span>{`${associate.name}`}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Correo</span>
                <span>{associate.email}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Teléfono</span>
                <span>{associate.phone}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Estado</span>
                <span>{associate.isActive ? "Activo" : "Inactivo"}</span>
              </div>

              <div className=" flex gap-3 items-center justify-start my-5">
                {currentMember?.idRole === 1 && (
                  <Button
                    onClick={() => {
                      router.push(`/app/associates/edit/${associate.id}`);
                    }}
                    className=" text-white p-3"
                  >
                    Editar
                  </Button>
                )}
                <Button
                  onClick={() => {
                    router.push("/app/associates");
                  }}
                  color="blue"
                  className="p-3 text-white"
                >
                  Volver a la lista
                </Button>
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

export default AssociateDetails;
