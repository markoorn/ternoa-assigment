import { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
  fullWidth?: boolean;
  label: string;
}

const FormField = ({ children, fullWidth = false, label }: FormFieldProps) => {
  return (
    <div className={`w-full px-4 ${!fullWidth && "lg:w-6/12"}`}>
      <div className="relative w-full mb-3">
        <label className="block uppercase text-xs font-bold mb-2">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
};
export default FormField;
