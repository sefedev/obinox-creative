import React from "react";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full ">
      <button
        className="flex items-center justify-between w-full pr-2 text-left bg-gray-700 rounded-md md:pr-6 focus:outline-none"
        onClick={onClick}
      >
        <span className="p-3 text-white">{question}</span>
        {/* <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg> */}
        <span className="px-[0.5rem] grid place-items-center font-bold text-2xl text-white bg-[rgba(255,51,0,1)] hover:bg-orange-400 transition-all duration-200 rounded-full">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 text-left bg-gray-100 dark:bg-gray-800">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
