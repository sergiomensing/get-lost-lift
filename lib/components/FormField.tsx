import { PropsWithChildren } from 'react';
import { Label } from './Label';

export interface FormFieldProps extends PropsWithChildren {
  className?: string;
  label: string;
  description?: string;
  required?: boolean;
  validationMessage?: string;
  validationIntent?: 'info' | 'warning' | 'error' | 'success';
  htmlFor: string;
}

export const FormField = ({
  className = '',
  label,
  htmlFor,
  required = false,
  description,
  validationIntent,
  validationMessage,
  children,
}: FormFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <div className="flex flex-col gap-0.5">
        <Label htmlFor={htmlFor}>
          {label}
          {required && '*'}
        </Label>
        {description && <span className="text-sm opacity-70">{description}</span>}
      </div>
      {children}
      {validationMessage && <span data-intent={validationIntent}>{validationMessage}</span>}
    </div>
  );
};
