import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {}

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={`${className}`.trim()} {...props} />;
};
