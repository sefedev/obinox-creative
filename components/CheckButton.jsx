import { StatusContext } from "@/context/status";
import { useContext, useEffect, useState } from "react";

export default function CheckboxButton({ label, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const { submissionStatus } = useContext(StatusContext);

  useEffect(() => {
    if (submissionStatus === "success" || submissionStatus === "error")
      setIsChecked(false);
  }, [submissionStatus]);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked); // Call the parent's onChange if provided
  };

  return (
    <button
      type="button" // Important: Use button type to prevent form submission issues
      onClick={handleChange}
      className={`
        inline-flex items-center justify-center
        px-4 py-2 rounded-sm
        font-light
        focus:outline-none
        transition-colors duration-200
        ${
          isChecked
            ? "bg-blue-800 hover:bg-blue-900 text-white" // Selected styles
            : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300" // Unselected styles
        }
      `}
    >
      {label}
    </button>
  );
}
