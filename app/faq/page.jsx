import Contact from "@/components/Contact";
import FaqList from "@/components/FaqList";
import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <>
      {/* FAQ SECTION */}
      <section className="mb-24">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col w-screen gap-10 md:items-start md:px-20 md:flex-row">
          <FaqList />

          <div className="relative flex flex-col items-center justify-start flex-1">
            <Image
              src="/assets/images/faq.png"
              alt="Question"
              width={250}
              height={250}
            />

            <div className="mt-8">
              <h3 className="mb-2 text-xl font-semibold">Any Question?</h3>
              <p className="text-xs font-light">
                We are here to answer any question you have for us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />
    </>
  );
};

export default Faq;
