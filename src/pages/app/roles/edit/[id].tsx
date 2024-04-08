import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import * as NextRouter from "next/router";
import { useNotification } from '@/hooks/useNotification';
import { Role } from '@/types/models/Role';
import { GenericService } from '@/services/GenericService';
import { FiPlusCircle } from 'react-icons/fi';
import Layout from '../../layout';
import { Field, Form, Formik } from "formik";
import { MdDriveFileRenameOutline } from 'react-icons/md';
import Button from "@/components/common/Button";

const validationSchema = Yup.object().shape({
    description: Yup.string().required("La descripción es requerida"),
  });

const EditRole = () => {
  const router = NextRouter.useRouter();

  const { Notification } = useNotification();

  const [ isLoading, setIsLoading ] = useState(false);

  const [ role, setRole ] = useState<Role>();

  useEffect(() => {
    try {
        const fetchRole = async () => {
            const response = await GenericService.getBy("roles", router.query.id);

            if (response.status !== 200) {
                Notification(response.message);
                return;
            }

            console.log(response.data);

            setRole(response.data);
        };

        fetchRole();
        
    } catch (error: any) {
        setIsLoading(false);
        Notification(`Acerca del error: ${error.message}`);
    }

  }, []);

  const handleSubmit = async (values: any) => {
    try {
        setIsLoading(true);
        const response = await GenericService.update("roles", values);

          if (response.status !== 202) {
                Notification(response.message);
                return;
            }

            Notification("Rol actualizado con éxito");
            router.push("/app/roles");

    } catch (error: any) {
        setIsLoading(false);
        Notification(`Acerca del error: ${error.message}`);
    }
  };


  return(
    <Layout>
        <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <FiPlusCircle className="mt-1" />
          <h1 className="">Editar este Rol</h1>
        </div>

        <Formik
          initialValues={{
            id: role?.id,
            description: role?.description,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form>
              <div className="w-full px-4 lg:px-0 mx-auto my-2 gap-5">
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDriveFileRenameOutline className="text-gray-300 m-4 block"></MdDriveFileRenameOutline>
                  <Field
                    type="text"
                    name="description"
                    placeholder=" Descripción"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                { errors.description && touched.description ? (
                  <div className="text-red-700 my-2">{errors.description}</div>
                ) : null}

                <div className="mt-8 flex gap-3 items-center justify-start">
                  <Button
                    onClick={() => {}}
                    type="submit"
                    className="p-3 text-white"
                  >
                    {isLoading ? "Cargando..." : "Editar rol"}
                  </Button>
                  <Button
                    onClick={() => {
                      router.push("/app/roles");
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
        </Formik>-
        </section>
    </Layout>
  );
}

export default EditRole;