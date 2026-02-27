import type { ComponentProps } from "react";

type TButton = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "danger" | "warning" | "success";
};

const Button = ({ children, ...rest }: TButton) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default Button;
