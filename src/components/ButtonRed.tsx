import React from "react";

const ButtonRed = ({ isAdmin }) => {
  return (
    <>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded drop-shadow-xl mx-5">
        Button {isAdmin}
      </button>
    </>
  );
};

export default ButtonRed;
