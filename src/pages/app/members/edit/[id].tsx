import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaAddressCard, FaCheck, FaEnvelope, FaUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Button from "@/components/common/Button";
import { FiPlusCircle } from "react-icons/fi";
import * as NextRouter from "next/router";
import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import Layout from "../../layout";
import { Select, SelectItem, Switch } from "@tremor/react";
import { Member } from "@/types/models/Member";
import { Role } from "@/types/models/Role";

const validationSchema = Yup.object().shape({
  id: Yup.number().required("El id es requerido"),
  idRole: Yup.number().required("El rol es requerido"),
  idCard: Yup.string().required("La cédula es requerida"),
  firstName: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  email: Yup.string()
    .email("Ingrese un correo válido")
    .required("El correo es requerido"),
  isActive: Yup.boolean().required("El estado es requerido"),
});

const EditMember = () => {
  const router = NextRouter.useRouter();

  const { Notification } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const [member, setMember] = useState<Member>();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    try {
      const getRoles = async () => {
        const response = await GenericService.list("roles");

        if (response.status !== 200) {
          Notification(response.data.message);
          return;
        }

        setRoles(response.data.list);
      };

      const fetchMember = async () => {
        const response = await GenericService.getBy("members", router.query.id);

        if (response.status !== 200) {
          Notification(response.message);
          return;
        }

        console.log(response.data);

        setMember(response.data);
      };

      getRoles();
      fetchMember();
    } catch (error: any) {
      setIsLoading(false);
      Notification(`Acerca del error: ${error.message}`);
    }
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const response = await GenericService.update("members", values);

      if (response.status !== 202) {
        Notification(response.message);
        return;
      }

      Notification("Miembro actualizado con éxito");
      router.push("/app/members");
    } catch (error: any) {
      setIsLoading(false);
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  const handleChangeState = async (values: any) => {
    setMember({ ...member!, isActive: !member?.isActive, id: member?.id || 0 });
  };

  const handleChangeRole = async (values: any) => {
    setMember({ ...member!, idRole: Number(values) });
  };

  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <FiPlusCircle className="mt-1" />
          <h1 className="">Editar un miembro</h1>
        </div>

        <Formik
          initialValues={{
            id: member?.id,
            idRole: member?.idRole,
            idCard: member?.idCard,
            firstName: member?.firstName,
            lastName: member?.lastName,
            email: member?.email,
            password: member?.password,
            isActive: member?.isActive,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div className="w-full px-4 lg:px-0 mx-auto my-2 gap-5">
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <FaUser className="text-gray-300 m-4 block"></FaUser>
                  <Select
                    className="w-[99%]"
                    placeholder="Rol"
                    value={member?.idRole.toString() || ""}
                    onChange={handleChangeRole}
                  >
                    {roles.map((role: Role) => (
                      <SelectItem value={role.id.toString()}>
                        {role.description}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
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
                <div className="pb-1 pt-1 flex items-center justify-start rounded-lg border-2 border-gray-300 mb-3">
                  <FaCheck className="text-gray-300 m-4 block" />
                  <p>Activo: </p>
                  <Switch
                    className="mt-2 ms-3"
                    checked={member?.isActive}
                    onClick={handleChangeState}
                  />
                </div>

                <div className="mt-8 flex gap-3 items-center justify-between">
                  <Button
                    onClick={() => {}}
                    type="submit"
                    className="p-3 text-white"
                  >
                    {isLoading ? "Cargando..." : "Editar miembro"}
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

export default EditMember;
