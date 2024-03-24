import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { Member } from "@/types/models/Member";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { BiDetail } from "react-icons/bi";
import Button from "@/components/common/Button";
import { useMember } from "@/hooks/useAuth";

const MemberDetails = () => {
  const router = useRouter();

  const { Notification } = useNotification();
  const { currentMember } = useMember();

  const [member, setMember] = useState<Member>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchMember = async () => {
        const response = await GenericService.getBy("members", router.query.id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        setMember(response.data);
      };

      fetchMember();
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
    }
  }, []);

  // Render member details
  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <BiDetail className="mt-1" />
          <h1>Miembro</h1>
        </div>

        <div>
          {member ? (
            <div className="flex flex-col gap-5">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                className="w-[8rem] h-[8rem] rounded-full mx-auto"
                alt="User"
              />
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">ID</span>
                <span>{member.id}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Cédula</span>
                <span>{member.idCard}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Nombre</span>
                <span>{`${member.firstName} ${member.lastName}`}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Correo</span>
                <span>{member.email}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Rol</span>
                <span>{member.idRole === 1 ? "Administrador" : "Miembro"}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">Estado</span>
                <span>{member.isActive ? "Activo" : "Inactivo"}</span>
              </div>
              <div className=" flex gap-3 items-center justify-start my-5">
                {currentMember?.idRole === 1 && (
                  <Button
                    onClick={() => {
                      router.push(`/app/members/edit/${member.id}`);
                    }}
                    className=" text-white p-3"
                  >
                    Editar
                  </Button>
                )}
                <Button
                  onClick={() => {
                    router.push("/app/members");
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

export default MemberDetails;
