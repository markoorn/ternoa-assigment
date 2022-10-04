import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <>
      <div className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        {title}
      </div>
      <div className="flex flex-wrap">{children}</div>
    </>
  );
};
export default FormSection;
