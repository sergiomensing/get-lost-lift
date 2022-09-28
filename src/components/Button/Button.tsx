import { ComponentProps } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ComponentProps<"button"> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={[styles.button, className].join("").trim()} {...props}>
      {children}
    </button>
  );
};
