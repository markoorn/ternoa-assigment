import { ReactNode } from "react";

interface FormContainerProps {
  title: string;
  children: ReactNode;
}

const FormContainer = ({ title, children }: FormContainerProps) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-blueGray-100 rounded-lg border-0">
        <div className="rounded-t mb-0 px-6 py-6 border-b bg-white">
          <div className="text-center flex justify-between">
            <div className="text-xl font-bold">{title}</div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-4">{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
