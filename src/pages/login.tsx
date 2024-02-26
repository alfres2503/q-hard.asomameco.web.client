import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const LoginPage = () => {
  //Inicio componente login
  return (
    <>
      <Head>
        <title>Asomameco | Inicia Sesión</title>
        <meta name="description" content="Inicia sesión en Asomameco" />
      </Head>

      <section className="min-h-screen flex items-stretch text-white  bg-[#012245]  ">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url(../../public/images/asking.jpg)]  ">
          <div className="absolute bg-black opacity-60 inset-0 z-0 "></div>
          <div className="w-full px-20 z-10 ">
            <h1 className="text-3xl font-bold text-left tracking-wide">
              Asociación Maridos A Mecate Corto
            </h1>

            <p className="text-2xl my-4 text-center ">
              ¿Eres maltratado por tu mujer?
              <br />
              ¡Nosotros te ayudamos!
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center"></div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 background-color: black; ">
          <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center  bg-[url(../../public/images/asking.jpg)] ">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="mb-10">
              <Image
                className="w-auto h-[10rem] sm:h-22 inline-flex"
                src="Logo.svg"
                width={300}
                height={300}
                alt="Asomameco Logo"
              />
            </h1>

            <p className="text-gray-200 my-2 mb-6">
              Por favor inicia sesión con tu cuenta.
            </p>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
