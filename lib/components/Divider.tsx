import { ComponentProps } from "react";

export interface DividerProps extends ComponentProps<"hr"> {
  orientation?: "horizontal" | "vertical";
}

export const Divider = ({
  orientation = "horizontal",
  className = "",
  ...props
}: DividerProps) => {
  return (
    <hr
      data-intent={orientation}
      className={`border-0 ${
        orientation === "vertical" ? "border-r" : "border-b"
      } ${className}`.trim()}
      {...props}
    />
  );
};
