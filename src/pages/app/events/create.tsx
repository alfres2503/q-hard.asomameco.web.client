import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FaAddressCard, FaEnvelope, FaUser } from "react-icons/fa";
import {
  Md60Fps,
  MdDateRange,
  MdDescription,
  MdDriveFileRenameOutline,
  MdLockClock,
  MdPlace,
} from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@/components/common/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/useNotification";
import { GenericService } from "@/services/GenericService";
import { Member } from "@/types/models/Member";
import { Select, SelectItem, Switch } from "@tremor/react";
import { Event } from "@/types/models/Event";
import { IoMdClock } from "react-icons/io";
import { CateringService } from "@/types/models/CateringService";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ponele nombre ahí si me hace el favor."),
  description: Yup.string().required("¿De qué trata esa carajada?"),
  place: Yup.string().required("Decime dónde es pa ver si le llego."),
  date: Yup.date().required("Ponele fecha que si no quedamos en nada."),
  time: Yup.string().required("¿A qué hora papillo?"),
});

const CreateEvent = () => {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [caterines, setCaterines] = useState([]);
  const [_event, setEvent] = useState<Event>();
  const [idMember, setIdMember] = useState(0);
  const [idCaterine, setIdCaterine] = useState(0);
  const { Notification } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMembers();
    loadCaterines();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      
      values.idMember = idMember;
      values.idCateringService = idCaterine;
      values.time = values.time.toString() + ":00";

      const response = await GenericService.create("events", values);

      if (response.status !== 201) {
        Notification(response.message);
        return;
      }

      Notification("Evento creado con éxito");
      router.push("/app/events");
    } catch (error: any) {
      setIsLoading(false);
      Notification(`Acerca del error: ${error.message}`);
    }
  };

  async function loadMembers() {
    try {
      const response = await GenericService.list(
        `members?pageNumber=${1}&pageSize=${999}`
      );
      setMembers(response.data.list);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
      console.log(error);
    }
  }

  async function loadCaterines() {
    try {
      const response = await GenericService.list(
        `cateringservices?pageNumber=${1}&pageSize=${999}`
      );
      setCaterines(response.data.list);
    } catch (error: any) {
      Notification(`Acerca del error: ${error.message}`);
      console.log(error);
    }
  }

  const handleChangeMember = async (values: any) => {
    setIdMember(Number(values));
  };
  const handleChangeCaterine = async (values: any) => {
    setIdCaterine(Number(values));
  };

  return (
    <Layout>
      <section className="p-0 md:p-0  max-w-9xl flex flex-col justify-center gap-5 mx-10 mt-10">
        <div className="flex justify-start items-center text-center gap-3 text-xl font-bold">
          <FiPlusCircle className="mt-1" />
          <h1 className="">Crear evento</h1>
        </div>

        <Formik
          initialValues={{
            idMember: 0,
            name: "",
            description: "",
            date: "",
            time: "",
            place: "",
            idCateringService: 1,
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
                  name="idMember"
                  placeholder="Miembro"
                  value={idMember.toString() || ""}
                  onChange={handleChangeMember}
                >
                  {members.map((member: Member) => (
                    <SelectItem value={member.id.toString()}>
                      {member.firstName + " " + member.lastName}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="w-full px-4 lg:px-0 mx-auto my-2 gap-5">
                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDriveFileRenameOutline className="text-gray-300 m-4 block"></MdDriveFileRenameOutline>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.name && touched.name ? (
                  <div className="text-red-700 my-2">{errors.name}</div>
                ) : null}

                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDescription className="text-gray-300 m-4 block"></MdDescription>
                  <Field
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.description && touched.description ? (
                  <div className="text-red-700 my-2">{errors.description}</div>
                ) : null}

                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdPlace className="text-gray-300 m-4 block"></MdPlace>
                  <Field
                    type="text"
                    name="place"
                    placeholder="Lugar"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.place && touched.place ? (
                  <div className="text-red-700 my-2">{errors.place}</div>
                ) : null}

                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <MdDateRange className="text-gray-300 m-4 block"></MdDateRange>
                  <Field
                    type="date"
                    name="date"
                    placeholder="Fecha"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.date && touched.date ? (
                  <div className="text-red-700 my-2">{errors.date}</div>
                ) : null}

                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <IoMdClock className="text-gray-300 m-4 block"></IoMdClock>
                  <Field
                    type="time"
                    name="time"
                    placeholder="Hora"
                    className="w-[95%] p-3 pl-1 text-lg rounded-lg focus:outline-none border-0 border-gray-300 placeholder-gray-300"
                  />
                </div>
                {errors.time && touched.time ? (
                  <div className="text-red-700 my-2">{errors.time}</div>
                ) : null}

                <div className="pb-1 pt-1 flex items-center rounded-lg border-2 border-gray-300 mb-3">
                  <FaUser className="text-gray-300 m-4 block"></FaUser>
                  <Select
                    className="w-[99%]"
                    name="idCateringService"
                    placeholder="Servicio de Catering"
                    value={idCaterine.toString() || ""}
                    onChange={handleChangeCaterine}
                  >
                    {caterines.map((caterine: CateringService) => (
                      <SelectItem value={caterine.id.toString()}>
                        {caterine.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <div className="mt-8 flex gap-3 items-center justify-start">
                  <Button
                    onClick={() => {}}
                    type="submit"
                    className="p-3 text-white"
                  >
                    {isLoading ? "Cargando..." : "Crear evento"}
                  </Button>
                  <Button
                    onClick={() => {
                      router.push("/app/events");
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

export default CreateEvent;
