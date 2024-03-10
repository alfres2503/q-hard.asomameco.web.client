import { AuthService } from "@/utils/AuthService";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from "./common/Button";
import Input from "./common/Input";
import { useMember } from "@/hooks/useAuth";

const authService = new AuthService();

const LoginForm = () => {
  let buttonIsEnabled: boolean = true;

  const { loginMember } = useMember();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const logIn = async () => {
    const member = {
      email: email,
      password: password,
    };

    const memberResponse = await authService.loginMember(member);

    buttonIsEnabled = true;

    if (memberResponse) {
      buttonIsEnabled = false;
      // Router.push("/");
      window.location.href = "/";
    } else {
      buttonIsEnabled = true;
      setErrorText("Credenciales incorrectas.")
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
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
          >     
          </Input>
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
            isDisabled={!buttonIsEnabled}
            onClick={logIn}
            className="w-full p-4 text-lg"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
