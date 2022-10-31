import { ComponentProps } from 'react';

export interface LabelProps extends ComponentProps<'label'> {}

export const Label = ({ children, className = '', ...props }: LabelProps) => {
  return <label {...props}>{children}</label>;
};
