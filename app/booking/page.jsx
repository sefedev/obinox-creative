"use client";

import CheckboxButton from "@/components/CheckButton";
import { StatusContext } from "@/context/status";
import { SELECT_SERVICE } from "@/utils/constant";
import React, { useContext, useState } from "react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState([]);
  const { submissionStatus, setSubmissionStatus } = useContext(StatusContext);

  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    service: [],
    name: "",
    number: "",
    email: "",
    gender: "",
    details: "",
    files: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to array
    const validFiles = [];
    // const errorMessages = [];
    console.log(selectedFiles);

    setFileName("");
    selectedFiles.forEach((file, index) => {
      // Check if file is an image and less than 5MB

      if (file.type.startsWith("image/") && file.size < 5 * 1024 * 1024) {
        setFileName((prev) => prev + ", " + file.name);
        validFiles.push({
          file,
          preview: URL.createObjectURL(file), // Create preview URL
        });
      }
    });

    // Update state with valid files
    if (validFiles.length > 0) {
      setFormData({ ...formData, files: validFiles });
    }
    console.log(fileName);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting"); // Set status to submitting

    const form = new FormData();
    for (const key in formData) {
      if (key === "files") {
        formData.files.forEach((file) => form.append("files", file.file));
      } else {
        form.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");

        console.error("Error sending email:", response.status);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error sending email:", error);
    }

    setFormData({
      service: [],
      name: "",
      number: "",
      email: "",
      gender: "",
      details: "",
      files: [],
    });
    setSelectedService([]);
    setFileName("");
  };
  const handleService = (option, isChecked) => {
    if (isChecked) {
      setSelectedService((prevService) => [...prevService, option]);
    } else {
      setSelectedService(selectedService.filter((o) => o !== option));
    }
    setFormData({ ...formData, service: selectedService });
    console.log(selectedService);
    console.log(formData);
  };

  return (
    <section className="relative">
      <form>
        <div className="flex flex-col w-full gap-4 p-4 py-8 bg-white rounded-md md:p-8 dark:text-black">
          <p>Select Service:</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {SELECT_SERVICE.map(({ name }, id) => (
              <div key={id}>
                <CheckboxButton
                  label={name}
                  onChange={(checked) => handleService(name, checked)}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="md:w-[45%] w-full p-4 border border-black rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="md:w-[45%] w-full p-4 border border-black rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="md:w-[45%] w-full p-4 border border-black rounded-md focus:outline-none"
              required
            />
            <select
              name="gender"
              className="relative md:w-[45%] w-full bg-white appearance-auto p-4 border border-black rounded-md focus:outline-none"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col gap-6 mt-8">
            <h2 className="text-xl font-semibold">Details</h2>
            <label className="text-left">
              Give extensive detailing of what you want{" "}
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="p-4 border border-black rounded-md"
              required
            ></textarea>
          </div>

          <div className="mt-8">
            <p className="mb-2 text-left">Upload Reference</p>
            <input
              type="file"
              id="fileInput"
              name="files"
              multiple
              className="hidden"
              accept="image/*"
              onChange={handleFile}
            />
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="fileInput"
                className="inline-block px-4 py-2 font-medium text-white transition duration-300 bg-blue-600 rounded cursor-pointer hover:bg-blue-800"
              >
                Choose File
              </label>
              {fileName && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected file: <span className="font-medium">{fileName}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid w-full my-4 place-items-center">
            <button
              type="submit"
              className={`${
                submissionStatus === "submitting" &&
                "from-orange-600/30 to-orange-400/30"
              } relative w-full px-8 py-4 overflow-hidden text-white rounded-lg md:w-48 bg-gradient-to-r from-orange-600 to-orange-400`}
              onClick={handleSubmitBooking}
              disabled={submissionStatus === "submitting"}
            >
              <span className={`relative z-10 w-full grid place-items-center`}>
                {submissionStatus === "submitting" ? (
                  <svg
                    className="size-6 animate-spin"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Continue"
                )}
              </span>
              <span className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-green-700 opacity-0 hover:opacity-100"></span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Booking;
