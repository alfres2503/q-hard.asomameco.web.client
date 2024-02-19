import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const LoginForm = () => {
  return (
    <>
    
      <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto my-2 ">
        <div className="pb-1 pt-1 flex items-center bg-black rounded-sm  ">
          <FaEnvelope className="text-gray-400 m-4 block"></FaEnvelope>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo Electrónico"
            className="block w-full p-3 pl-1 text-lg rounded-sm bg-black  "
          ></input>
        </div>
        <div className="pb-2 pt-4 "></div>
        <div className="pb-1 pt-1 flex items-center bg-black rounded-sm">
          <MdLockOutline className="text-gray-400 m-4 block"></MdLockOutline>
          <input
            className="block w-full p-3 pl-1 text-lg rounded-sm bg-black "
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          ></input>
        </div>
        <div className="flex justify-between text-gray-400">
          <label className="my-7  hover:text-gray-100">
            <input type="checkbox" name="remember" className="mr-1 accent-indigo-300 hover:accent-indigo-500"></input>
            Recuerdame
          </label>
          <a className="mb-5 hover:underline hover:text-gray-100 my-7" href="#">
            Olvidaste tu contraseña?
          </a>
        </div>

        <div className="px-4 pb-2 pt-4">
          <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
            Iniciar Sesión
          </button>
        </div>

        <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
          <a href="#"></a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
