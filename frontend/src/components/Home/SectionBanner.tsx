import Header from "@/components/Header";
import IconLogoWhite from "@/components/icons/IconLogoWhite";
import SectionStatistical from "@/components/Home/SectionStatistical";

import webAPT1BG from "@/public/images/webAPT1BG 1.png";
import Image from "next/image";

export default function SectionBanner() {
  return (
    <section>
      <div className="w-full h-[450px] lg:h-dvh relative">
        <Image
          className="w-full h-full object-cover"
          src={webAPT1BG}
          alt="banner"
        />
        <div className="w-full flex justify-center absolute top-10">
          <Header
            bgColor="bg-backgroundHeader"
            textColor="text-black-100"
            bgColorScroll="bg-backgroundHeader"
            fill="white"
          />
        </div>
        <div className="w-full sm:w-1/2 px-4 absolute top-1/3 left-2/4 -translate-x-2/4">
          <div className="w-full animate-fade-down">
            <IconLogoWhite width="100%" height="100%" />
          </div>
          <div className="text-center mt-12 animate-fade-up">
            <h6 className="text-base sm:text-xl lg:text-3xl 2xl:text-5xl font-medium text-black-100">
              The true solution for the alpha projects in the{" "}
              <br className="block sm:hidden" />
              decentralized world
            </h6>
          </div>
        </div>
      </div>
      <SectionStatistical />
    </section>
  );
}
