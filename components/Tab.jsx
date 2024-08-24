import { ThemeContext } from "@/context/themes";
import { SERVICE } from "@/utils/constant";
import Image from "next/image";
import { useContext, useState } from "react";

export function Tabs({ first, setFirst }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="hidden md:block">
      <div className="flex">
        {/* Loop through tab data and render button for each. */}
        {SERVICE.map(({ title, color, desc }, idx) => {
          return (
            <button
              key={idx}
              style={{
                background:
                  isDark && idx === activeTabIndex
                    ? "rgba(16,16,16,1)"
                    : idx !== activeTabIndex || first
                    ? color
                    : "black",
              }}
              className={`flex-1 py-6 px-16 ${idx === 0 && "rounded-tl-md"} ${
                idx === 2 && "rounded-tr-md"
              } transition-colors duration-300 text-white ${
                idx === activeTabIndex ? "bg-black" : " hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => {
                setActiveTabIndex(idx);
                setFirst(false);
              }}
            >
              {title}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div
        className={`flex flex-col ${
          first ? "justify-center" : "justify-start"
        } h-[14rem] px-16 py-4 w-full text-white bg-black dark:bg-[rgba(16,16,16,1)] text-wrap rounded-b-md`}
      >
        {first ? (
          <div className="grid gap-2 place-items-center">
            <Image
              src="/assets/icons/setting-light.svg"
              alt="Settings"
              width={40}
              height={40}
            />
            <h3 className="mb-4">
              Get the best services and enjoy a wonderful design experience
            </h3>
          </div>
        ) : (
          <>
            <h3 className={`text-2xl font-semibold text-primary-orange mb-2 `}>
              {SERVICE[activeTabIndex].title}
            </h3>
            <p className="text-sm">{SERVICE[activeTabIndex].desc}</p>
          </>
        )}
      </div>
    </div>
  );
}
