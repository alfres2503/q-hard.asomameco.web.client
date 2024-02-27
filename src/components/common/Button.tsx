import { ButtonProps } from "@/types/interfaces/ButtonProps";
import React, { FC } from "react";

// hay que agregar el tipo de dato de las propiedades del componente
const Button: FC<ButtonProps> = ({
  children = "",
  onClick,
  color = "orange",
  className = "",
  isDisabled = false,
}) => {
  const buttonColor =
    color === "blue"
      ? "bg-asomamecoDarkBlue hover:bg-asomamecoDarkBlue-700"
      : "bg-asomamecoDarkOrange hover:bg-asomamecoDarkOrange-700";

  const classes = `uppercase transition-colors rounded-lg focus:outline-none ${buttonColor} ${className}`;

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
