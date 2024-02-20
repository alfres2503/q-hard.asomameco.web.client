import { MemberContext, useMemberProvider } from "@/context/MemberContext";
import React, { useContext, useEffect } from "react";

const index = () => {
  const { currentMember } = useMemberProvider() as any;

  useEffect(() => {
    console.log(currentMember);
  }, [currentMember]);

  return (
    <div>
      <h1>Esto es una página de index, el usuario logeado es:</h1>
      {currentMember ? (
        <div>
          <h2>
            {currentMember.firstName} {currentMember.lastName}
          </h2>
          <p>Email: {currentMember.email}</p>
        </div>
      ) : (
        <h2>Princesa no te has logeado</h2>
      )}
      <img src="https://media.licdn.com/dms/image/D5603AQG36ea_uZU1Qw/profile-displayphoto-shrink_800_800/0/1690389947675?e=2147483647&v=beta&t=csmRee2js5A_Eq0K8B62-BY24p_JqsU0nxKZGFPOtqo" />
    </div>
  );
};

export default index;
