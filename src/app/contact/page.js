"use client";

import FloatingPhoneComp from "@/Components/FloatingPhoneComp";
import { useState } from "react";
import { database, ID } from "../appwrite";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Fill all the credentials");
      setSubmitting(false);
    } else {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) {
          alert("Invalid email address");
        }

        const response = await database.createDocument(
          `${process.env.NEXT_PUBLIC_APP_DATABASE_ID}`,
          `${process.env.NEXT_PUBLIC_APP_COLLECTION_ID}`,
          ID.unique(),
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
          }
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error storing form data in Appwrite:", error);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <section className="mb-32 font-roboto">
      <div className="mt-10">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1878646183154!2d88.42995307475711!3d22.572075932990646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ae8dcf6607%3A0x3f2517d590a20ddd!2sGlobsyn%20Crystals%20Bma%20Weath%20Creators%2C%20Globsyn%20Crystals%2C%20EP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1707313005644!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="relative mb-6">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="relative mb-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative mb-6">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                      placeholder="Message"
                    />
                  </div>

                  {/* Repeat similar code for last name, email, and message fields */}

                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-[#4831D4] text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Send"}
                  </button>
                </form>

                {/* Ended */}
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <FloatingPhoneComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
