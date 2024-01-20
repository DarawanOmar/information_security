import { CiWarning } from "react-icons/ci";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-rose-100 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-rose-800 max-w-[280px] mx-auto  mb-2 ">
      <CiWarning className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
