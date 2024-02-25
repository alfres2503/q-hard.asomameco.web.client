import React, { FC } from "react";

// tipo de dato de las propiedades del componente
type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: "orange" | "blue";
  className?: string;
};

// hay que agregar el tipo de dato de las propiedades del componente
const Button: FC<ButtonProps> = ({
  text,
  onClick,
  color = "orange",
  className = "",
}) => {
  const buttonColor =
    color === "blue"
      ? "bg-asomamecoDarkBlue hover:bg-asomamecoDarkBlue-700"
      : "bg-asomamecoDarkOrange hover:bg-asomamecoDarkOrange-700";

  const classes = `uppercase  rounded-lg focus:outline-none ${buttonColor} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
