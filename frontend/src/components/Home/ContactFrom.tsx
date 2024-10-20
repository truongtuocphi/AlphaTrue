"use client";

import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkgnnqbd");
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      formRef.current?.reset();
    }
  };

  return (
    <div className="w-full flex items-center justify-center mt-52">
      <div className="w-full lg:w-3/4 2xl:w-1/2 flex flex-col xl:flex-row items-start gap-10 px-6">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-5xl text-second-50">
            Elevate Your Business Today
          </div>
          <p className="text-base text-black-50 mt-3">
            Complete the form to collaborate with our specialists and develop a
            customised solution that brings your vision alive.
          </p>
        </div>

        <div className="w-full rounded-lg p-6 bg-[#F0FBFF]">
          <h2 className="text-3xl font-bold mb-6">Book a Discovery Session</h2>

          <form ref={formRef} onSubmit={onSubmit}>
            <div className="flex gap-4">
              <div className="w-1/2 mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="w-1/2 mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                name="message"
                className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-fit bg-second-50 text-white py-2 px-3 rounded-md hover:bg-second-60 focus:outline-none focus:ring-2 focus:ring-second-70 focus:ring-opacity-50"
            >
              Submit
            </button>
            {state.succeeded ? (
              <p className="mt-4 text-green-500">Thanks for your submission!</p>
            ) : (
              <div className="mt-4 text-red-500">
                <ValidationError errors={state.errors} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
