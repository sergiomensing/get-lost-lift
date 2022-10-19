import { ComponentProps } from "react";

export interface LabelProps extends ComponentProps<"span"> {
  intent?: "info" | "warning" | "error" | "success";
}

export const Label = ({
  children,
  intent,
  className = "",
  ...props
}: LabelProps) => {
  return (
    <span
      data-intent={intent}
      className={`inline-flex bg-rose-100 py-1 px-2 rounded text-rose-700 ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
