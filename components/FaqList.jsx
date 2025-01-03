"use client";

import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { FAQS, FAQS_1, FAQS_2 } from "@/utils/constant";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle between open and close
  };

  return (
    <div className="flex flex-col flex-1 max-w-2xl gap-6 px-2 mx-auto">
      {first &&
        FAQS_1.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => handleToggle(index)}
          />
        ))}
      {second &&
        FAQS_2.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => handleToggle(index)}
          />
        ))}
      <div className="gap-4 flex-center">
        <span className="text-sm font-light">Prev</span>
        <button
          className="bg-[rgba(255,116,0,1)] hover:bg-orange-400 transition-all duration-300 text-lg text-white font-semibold px-2.5 py-0.5 rounded-full"
          onClick={() => {
            setFirst(true);
            setSecond(false);
          }}
        >
          {"<"}
        </button>
        <button
          className="bg-[rgba(255,161,0,1)] hover:bg-orange-200 transition-all duration-300 text-lg text-white font-semibold px-2.5 py-0.5 rounded-full"
          onClick={() => {
            setFirst(false);
            setSecond(true);
          }}
        >
          {">"}
        </button>
        <span className="text-sm font-light">Next</span>
      </div>
    </div>
  );
};

export default FaqList;
