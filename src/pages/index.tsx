import { useMemberProvider } from "@/context/MemberContext";
import React, { useContext, useEffect } from "react";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";

import { RiDoubleQuotesL } from "react-icons/ri";
import { MdEvent } from "react-icons/md";

const IndexPage = () => {
  const router = useRouter();
  const { currentMember } = useMemberProvider() as any;

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <>

      {/* 1. Hero (banner & support) */}
      <div className="p-10 w-full overflow-hidden justify-center items-start bg-gradient-to-l  from-asomamecoDarkBlue-600 to-AsomamecoBlue-600">
        <section id="Home" className="  flex md:flex-row flex-col sm:py-16 py-6">
          {/* Hero section */}
          <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
            <img src="Logo.svg" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
          </div>

          {/* No estas solo section */}
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 sm:m-0 md:ml-80 ml-0">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className=" flex-1 ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] font-semibold text-gray-200">
                No estás solo
              </h1>
            </div>
            <p className="max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Estamos aquí para ayudarte a encontrar tu camino a la libertad.
            </p>
            <div>
              <Button
                className="h-11 items-center w-full justify-center px-6 text-sm font-medium text-gray-50 shadow max-w-[470px] mt-5 "
                onClick={() => router.push("/support")}
              >
                Encuentra apoyo
              </Button>
            </div>
          </div>


        </section>
      </div>

      {/* 2. Real Stories */}
      <div className="p-10 w-full overflow-hidden justify-center items-start ">
        <section id="Home" className="  flex md:flex-row flex-col sm:py-16 py-6">
          {/* Casos reales section */}
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className=" flex-1 ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] font-semibold ">
                Casos Reales
              </h1>
            </div>
            <p className="max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Escucha a hombres que han encontrado salvación.
            </p>
          </div>

          {/* Casos section */}
          <div className={`flex flex-col md:flex-row justify-center items-center md:my-0 my-10 relative`}>

            {/* CASO 1 */}
            <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[650px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
              <RiDoubleQuotesL className="w-[60px] h-[60px] object-contain" />
              <p className="font-normal text-[18px] leading-[32.4px]  my-10">
                "Antes, mi esposa tomaba todas las decisiones importantes.
                Incluso elegía mi sabor de helado. Gracias a la asociación,
                ahora puedo decir con orgullo que he elegido fresa por primera
                vez en años. ¡Recuperé el control, aunque sea sobre mi helado!"
              </p>
              <div className="flex flex-row">
                <div className="flex flex-col ml-4">
                  <h4 className=" font-semibold text-[20px] leading-[32px] ">
                    Michael, 44 años
                  </h4>
                  <p className=" font-normal text-[16px] leading-[24px] text-dimWhite">
                    Encontrando mi voz
                  </p>
                </div>
              </div>
            </div>

            {/* CASO 2 */}
            <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] bg-blue max-w-[650px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
              <RiDoubleQuotesL className="w-[60px] h-[60px] object-contain" />
              <p className="font-normal text-[18px] leading-[32.4px]  my-10">
                "Gracias a la asociación, aprendí a establecer límites de manera
                saludable. Antes mi pareja elegía mi corte de pelo, mi ropa y
                hasta mis amigos. Ahora, decido mi propio estilo y hasta tengo
                un amigo al que ella no eligió por mí. ¡Es un gran paso!"
              </p>
              <div className="flex flex-row">
                <div className="flex flex-col ml-4">
                  <h4 className=" font-semibold text-[20px] leading-[32px] ">
                    Anibal, 21 años
                  </h4>
                  <p className=" font-normal text-[16px] leading-[24px] text-dimWhite">
                    Un Nuevo Comienzo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Upcoming Events */}
      <div className="p-10 w-full overflow-hidden justify-center items-start bg-gradient-to-r  from-asomamecoDarkBlue-900 to-AsomamecoBlue-600">
        <div className="space-y-2 text-center lg:space-y-4 lg:text-left">
          <h2 className=" text-gray-200 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Próximos Eventos
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Únete a nuestros talleres y discusiones.
          </p>
        </div>

        {/* EVENTO 1 */}
        <div className={`flex-1 flex justify-center items-center md:ml-1 ml-0 md:mt-0 mt-10 relative flex-col`}>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center`}>
              <MdEvent className=" w-[50%] h-[50%] object-contain" color="orange" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className=" font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                Taller: "Recuperando la Sala de Estar"
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                15 de marzo, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400 font-normal text-dimWhite text-[16px] leading-[24px]">
                ¿Tu esposa ha tomado el control del televisor y la decoración?
                ¡Es hora de recuperar tu espacio! En este taller, aprenderás
                estrategias ingeniosas para negociar el control remoto y cómo
                agregar toques masculinos a la sala de estar. ¡Deshazte de las
                almohadas decorativas en exceso y recupera el dominio de tu
                territorio!
              </p>
            </div>
          </div>
        </div>

        {/* EVENTO 2 */}
        <div className={`flex-1 flex justify-center items-center md:ml-1 ml-0 md:mt-0 mt-10 relative flex-col`}>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
              <MdEvent className=" w-[50%] h-[50%] object-contain" color="orange" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className=" font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                Evento: "Noche de Risas para Hombres Empoderados"
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                5 de abril, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400 font-normal text-dimWhite text-[16px] leading-[24px]">
                ¿Necesitas un respiro divertido? Únete a nuestra "Noche de Risas
                para Hombres Empoderados". Comediantes expertos te guiarán a
                través de situaciones cotidianas con las que muchos hombres se
                identifican, ofreciendo una perspectiva humorística sobre la
                vida en pareja. ¡Prepárate para liberar esas risas reprimidas!
              </p>
            </div>
          </div>
        </div>

        {/* EVENTO 3 */}
        <div className={`flex-1 flex justify-center items-center md:ml-1 ml-0 md:mt-0 mt-10 relative flex-col`}>
          <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
              <MdEvent className=" w-[50%] h-[50%] object-contain" color="orange" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
              <h4 className=" font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                Taller: "Hombres al Mando de la Barbacoa"
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                22 de abril, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400 font-normal text-dimWhite text-[16px] leading-[24px]">
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
      <div className="p-10 w-full overflow-hidden justify-center items-start">
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
