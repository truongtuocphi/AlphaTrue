import { AnimationSection } from "../AnimationSection";
import IconNetswap from "../icons/Invest/IconNetswap";

const listProtfolio = [
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "DEFIYIELD",
    describe:
      "Your gateway to Decentralized Finance | Manage assets across blockchains, generate returns from cryptocurrencies, access the best token swap rates and more",
    icon: <IconNetswap />,
  },
  {
    title: "P◎rt Finance",
    describe: "A suite of money market products built on Solana.",
    icon: <IconNetswap />,
  },
  {
    title: "Metis",
    describe:
      "Layer2 Ethereum Rollup. Cheap/fast tx, cheap/secure NFT storage, NOCODE integration, Web3 economy hub (DAC).",
    icon: <IconNetswap />,
  },
  {
    title: "Nippy Labs",
    describe:
      "NippyLabs is a leading blockchain application company, integrating blockchain technology to transform industries.",
    icon: <IconNetswap />,
  },
  {
    title: "CropperFinance",
    describe: "The Ultimate Yield Farming Platform on Solana.",
    icon: <IconNetswap />,
  },
  {
    title: "F2 NFT",
    describe:
      "F2 NFT is a Battle Royale game combining MOBA, based on blockchain technology. You can play solo or your team, fight with others and earn money.",
    icon: <IconNetswap />,
  },
  {
    title: "Solarbeam.io",
    describe: "Solarbeam is a DEX on Moonriver!",
    icon: <IconNetswap />,
  },
  {
    title: "Hot Cross",
    describe:
      "Hot Cross is a multi-chain tool suite created for both blockchain teams and their communities.",
    icon: <IconNetswap />,
  },
  {
    title: "Solarbeam.io",
    describe:
      "Thetan Arena is a esport (Moba + Battle Royale) game based on blockchain technology. You can gather your friends, form a team, battle with others and earn money with just your skills.",
    icon: <IconNetswap />,
  },
  {
    title: "Trader Joe",
    describe:
      "Serving the community at the frontier of DeFi. #1 DEX on Avalanche",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Holdstation",
    describe:
      "Holdstation DeFuture Wallet is a smart contract wallet for the future trading. We implement Account Abstraction and MPC technology, empowering you to engage in a diverse array of trades - from cryptocurrencies to forex and commodities, leverage up to 500x!",
    icon: <IconNetswap />,
  },
  {
    title: "Netswap",
    describe:
      "Netswap, built on Metis Andromeda Layer 2 Network, all for the lightspeed and low-cost transaction",
    icon: <IconNetswap />,
  },
  {
    title: "Kalao",
    describe: "Build the future of digital and virtual world.",
    icon: <IconNetswap />,
  },
];

const ListPortfolio = () => {
  return (
    <section className="w-full">
      <div className="w-full flex-col justify-center text-center px-6 sm:px-12 md:px-32 lg:px-44 lg:px-62 xl:px-72">
        <AnimationSection className="animate-flip-down">
          <h3 className="font-bold text-xl md:text-3xl lg:text-5xl text-black-50 mb-3">
            Our Portfolio
          </h3>
        </AnimationSection>
        <AnimationSection className="animate-flip-up">
          <p className="text-sm md:text-base">
            We’re proud to support and invest in over 10+ companies in the
            crypto industry, across every stage and sub-sector. Meet our
            portfolio below.
          </p>
        </AnimationSection>
      </div>

      <AnimationSection className="animate-flip-up">
        <div className="flex flex-wrap justify-center mt-7 md:mt-14 gap-8">
          {listProtfolio.map(({ title, describe, icon }, index) => (
            <div
              key={index}
              className="w-full max-h-72 overflow-hidden sm:w-1/3 lg:w-1/4 xl:w-1/5 pt-4 px-4 pb-7 shadow-custom-lg rounded-2xl hover:shadow-custom-inset cursor-pointer"
            >
              <div className="flex justify-center mb-7">{icon}</div>
              <div className="text-center">
                <h5 className="text-2xl mb-3 font-extrabold text-black-5">
                  {title}
                </h5>
                <p className="text-black-70 text-base line-clamp-5">
                  {describe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimationSection>
    </section>
  );
};

export default ListPortfolio;
