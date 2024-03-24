import React, { useState } from "react";
import Layout from "../layout";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaAddressCard, FaEnvelope } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@/components/common/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";

const validationSchema = Yup.object().shape({
  idRole: Yup.number().required("El rol es requerido"),
  idCard: Yup.string().required("La cédula es requerida"),
  firstName: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(20, "La contraseña debe tener menos de 20 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
    )
    .required("La contraseña es requerida"),
  isActive: Yup.boolean().required("El estado es requerido"),
});

const CreateMember = () => {
  const router = useRouter();
  const { Notification } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const response = await GenericService.create("members", values);

      if (response.status !== 201) {
        Notification(response.message);
        return;
      }

      Notification("Miembro registrado con éxito");
      router.push("/app/members");
    } catch (error: any) {
      setIsLoading(false);
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <FiPlusCircle className="mt-1" />
          <h1 className="">Registrar un miembro</h1>
        </div>

        <Formik
          initialValues={{
            idRole: 2,
            idCard: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            isActive: true,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => handleSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="w-full px-4 lg:px-0 mx-auto my-2 gap-5">
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <FaAddressCard className="text-gray-300 m-4 block"></FaAddressCard>
                  <Field
                    type="text"
                    name="idCard"
                    placeholder=" Cédula/ID"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.idCard && touched.idCard ? (
                  <div className="text-red-700 my-2">{errors.idCard}</div>
                ) : null}
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDriveFileRenameOutline className="text-gray-300 m-4 block"></MdDriveFileRenameOutline>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder=" Nombre"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-700 my-2">{errors.firstName}</div>
                ) : null}
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDriveFileRenameOutline className="text-gray-300 m-4 block"></MdDriveFileRenameOutline>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder=" Apellido"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-700 my-2">{errors.lastName}</div>
                ) : null}
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <FaEnvelope className="text-gray-300 m-4 block"></FaEnvelope>
                  <Field
                    type="email"
                    name="email"
                    placeholder=" Correo Electrónico"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className="text-red-700 my-2">{errors.email}</div>
                ) : null}
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <RiLockPasswordFill className="text-gray-300 m-4 block"></RiLockPasswordFill>
                  <Field
                    type="password"
                    name="password"
                    placeholder=" Contraseña"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.password && touched.password ? (
                  <div className="text-red-700 my-2">{errors.password}</div>
                ) : null}

                <div className="mt-8 flex gap-3 items-center justify-start">
                  <Button
                    onClick={() => {}}
                    type="submit"
                    className="p-3 text-white"
                  >
                    {isLoading ? "Cargando..." : "Registrar miembro"}
                  </Button>
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
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  );
};

export default CreateMember;
