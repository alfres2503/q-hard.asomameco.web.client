import { InputProps } from "@/types/interfaces/InputProps";
import React, { FC } from "react";

// hay que agregar el tipo de dato de las propiedades del componente
const Input: FC<InputProps> = ({
  onChange,
  type = "",
  name = "",
  placeholder = "",
  id = "",
  color = "blue",
  className = "",
  isDisabled = false,
}) => {
  const buttonColor =
    color === "orange"
      ? "bg-asomamecoPrimary text-white"
      : color === "blue"
      ? "bg-asomamecoDarkBlue text-white"
      : "bg-white text-gray-800";

  const classes = `rounded-lg focus:outline-none placeholder-gray-100 ${buttonColor} ${className}`;

  return (
    // <button className={classes} onChange={onChange} disabled={isDisabled}>
    //   {children}
    // </button>
    <>
      <input
        className={classes}
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        disabled={isDisabled}
      ></input>
    </>
  );
};

export default Input;
