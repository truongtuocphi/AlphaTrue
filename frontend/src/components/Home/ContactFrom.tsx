export default function ContactFrom() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-3/5 flex flex-col xl:flex-row items-start gap-10">
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

          <form>
            <div className="flex gap-4">
              <div className="w-1/2 mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Full name
                </label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="w-1/2 mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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
                className="mt-1 block w-full rounded-lg px-2 py-4 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit bg-second-50 text-white py-2 px-3 rounded-md hover:bg-second-60 focus:outline-none focus:ring-2 focus:ring-second-70 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
