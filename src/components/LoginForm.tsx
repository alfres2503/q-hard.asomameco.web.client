import { AuthService } from "@/services/AuthService";
import React, { FC, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Button from "./common/Button";
import { Dialog, DialogPanel } from "@tremor/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const authService = new AuthService();

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});

const LoginForm: FC = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (values: any) => {
    setIsLoading(true);
    try {
      const apiResponse = await authService.loginMember(values);
      console.log(apiResponse);

      if (apiResponse.success === true) {
        setIsOpen(false);
        router.push("/app");
      } else {
        setResponse(apiResponse);
        setIsOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsOpen(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => handleLogin(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto my-2">
              <div className="pb-1 pt-1 flex items-center rounded-lg bg-asomamecoDarkBlue mb-3">
                <FaEnvelope className="text-gray-100 m-4 block"></FaEnvelope>
                <Field
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  className="w-full p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 placeholder-gray-100 bg-asomamecoDarkBlue text-white"
                />
              </div>

              {errors.email && touched.email ? (
                <div className="text-red-700">{errors.email}</div>
              ) : null}
              {/* <ErrorMessage className="text-9xl" name="email" /> */}

              <div className="pb-1 pt-1 flex items-center bg-asomamecoDarkBlue rounded-lg my-3 ">
                <MdLockOutline className="text-gray-100 m-4 block"></MdLockOutline>
                <Field
                  className="w-full p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 placeholder-gray-100 bg-asomamecoDarkBlue text-white"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>

              {errors.password && touched.password ? (
                <div className="text-red-700">{errors.password}</div>
              ) : null}

              <div className="flex justify-between text-gray-400">
                <label className="my-7  hover:text-gray-100">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1 hover:accent-orange-400"
                  ></input>
                  Recuérdame
                </label>
                <a
                  className="mb-5 hover:underline hover:text-gray-100 my-7"
                  href="#"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="pb-2 pt-4">
                <Button
                  isDisabled={isLoading}
                  onClick={() => {}}
                  type="submit"
                  className="w-full p-4 text-lg"
                >
                  {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel className="">
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Hubo un error
          </h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {response?.message}
          </p>
          <Button
            color="blue"
            className="mt-8 w-full p-3 text-white"
            onClick={() => setIsOpen(false)}
          >
            Ok
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default LoginForm;
