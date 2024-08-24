"use client";

import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [status, setStatus] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       setStatus("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("Failed to send message.");
  //   }
  // };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a4fb2429-6347-408b-8b34-726c1d82fe6c",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section
      id="#contact"
      className="flex flex-col w-screen gap-12 px-4 py-16 bg-orange-400 scroll-mt-[132rem] md:px-32 md:flex-row md:justify-center md:items-center"
    >
      <div className="flex flex-col flex-1 gap-4 text-white">
        <Image
          src="/assets/images/marketing.png"
          alt="Marketing"
          width={300}
          height={300}
        />
        <span className="flex flex-col gap-2 text-left text-wrap">
          <h3 className="text-4xl font-semibold">Get Intouch</h3>
          <p className="text-xs">
            interested in discussing a graphic design project with us. Schedule
            a time to chat? Looking forward to hearing from you!
          </p>
        </span>
      </div>

      <div className="flex flex-col flex-1 rounded-md bg-[rgba(41,45,56,1)]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-4 py-8 md:p-8 ">
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Name"
              className="p-4 rounded-md"
              required
            />
            <input
              type="text"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              placeholder="Email"
              className="p-4 rounded-md"
              required
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              className="p-4 rounded-md"
              id="myTextarea"
              required
            ></textarea>
            <div className="justify-end mt-4 md:flex">
              <button
                type="submit"
                className="w-full px-12 py-4 transition-all duration-300 bg-white border rounded-md md:w-fit hover:bg-inherit hover:text-white"
              >
                Submit
              </button>
            </div>
          </div>
          {/* {status && <p>{status}</p>} */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
