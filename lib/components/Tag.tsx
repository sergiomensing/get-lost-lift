import { ComponentProps } from 'react';

export interface TagProps extends ComponentProps<'span'> {
  intent?: 'info' | 'warning' | 'error' | 'success';
}

export const Tag = ({ children, intent, className = '', ...props }: TagProps) => {
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
