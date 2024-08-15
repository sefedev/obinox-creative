import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center gap-y-4">
        {/* <h1 className="text-[42px] leading-10 font-semibold md:text-7xl mb-4">
          Limitless
          <br /> Digital Designs
        </h1> */}
        <Image
          src="/assets/images/hero-main.png"
          alt="limitless digital deisgns"
          width={400}
          height={400}
          className="md:w-[36rem]  hover:cursor-pointer"
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
    </>
  );
};

export default Home;
