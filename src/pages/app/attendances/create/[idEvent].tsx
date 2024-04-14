import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { Associate } from "@/types/models/Associate";
import { Event } from "@/types/models/Event";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Layout from "../../layout";
import { FiPlusCircle } from "react-icons/fi";
import { Field, Form, Formik } from "formik";
import { FaCheck, FaUser } from "react-icons/fa";
import { Select, SelectItem, Switch } from "@tremor/react";
import Button from "@/components/common/Button";
import { MdDateRange } from "react-icons/md";
import { Attendance } from "@/types/models/Attendance";
import AttendanceTable from "@/components/AttendanceTable";

const validationSchema = Yup.object().shape({
  idAssociate: Yup.string().required("El asociado es requerido."),
  idEvent: Yup.string().required("El evento es requerido."),
  arrivalTime: Yup.string().required("La hora es requerida."),
  isConfirmed: Yup.boolean().required("La confirmación es requerida."),
});

const createAttendance = () => {
  const router = useRouter();
  const [attendances, setAttendances] = useState<Attendance[]>([]);
  const [associates, setAssociates] = useState([]);
  const [idAssociate, setIdAssociate] = useState(0);
  const { Notification } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(router.isReady){
      setIsLoading(true);
      loadAttendances();
      loadAssociates();
    }
  }, [router.isReady]);

  async function loadAttendances() {
    try {
      if (!router.query.idEvent) {
        return;
      }

      const response = await GenericService.getBy(
        "attendances/event",
        router.query.idEvent
      );

      if (response.status !== 200) {
        Notification(response.message);
        setIsLoading(false);
        return;
      }
      
      setAttendances(response.data);
      setIsLoading(false);

    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
      console.log(error);
      setIsLoading(false);
    }
  }

  const handleSubmit = async (values: any) => {
    try {
      console.log(values);
      setIsLoading(true);

      values.idEvent = Number(router.query.idEvent);
      values.idAssociate = idAssociate;
      values.arrivalTime = values.arrivalTime.toString() + ":00";
      values.isConfirmed = true;

      const response = await GenericService.create("attendances", values);

      if (response.status !== 201) {
        Notification(response.message);
        return;
      }

      Notification("Asistencia creada con éxito");
      loadAttendances();
    } catch (error: any) {
      setIsLoading(false);
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  async function loadAssociates() {
    try {
      const response = await GenericService.list(
        `associates?pageNumber=${1}&pageSize=${999}`
      );
      setAssociates(response.data.list);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
      console.log(error);
    }
  }

  const handleChangeAssociate = async (values: any) => {
    setIdAssociate(Number(values));
  };

  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <FiPlusCircle className="mt-1" />
          <h1 className="">Crear Asistencia</h1>
        </div>

        <Formik
          initialValues={{
            idEvent: 0,
            idAssociate: 0,
            arrivalTime: "",
            isConfirmed: true,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => handleSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                <FaUser className="text-gray-300 m-4 block"></FaUser>
                <Select
                  className="w-[99%]"
                  name="idAssociate"
                  placeholder="Asociado"
                  value={idAssociate.toString() || ""}
                  onChange={handleChangeAssociate}
                >
                  {associates.map((associate: Associate) => (
                    <SelectItem value={associate.id.toString()}>
                      {associate.idCard} - {associate.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                <MdDateRange className="text-gray-300 m-4 block"></MdDateRange>
                <Field
                  type="time"
                  name="arrivalTime"
                  placeholder="Hora de Llegada"
                  className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                />
              </div>
              {errors.arrivalTime && touched.arrivalTime ? (
                <div className="text-red-700 my-2">{errors.arrivalTime}</div>
              ) : null}

              <div className="mt-8 flex gap-3 items-center justify-start">
                <Button
                  onClick={() => { }}
                  type="submit"
                  className="p-3 text-white"
                >
                  {isLoading ? "Cargando..." : "Crear Asistencia"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div>
          <div className='mt-8'>
            {attendances.length !== 0 ?(
              <AttendanceTable data={attendances} />
            ) : "No se han registrado asistencias."}
          </div>
          <div className="mt-8 flex gap-3 items-center justify-start">
            <Button
              onClick={() => {
                router.push("/app/events");
              }}
              color="blue"
              className="p-3 text-white"
            >
              Volver
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default createAttendance;
