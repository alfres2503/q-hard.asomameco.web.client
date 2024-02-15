import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [apiData, setApiData] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get("http://localhost:7220/api/member");

      console.log(response);
      setApiData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
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
    </>
  );
};

export default index;
