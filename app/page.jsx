import Image from "next/image";
import React from "react";

const Home = () => {
  const TESTIMONY = [
    {
      name: "Atop",
      width: 111,
    },
    {
      name: "Cardic",
      width: 118,
    },
    {
      name: "Carpe-diem",
      width: 161,
    },
    {
      name: "Cwito",
      width: 121,
    },
    {
      name: "I-Varse",
      width: 117,
    },
    {
      name: "Owlya",
      width: 127,
    },
  ];
  return (
    <>
      {/* BACKDROP */}
      <Image
        src="/assets/images/backdrop-left.svg"
        alt="backdrop-left"
        className="absolute top-0 hidden -z-50 -left-10 md:block"
        width={300}
        height={300}
      />
      <Image
        src="/assets/images/backdrop-right.svg"
        alt="backdrop-right"
        className="absolute top-0 hidden -z-50 -right-10 md:block"
        width={300}
        height={300}
      />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center my-6 gap-y-8">
        {/* <h1 className="text-[42px] leading-10 font-semibold md:text-7xl mb-4">
          Limitless
          <br /> Digital Designs
        </h1> */}

        <Image
          src="/assets/images/hero-main.png"
          alt="limitless digital deisgns"
          width={400}
          height={400}
          className="md:w-[36rem] hover:cursor-pointer"
        />
        <p className="max-w-lg">
          Design everything you need to take your business to the next level.
          Experience an exciting process, as we execute everything design
          related and many more.
        </p>
        <div className="md:max-w-lg ">
          <ul className="flex flex-wrap gap-x-8 gap-y-1 flex-center">
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Website/Mobile App Design</p>
            </li>
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Project Based Packages</p>
            </li>
            <li className="flex gap-1 flex-center">
              <span>
                <Image
                  src="/assets/icons/checkmark-light.svg"
                  alt="checkmark"
                  width={15}
                  height={15}
                />
              </span>
              <p>Branding and Advertising Materials</p>
            </li>
          </ul>
        </div>

        <button className="text-white btn-orange-gradient">
          Make your ideas come alive
        </button>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="flex-col gap-6 py-4 my-6 flex-center">
        <h2 className="tracking-[0.2rem] font-light">WE HAVE WORKED WITH</h2>
        <div className="flex flex-wrap gap-x-8">
          {TESTIMONY.map(({ name, width }) => (
            <Image
              src={`/assets/images/${name}.png`}
              alt={name}
              key={name}
              width={width}
              height={40}
            />
          ))}
        </div>
      </section>

      {/* BACKDROP FOR MOBILE ONLY */}
      <div className="relative min-h-36">
        <Image
          src="/assets/images/backdrop-left.svg"
          alt="backdrop-left"
          className="absolute block md:hidden"
          width={300}
          height={300}
        />
      </div>
      {/* PROCESS SECTION */}
      <section className="flex-col gap-6 py-4 my-6 text-center flex-center">
        <h2 className="tracking-[0.2rem] font-light">STEP BY STEP PROCESS</h2>
        <h1 className="section_head">Design with ease</h1>

        {/* For desktop */}
        <div className=" flex-col gap-4 hidden min-w-[876px] text-left md:flex">
          <span className="flex items-center justify-between">
            <Image
              src="/assets/images/pro_card_1.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              1
            </span>
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">Ideas and Research</h3>
              <p className="max-w-xs text-sm ">
                Ideas and solutions for the design problems, I study target
                users' needs, behaviors, and pain points through interviews,
                surveys, and observations.
              </p>
            </div>
          </span>

          <span className="flex items-center justify-between">
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">
                Structure and design
              </h3>
              <p className="max-w-xs text-sm ">
                Create quick sketches or wireframes to visualize initial
                concepts, I create interactive prototypes that simulate user
                interactions and workflows.
              </p>
            </div>
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              2
            </span>
            <Image
              src="/assets/images/pro_card_2.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
          </span>

          <span className="flex items-center justify-between">
            <Image
              src="/assets/images/pro_card_3.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              3
            </span>
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">
                Testing and Implementing
              </h3>
              <p className="max-w-xs text-sm ">
                Conduct tests with real users to identify issues and gather
                feedback and work closely with development teams to ensure the
                design is implemented accurately.
              </p>
            </div>
          </span>

          <span className="flex items-center justify-between">
            <div className="">
              <h3 className="mb-4 text-lg font-semibold">
                Launch and Documentation
              </h3>
              <p className="max-w-xs text-sm">
                Release the product to users, ensuring all elements are
                functioning as intended and Keep detailed records of the design
                process, decisions, and changes.
              </p>
            </div>
            <span className="px-6 py-4 font-semibold text-white rounded-full bg-primary-orange">
              4
            </span>
            <Image
              src="/assets/images/pro_card_4.svg"
              alt="Card 1"
              width={350}
              height={150}
            />
          </span>
        </div>

        {/* For mobile */}
        <div className="md:hidden"></div>
      </section>
    </>
  );
};

export default Home;
