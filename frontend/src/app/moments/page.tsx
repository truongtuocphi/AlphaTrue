import { AnimationSection } from "@/components/AnimationSection";
import Header from "@/components/Header";

import momentIMG from "@/public/images/Moment/moment 1.png";
import Image from "next/image";
import Link from "next/link";

const listMoment = [
  {
    title: "Team Building Mui Ne 2022",
    describe:
      "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.",
    img: momentIMG,
    link: "/#",
  },
  {
    title: "Team Building Mui Ne 2022",
    describe:
      "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.",
    img: momentIMG,
    link: "/#",
  },
];

export default function Moments() {
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

      <div className="w-full mt-16 lg:mt-28 mb-5 md:mb-10">
        <div className="w-full flex-col justify-center items-start text-center px-6 sm:px-12 md:px-32 lg:px-44 lg:px-62 xl:px-72">
          <AnimationSection className="animate-flip-down">
            <h3 className="font-bold text-xl md:text-3xl lg:text-5xl text-black-50 mb-3">
              APTer&apos;s <span className="text-second-50">Moments</span>
            </h3>
          </AnimationSection>
          <AnimationSection className="animate-flip-up">
            <p className="text-sm md:text-base">
              We’re proud to support and invest in over 10+ companies
              <br className="hidden sm:block" />
              in the crypto industry, across every stage and sub-sector.
              <br className="hidden sm:block" />
              Meet our portfolio below.
            </p>
          </AnimationSection>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 px-6 sm:px-20 md:px-40 lg:px-64 2xl:px-96">
        {listMoment.map(({ title, describe, img, link }, index) => {
          return (
            <AnimationSection className="animate-jump-in" key={index}>
              <Link href={link}>
                <div className="w-full p-2 pb-4 shadow-custom-lg rounded-2xl">
                  <div className="w-full max-h-80 md:max-h-44 lg:max-h-60 xl:max-h-80 rounded-md overflow-hidden">
                    <Image
                      src={img}
                      alt="Moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2 px-2">
                    <h5 className="text-xl text-black-10 font-bold mt-3 mb-2">
                      {title}
                    </h5>
                    <p className="text-sm text-black50 line-clamp-3">
                      {describe}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimationSection>
          );
        })}
      </div>
    </>
  );
}
