import Image from "next/image";

const SectionStakeholdersMobile: React.FC<{ link: any; title: string }> = ({
  link,
  title,
}) => {
  return (
    <div className="bg-black-10 w-full p-3 rounded-xl">
      <div className="w-full h-full relative">
        <Image src={link} alt="2" className="w-full h-full rounded-lg" />
        <div className="w-full h-full absolute top-0 bg-bgCoverFlow"></div>
        <div className="text-black-100 absolute bottom-5 left-4">
          <div className="mb-3 text-base font-bold">AlphaTrue</div>
          <h4 className="text-4xl font-bold ">{title}</h4>
        </div>
      </div>
      <p className="text-black-100 text-base md:text-xl mt-4">
        We work at the crossroads of sincere, empirical, and technological
        research. AlphaTrue primary focuses are customer experience, advanced
        products, and clarity and efficiency in the management process.
      </p>
    </div>
  );
};

export default SectionStakeholdersMobile;
