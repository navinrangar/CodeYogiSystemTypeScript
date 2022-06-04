import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  theme?: "back" | "submit" | "timer" | "primary";
  icon?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  theme,
  onClick,
  children,
  className,
  disabled,
  ...rest
}: any) => {
  let themeClass = "bg-indigo-700 text-white border-black w-56 h-8";
  let disabledMode = "";
  let disabledProp = "";

  if (disabled) {
    disabledMode = "bg-gray-600";
    disabledProp = "disabled";
  }

  if (theme === "primary") {
    themeClass;
  }

  if (theme === "submit") {
    themeClass = "bg-indigo-500 shadow-gray-400 text-white border-black p-2 inline ";
  }

  if (theme === "timer") {
    themeClass = "bg-blue-600 text-white border-black w-20 h-11";
  }

  if (theme === "back") {
    themeClass = "bg-white text-black border-black w-20 h-11 text-3xl ";
  }

  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabledProp}
      className={"border rounded-md " + themeClass + disabledMode}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary"
};

export default Button;
