import Header from "@/components/Header";
import ListPortfolio from "@/components/Invest/ListPortfolio";
import SectionBannerPage from "@/components/SectionBannerPage";

import APT from "@/public/images/Home/APT 1.png";

export default function invest() {
  return (
    <>
      <div className="w-full h-fit flex justify-center mt-10">
        <Header
          bgColor="bg-backgroundGrayHeader"
          bgColorScroll="bg-backgroundGrayHeader"
          textColor="text-black-50"
          fill="black"
        />
      </div>
      <SectionBannerPage
        title="Investor"
        des="Were's proud to support and invest in over 10+ companies in the crypto industry, across every stage and sub-sector. Meet our portfolio below."
        img={APT.src}
      />

      <div className="mt-20 mb-28 xl:mb-56 xl:mt-48 px-6 xl:px-28">
        <ListPortfolio />
      </div>
    </>
  );
}
