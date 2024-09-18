"use client";

import Image from "next/image";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "3d53a511-8c06-4fe5-9dee-14fa73decb9b",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      setFormData({ ...FormData, name: "", email: "", message: "" });
      console.log(result);
    }
    setStatus(result);
    console.log("status", status);
    setOpenModal(true);
  }

  return (
    <section
      id="#contact"
      className="flex flex-col w-screen gap-12 px-4 py-16 bg-orange-400 md:px-32 md:flex-row md:justify-center md:items-center"
    >
      {/* MODAL SECTION */}
      <div
        className={`${
          openModal ? "block" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center dark:text-black`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-[24rem] p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Information</h2>
          <span className="">
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={24}
              height={24}
              className="absolute cursor-pointer top-6 right-5"
              onClick={() => setOpenModal(false)}
            />
          </span>
          <p className="mb-4">{status?.message}</p>
          <div
            className={`p-4 mx-auto ${
              status.success ? "bg-green-500" : "bg-red-500"
            } rounded-full w-fit`}
          >
            {status.success ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-12 fill-white"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="size-12 fill-white"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            )}
          </div>
          <p className="my-4 text-sm">We will get back to you shortly</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 text-white">
        <Image
          src="/assets/images/man-on-laptop.png"
          alt="Man on Laptop"
          className="rounded-lg"
          width={250}
          height={250}
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
          <div className="flex flex-col gap-4 p-4 py-8 md:p-8 dark:text-black">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-4 rounded-md"
              required
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-4 rounded-md"
              required
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-md"
              id="myTextarea"
              required
            ></textarea>
            <div className="justify-end mt-4 md:flex">
              <button
                type="submit"
                className={`w-full flex-center gap-2 px-12 py-4 transition-all duration-300 rounded-md md:w-fit hover:bg-primary-orange hover:text-white ${
                  loading ? "bg-white/50" : "bg-white"
                }`}
                disabled={loading}
              >
                <span className={`${loading ? "block" : "hidden"}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-8 animate-spin"
                  >
                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                  </svg>
                </span>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
