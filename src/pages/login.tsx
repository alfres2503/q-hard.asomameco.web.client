import ButtonRed from "@/components/ButtonRed";
import React, { useEffect, useState } from "react";

const login = () => {
  const [count, setCount] = useState(0);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("useEffect count");
  }, [count]);

  return (
    <>
      <h1>Hello Pala necia</h1>
      <p>Count: {count}</p>
      <ButtonRed isAdmin={true} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrementar
      </button>
      {listUsers.length > 0 ? (
        <ul>
          {listUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users</p>
      )}
    </>
  );
};

export default login;
