import { AuthService } from "@/services/AuthService";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from "./common/Button";
import Input from "./common/Input";
import { useRouter } from "next/router";

const authService = new AuthService();

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const HandleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await authService.loginMember({ email, password });

      if (response) router.push("/app");
    } catch (error) {
      setErrorText("Hubo un error al iniciar sesión.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto my-2 ">
        <div className="pb-1 pt-1 flex items-center rounded-lg bg-asomamecoDarkBlue">
          <FaEnvelope className="text-gray-100 m-4 block"></FaEnvelope>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            className="block w-full p-3 pl-1 text-lg rounded-lg bg-[#052850] focus:outline-none placeholder-gray-100"
          ></Input>
        </div>
        <div className="pb-2 pt-4 "></div>
        <div className="pb-1 pt-1 flex items-center bg-asomamecoDarkBlue rounded-lg ">
          <MdLockOutline className="text-gray-100 m-4 block"></MdLockOutline>
          <Input
            className="w-full p-3 pl-1 text-lg"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Contraseña"
          ></Input>
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

        <h3 className="text-red-600">{errorText}</h3>
        <div className="pb-2 pt-4">
          <Button
            isDisabled={isLoading}
            onClick={() => {}}
            className="w-full p-4 text-lg"
            type="submit"
          >
            {isLoading ? "Cargando..." : "Iniciar Sesión"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
