import { IconAlertTriangleFilled, IconCheck, IconX } from "@tabler/icons-react";

interface Props {
  type: "success" | "error" | "warning";
  message: string;
}

export const FormAlert = ({ type, message }: Props) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-6 rounded-xl border text-sm font-medium transition-all mb-4
        ${type === "success" ? "bg-green-50 text-green-700 border-green-200" : ""}
        ${type === "error" ? "bg-red-50 text-red-700 border-red-200" : ""}
        ${type === "warning" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""}
      `}
    >
      {type === "success" && <IconCheck size={20} />}
      {type === "error" && <IconX size={20} />}
      {type === "warning" && <IconAlertTriangleFilled size={20} />}
      <span>{message}</span>
    </div>
  );
};
