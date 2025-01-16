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
        access_key: "a4fb2429-6347-408b-8b34-726c1d82fe6c",
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
      className="flex flex-col w-screen gap-12 px-4 py-16 bg-gradient-to-b from-orange-600 to-orange-400 md:px-32 md:flex-row md:justify-center md:items-center"
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
        <span className="flex flex-col gap-2 text-left text-wrap">
          <h3 className="text-4xl font-semibold">Get Intouch</h3>
          <p className="text-xs">
            interested in discussing a graphic design project with us. Schedule
            a time to chat? Looking forward to hearing from you!
          </p>
        </span>
        <div className="flex w-full text-sm bg-white rounded-lg md:text-base">
          <a
            href="mailto:dami@obinox.co"
            role="button"
            className="flex items-center justify-center w-full gap-2 p-4 font-light text-black transition-all duration-150 bg-white rounded-s-lg hover:bg-neutral-500 hover:text-white group"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 28 23"
              className="fill-primary-orange"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.2 22.5C3.08609 22.5 2.0178 22.0654 1.23015 21.2918C0.442499 20.5182 0 19.469 0 18.375V4.625C0 3.53098 0.442499 2.48177 1.23015 1.70818C2.0178 0.934597 3.08609 0.5 4.2 0.5H23.8C24.9139 0.5 25.9822 0.934597 26.7698 1.70818C27.5575 2.48177 28 3.53098 28 4.625V18.375C28 19.469 27.5575 20.5182 26.7698 21.2918C25.9822 22.0654 24.9139 22.5 23.8 22.5H4.2ZM7.875 6.3025C7.73239 6.1829 7.56676 6.09266 7.38796 6.03713C7.20915 5.9816 7.02081 5.96192 6.83412 5.97926C6.64742 5.99659 6.46617 6.05059 6.30113 6.13804C6.13609 6.2255 5.99062 6.34463 5.87335 6.48836C5.75609 6.63209 5.66942 6.79749 5.6185 6.97476C5.56757 7.15202 5.55342 7.33752 5.57689 7.52025C5.60037 7.70298 5.66098 7.87922 5.75513 8.03851C5.84929 8.19779 5.97506 8.33687 6.125 8.4475L11.375 12.5739C12.1199 13.1596 13.0457 13.4788 14 13.4788C14.9543 13.4788 15.8801 13.1596 16.625 12.5739L21.875 8.44888C22.0186 8.33602 22.1381 8.19649 22.2268 8.03826C22.3155 7.88003 22.3716 7.70619 22.3919 7.52667C22.4121 7.34716 22.3962 7.16547 22.345 6.99199C22.2938 6.81852 22.2083 6.65665 22.0934 6.51562C21.9785 6.3746 21.8364 6.25719 21.6753 6.17009C21.5142 6.08299 21.3372 6.0279 21.1544 6.00799C20.9717 5.98807 20.7867 6.0037 20.61 6.054C20.4334 6.1043 20.2686 6.18827 20.125 6.30112L14.875 10.4261C14.6267 10.6214 14.3181 10.7278 14 10.7278C13.6819 10.7278 13.3733 10.6214 13.125 10.4261L7.875 6.3025Z"
                // fill="#FF3300"
              />
            </svg>
            dami@obinox.co
          </a>
          <a
            target="_blank"
            href="https://wa.me/2349097463954"
            role="button"
            className="flex items-center justify-center w-full gap-2 p-4 font-light text-black transition-all duration-150 bg-white rounded-e-lg hover:bg-neutral-500 hover:text-white group"
          >
            <Image
              src="/assets/icons/whatsApp.png"
              alt="whatsapp Contact"
              width={20}
              height={20}
            />
            +2349097463954
          </a>
        </div>
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
