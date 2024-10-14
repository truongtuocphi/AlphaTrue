import Header from "@/components/Header";
import ListPortfolio from "@/components/Invest/ListPortfolio";
import SectionBannerPage from "@/components/SectionBannerPage";

import APT from "@/public/images/Home/APT 1.png";

export default function Invest() {
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
        des="We’ve had the honor of working with visionary brands and teams, helping them take their projects to new heights. Through this journey, we’ve gained a wealth of knowledge and data that drives our strategy and sparks ongoing innovation."
        img={APT.src}
      />

      <div className="mt-20 mb-28 xl:mb-56 xl:mt-48 px-6 xl:px-28">
        <ListPortfolio />
      </div>
    </>
  );
}
