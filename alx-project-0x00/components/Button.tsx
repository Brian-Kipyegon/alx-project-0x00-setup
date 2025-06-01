import { ButtonProps } from "@/interfaces";
import classNames from "classnames";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const buttonClass = classNames(
    "bg-blue-500 text-white font-semibold",
    sizeClasses[size],
    shapeClasses[shape]
  );

  return <button className={buttonClass}>{title}</button>;
};

export default Button;
