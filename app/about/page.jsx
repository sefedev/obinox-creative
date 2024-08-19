import { ABOUT_SERVICE } from "@/utils/constant";
import Image from "next/image";
import React from "react";

const About = () => {
  const render_services = (services) => (
    <ul>
      {services.map((service, id) => (
        <li key={id}>{service}</li>
      ))}
    </ul>
  );

  return (
    <>
      <section className="items-center justify-center gap-16 md:flex">
        <div className="text-justify">
          <h2 className="mb-4 text-5xl font-semibold">
            Damilola <span className="text-primary-orange">Akintola</span>
          </h2>
          <p className="mb-6 text-sm md:max-w-[24rem]">
            I develop distinctive visual experiences for brands and users via
            various communication designs. With years of experience and with a
            strong foundation in user-centered design principles, I specialize
            in crafting interfaces that are both functional and aesthetically
            engaging. My process is deeply rooted in understanding user needs,
            conducting thorough research, and iterating through design solutions
            that enhance usability and accessibility. I am proficient in tools
            like Figma, Adobe aftereffects, Photoshop, illustrator, Blender and
            more.
          </p>
          <div className="flex flex-col w-full gap-4 text-white md:flex-row md:w-fit">
            <button className="px-12 bg-[rgba(40,103,178,1)] rounded-md flex-center py-4 w-full gap-1 ">
              <Image
                src="/assets/images/linkedin.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              LinkedIn
            </button>
            <button className="px-12 bg-[rgba(30,109,255,1)] rounded-md flex-center py-4 w-full gap-1 ">
              <Image
                src="/assets/images/behance.png"
                alt="Linkedin"
                width={20}
                height={20}
              />
              Behance
            </button>
          </div>
        </div>
        <Image
          src="/assets/images/obinox-logo.png"
          width={300}
          height={300}
          className="hidden rounded-md md:block"
        />
      </section>
      <section>
        <h2 className="section_subhead">Services Include</h2>
        <div>
          {ABOUT_SERVICE.map(({ title, services }, id) => (
            <div key={id}>
              <h3>{title}</h3>
              {render_services(services)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
