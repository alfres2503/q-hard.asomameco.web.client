import { useMemberProvider } from "@/context/MemberContext";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";

const IndexPage = () => {
  const router = useRouter();
  const { currentMember } = useMemberProvider() as any;

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <>
      {/* 1. Hero (banner & support) */}
      <div className="flex flex-col items-center w-full ">
        {/* Hero section */}
        <section className="w-full flex flex-col justify-center items-center bg-gradient-to-l  from-asomamecoDarkBlue-600 to-AsomamecoBlue-600 py-32 space-y-6 md:px-6 sm:px-8">
          <img src="favicon.svg" alt="Banner" className="h-24 object-fill" />
          <h1 className="text-white text-5xl font-bold text-center">
            Asociación Maridos a Mecate Corto
          </h1>
        </section>
        {/* No estas solo section */}
        <section className="w-full p-4 md:p-6 sm:py-12 bg-black flex items-center justify-center">
          <div className="container grid items-center gap-4 w-full text-center md:gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-gray-200 tracking-tighter sm:text-5xl md:text-6xl">
                No estás solo
              </h1>
              <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Estamos aquí para ayudarte a encontrar tu camino a la libertad.
              </p>
            </div>
            <Button
              className="h-11 items-center w-full justify-center px-6 text-sm font-medium text-gray-50 shadow "
              onClick={() => router.push("/support")}
            >
              Encuentra apoyo
            </Button>
          </div>
        </section>
      </div>

      {/* 2. Real Stories */}
      <div className="w-full py-12 lg:py-16">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center lg:space-y-4 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Casos Reales
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Escucha a hombres que han encontrado salvación.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">
                  Encontrando mi voz
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Michael, 44 años
                </p>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                "Antes, mi esposa tomaba todas las decisiones importantes.
                Incluso elegía mi sabor de helado. Gracias a la asociación,
                ahora puedo decir con orgullo que he elegido fresa por primera
                vez en años. ¡Recuperé el control, aunque sea sobre mi helado!"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">
                  Un Nuevo Comienzo
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Anibal, 21 años
                </p>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                "Gracias a la asociación, aprendí a establecer límites de manera
                saludable. Antes mi pareja elegía mi corte de pelo, mi ropa y
                hasta mis amigos. Ahora, decido mi propio estilo y hasta tengo
                un amigo al que ella no eligió por mí. ¡Es un gran paso!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Upcoming Events */}
      <div className="w-full py-6 lg:py-16 bg-gradient-to-r  from-asomamecoDarkBlue-900 to-AsomamecoBlue-600">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center lg:space-y-4 lg:text-left">
            <h2 className=" text-gray-200 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Próximos Eventos
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Únete a nuestros talleres y discusiones.
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl text-gray-200 font-semibold tracking-tighter">
                • Taller: "Recuperando la Sala de Estar"
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                15 de marzo, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                ¿Tu esposa ha tomado el control del televisor y la decoración?
                ¡Es hora de recuperar tu espacio! En este taller, aprenderás
                estrategias ingeniosas para negociar el control remoto y cómo
                agregar toques masculinos a la sala de estar. ¡Deshazte de las
                almohadas decorativas en exceso y recupera el dominio de tu
                territorio!
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl text-gray-200 font-semibold tracking-tighter">
                • Evento: "Noche de Risas para Hombres Empoderados"
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                5 de abril, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                ¿Necesitas un respiro divertido? Únete a nuestra "Noche de Risas
                para Hombres Empoderados". Comediantes expertos te guiarán a
                través de situaciones cotidianas con las que muchos hombres se
                identifican, ofreciendo una perspectiva humorística sobre la
                vida en pareja. ¡Prepárate para liberar esas risas reprimidas!
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl text-gray-200 font-semibold tracking-tighter">
                • Taller: "Hombres al Mando de la Barbacoa"
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                22 de abril, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                ¿Sientes que has perdido el control de las parrillas?
                ¡Recupéralo en nuestro taller exclusivo! Descubre secretos para
                preparar las mejores carnes a la parrilla y aprende a manejar
                las herramientas de la barbacoa como un verdadero líder. ¡No más
                debates sobre la sazón, toma el control de tus brasas!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Connect with Us */}
      <div className="w-full py-12 lg:py-16">
        <div className="container grid items-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center lg:space-y-4 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Conéctate con Nosotros
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Síguenos en redes sociales para actualizaciones e inspiración.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div className="grid gap-2 min-[400px]:flex-row">
              <Button
                className=" text-white inline-flex h-10 items-center px-4 text-sm font-medium gap-2 "
                color="blue"
                onClick={() => router.push("#")}
              >
                <FaInstagram className="h-4 w-4" />
                Instagram
              </Button>
              <Button
                className=" text-white inline-flex h-10 items-center px-4 text-sm font-medium gap-2"
                color="blue"
                onClick={() => router.push("#")}
              >
                <FaFacebook className="h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Footer */}
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
