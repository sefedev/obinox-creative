"use client";

import { StatusContext } from "@/context/status";
import Image from "next/image";
import React, { useContext } from "react";

const BookingModal = () => {
  const { submissionStatus, setSubmissionStatus } = useContext(StatusContext);
  return (
    <div
      className={`${
        submissionStatus === "success" || submissionStatus === "error"
          ? "block"
          : "hidden"
      } fixed inset-0 top-0 left-0 grid z-[99] bg-black/25 w-screen h-screen place-items-center`}
    >
      <div className="grid p-8 text-black bg-white rounded-md shadow-md md:p-20 place-items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="grid px-[1.8rem] py-[2rem] bg-green-600 rounded-full place-items-center mb-4">
            <Image
              src="./assets/icons/complete.svg"
              width={35}
              height={40}
              alt="status"
            />
          </div>
          <h2 className="text-lg font-semibold">Booking Complete</h2>
          <p className="font-light text-center">
            You will be contacted via email and sms in one hour
          </p>
          <button
            className="px-8 py-[0.8rem] text-white hover:bg-black/70 transition duration-200 bg-black rounded-md mt-12"
            onClick={() => {
              setSubmissionStatus(null);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
