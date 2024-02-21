import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AsomamecoLogoLinea from "../img/LogoOficialAsomamecoLimpioCorto.png";

const login = () => {
  //Inicio componente login
  return (
    <>
      <section className="min-h-screen flex items-stretch text-white  bg-[#012245] ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center  bg-[url(../img/asking.jpg)]"
        
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              ASOMAMECO
            </h1>

            <p className="text-3xl my-4">
            ¿Eres maltratado por tu pareja? Aquí te comprendemos y apoyamos.
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <p className="mb-5 my-7">¿Aún no tienes una cuenta?</p>
            <a
              className="mb-5 hover:underline hover:text-gray-100 my-7"
              href="#"
            >
              Regístrate aqui!
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 background-color: black;">
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center  bg-[url(../img/asking.jpg)]"
           
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="mb-10">
              <Image
                className="w-auto h-30 sm:h-30 inline-flex"
                src={AsomamecoLogoLinea}
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

export default login;
