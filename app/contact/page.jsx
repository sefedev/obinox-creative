import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      {/* CONTACT SECTION */}
      <ContactForm />

      {/* FAQ SECTION */}
      <section className="mt-24">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col w-screen gap-10 md:items-start md:px-20 md:flex-row">
          <FaqList />
        </div>
      </section>
    </>
  );
};

export default Contact;
