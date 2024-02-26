import { useMemberProvider } from "@/context/MemberContext";
import { AuthService } from "@/utils/AuthService";
import Router from "next/router";
import React, { useContext, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from "./common/Button";

const authService = new AuthService();

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    const member = {
      email: email,
      password: password,
    };

    const memberResponse = await authService.loginMember(member);



    if (memberResponse) {
      // Router.push("/");
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto my-2 ">
        <div className="pb-1 pt-1 flex items-center rounded-lg bg-[#052850]">
          <FaEnvelope className="text-gray-100 m-4 block"></FaEnvelope>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            className="block w-full p-3 pl-1 text-lg rounded-lg bg-[#052850] focus:outline-none placeholder-gray-100"
          ></input>
        </div>
        <div className="pb-2 pt-4 "></div>
        <div className="pb-1 pt-1 flex items-center bg-[#052850] rounded-lg ">
          <MdLockOutline className="text-gray-100 m-4 block"></MdLockOutline>
          <input
            className="block w-full p-3 pl-1 text-lg rounded-lg bg-[#052850] focus:outline-none placeholder-gray-100"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Contraseña"
          ></input>
        </div>
        <div className="flex justify-between text-gray-400">
          <label className="my-7  hover:text-gray-100">
            <input
              type="checkbox"
              name="remember"
              className="mr-1 hover:accent-orange-400"
            ></input>
            Recuérdame
          </label>
          <a className="mb-5 hover:underline hover:text-gray-100 my-7" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className="pb-2 pt-4">
          <Button
            onClick={logIn}
            className="w-full p-4 text-lg"
          >Iniciar sesión</Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
