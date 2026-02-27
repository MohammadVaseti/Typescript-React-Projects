import type { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";
type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

const Button = ({ children, style, variant, ...rest }: TButton) => {
  return (
    <>
      <button
        style={{
          borderRadius: "12px",
          padding: "4px 8px ",
          ...style,
          ...checkVariant(variant),
        }}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#008bff", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "yellow", color: "black" };
  } else if (variant === "warning") {
    return { backgroundColor: "orange", color: "black" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
