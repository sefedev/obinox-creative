import Contact from "@/components/Contact";
import GradientButton from "@/components/GradientButton";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="text-left gap-8 text-white -mt-12 flex flex-col md:flex-row flex-center bg-gradient-to-b pt-12 pb-24 from-[rgba(255,156,0,1)] to-[rgba(255,51,0,1)] px-4 w-screen">
        <div>
          <h1 className="mb-4 text-5xl font-bold">
            Check out what has
            <br /> been done so far
          </h1>
          <p>See Projects i have worked on recently.</p>
        </div>
        <div className="relative">
          <Image
            src="/assets/images/animation.gif"
            alt="laptop-man"
            className="relative z-50 transform -scale-x-100"
            width={400}
            height={500}
          />
          <Image
            src="/assets/images/irregular.png"
            alt="irreglar"
            className="absolute top-6 right-1"
            width={350}
            height={350}
          />
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="flex flex-col w-full gap-16 p-6 my-20 bg-gray-200 dark:bg-[rgba(53,53,53,1)] rounded-md md:p-16">
        {[
          "I-Varse",
          "entryX Mobile App",
          "SentientMate Mobile app & Website",
          "Portfolio Website",
          "Graphics & Motion Design",
          "3D Product Modeling & Animation",
        ].map((portfolio, id) => (
          <div key={id} className="flex flex-col gap-4">
            <div className="w-full h-[20rem] bg-gray-50 dark:bg-black rounded-md"></div>
            <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between">
              <span className="md:text-left">
                <h3 className="text-2xl font-semibold">{portfolio}</h3>
                <p>Visit to view case study</p>
              </span>
              {/* <button className="px-8 py-4 text-white transition-all duration-300 rounded-md bg-gradient-to-r bg-primary-orange hover:bg-primary-orange/60">
                Click to open
              </button> */}
              <GradientButton title="Click to open" link="/" />
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT SECTION */}
      <Contact />
    </>
  );
};

export default Portfolio;
