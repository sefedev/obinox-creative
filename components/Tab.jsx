import { SERVICE, tabsData } from "@/utils/constant";
import { useState } from "react";

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="hidden md:block">
      <div className="flex">
        {/* Loop through tab data and render button for each. */}
        {SERVICE.map(({ title, color, desc }, idx) => {
          return (
            <button
              key={idx}
              style={{ background: color }}
              className={`border flex-1 py-6 px-16 ${
                idx === 0 && "rounded-tl-md"
              } ${
                idx === 2 && "rounded-tr-md"
              } transition-colors duration-300 text-white ${
                idx === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {title}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="flex flex-col justify-start h-[14rem] px-24 py-4 text-white bg-black text-wrap rounded-b-md">
        <h3 className={`text-2xl font-semibold text-primary-orange mb-2 `}>
          {SERVICE[activeTabIndex].title}
        </h3>
        <p className="text-sm">{SERVICE[activeTabIndex].desc}</p>
      </div>
    </div>
  );
}
