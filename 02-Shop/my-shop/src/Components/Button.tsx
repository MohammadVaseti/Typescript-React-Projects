import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";
type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

const Button = ({ children, ...rest }: TButton) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};

export default Button;
