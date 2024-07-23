import IconNetswap from "../icons/Invest/IconNetswap";

const listProtfolio = [
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
];

const ListPortfolio = () => {
  return (
    <section className="w-full">
      <div className="w-full flex-col justify-center text-center px-6 sm:px-12 md:px-32 lg:px-44 lg:px-62 xl:px-72">
        <h3 className="font-bold text-xl md:text-3xl lg:text-5xl text-black-50 mb-3">
          Our Portfolio
        </h3>
        <p className="text-sm md:text-base">
          We’re proud to support and invest in over 10+ companies in the crypto
          industry, across every stage and sub-sector. Meet our portfolio below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-7 md:mt-14 gap-8">
        {listProtfolio.map(({ title, describe, icon }, index) => (
          <div
            className="w-full pt-4 px-4 pb-7 shadow-custom-lg rounded-2xl col-span-1"
            key={index}
          >
            <div className="flex justify-center mb-7">{icon}</div>
            <div className="text-center">
              <h5 className="text-2xl mb-3 font-extrabold text-black-5">
                Netswap
              </h5>
              <p className="text-black-5 text-base">
                Netswap, built on Metis Andromeda Layer 2 Network, all for the
                lightspeed and low-cost transaction
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListPortfolio;
