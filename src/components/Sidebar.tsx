import { MemberContext, useMemberProvider } from "@/context/MemberContext";
import { Container } from "postcss";
import React, { useContext, useEffect, useState } from "react";

import { BiChevronLeft } from "react-icons/bi";
import { IoIosHome, IoMdExit } from "react-icons/io";
import { FaFilePen } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";


const Sidebar = () => {
  const { currentMember } = useMemberProvider() as any;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <div
      className={`${
        toggle ? "w-[5.8rem]" : ""
      } bg-[#0b488c30] h-[96%] w-[20rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-glass relative `}
    >
      <div
        className="absolute top-[7rem] flex justify-center items-center border-solid border-glass -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <BiChevronLeft
          className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`}
        />
      </div>

      {currentMember ? (
        <div>
          <div
            className={`flex gap-5 items-center ${
              toggle
                ? "bg-none transition-all duration-300 delay-200"
                : "bg-[#0b488c50] rounded-xl p-2"
            }`}
          >
            <div className="min-w-[3.5rem] h-[3.5rem]">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://media.licdn.com/dms/image/D5603AQG36ea_uZU1Qw/profile-displayphoto-shrink_800_800/0/1690389947675?e=2147483647&v=beta&t=csmRee2js5A_Eq0K8B62-BY24p_JqsU0nxKZGFPOtqo"
                alt=""
              />
            </div>
            <div className={` ${toggle ? "opacity-0 delay-200" : ""}`}>
              <h3 className="text-xl">
                {currentMember.firstName} {currentMember.lastName}
              </h3>
              <span className="text-[0.75rem] opacity-60">{currentMember.email}</span>
            </div>
          </div>
        </div>
      ) : (
        <h2>Princesa no te has logeado</h2>
      )}

      <div className="">
        {/* https://react-icons.github.io/react-icons/ */}
        <div
          className={` ${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-[#0b488c50] transition-all duration-300 last:absolute left-4 bottom-4`}
          key={1}
        >
          <div className="mr-8 text-[1.7rem]">
            <IoIosHome />
          </div>
          <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] whitespace-pre`}>
            Inicio
          </div>
        </div>
        <div
          className={` ${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-[#0b488c50] transition-all duration-300 last:absolute left-4 bottom-4`}
          key={2}
        >
          <div className="mr-8 text-[1.7rem]">
            <FaFilePen />
          </div>
          <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] whitespace-pre`}>
            Eventos
          </div>
        </div>
        <div
          className={` ${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-[#0b488c50] transition-all duration-300 last:absolute left-4 bottom-4`}
          key={3}
        >
          <div className="mr-8 text-[1.7rem]">
            <FaInfoCircle />
          </div>
          <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] whitespace-pre`}>
            Información
          </div>
        </div>
        <div
          className={` ${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-[#0b488c50] transition-all duration-300 last:absolute left-4 bottom-4`}
          key={4}
        >
          <div className="mr-8 text-[1.7rem]">
            <MdPersonSearch />
          </div>
          <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] whitespace-pre`}>
            Asistencia
          </div>
        </div>
        <div
          className={` ${
            toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
          } flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-[#0b488c50] transition-all duration-300 last:absolute left-4 bottom-4`}
          key={4}
        >
          <div className="mr-8 text-[1.7rem]">
            <IoMdExit />
          </div>
          <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] whitespace-pre`}>
            Cerrar Sesión
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
