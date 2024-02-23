import { GenericService } from "@/utils/GenericService";
import React, { useEffect, useState } from "react";

const _service: GenericService = new GenericService();

const MembersPage = () => {
  const [apiData, setApiData] = useState([]);
  const [objTestById, setObjTestById] = useState(null);

  const getApiList = async () => {
    try {
      const response = await _service.list("member");

      console.log(response);
      setApiData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getApiById = async () => {
    try {
      const response = await _service.getBy("member", 1);

      console.log(response);
      setObjTestById(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiList();
    getApiById();
  }, []);

  return (
    <>
      <h1>Member List</h1>
      {apiData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.id}</p>
            <p>{data.firstName}</p>
          </div>
        );
      })}

      <h1>Member By Id</h1>
      <div>
        <p>{objTestById?.id}</p>
        <p>{objTestById?.firstName}</p>
      </div>
    </>
  );
};

export default MembersPage;
