import Image from "next/image";
import React from "react";
import { AnimationSection } from "./AnimationSection";

import APT from "@/public/images/Home/APT 1.png";

const SectionBannerPage: React.FC<{
  title: string;
  des: string;
  img: string;
}> = ({ title, des, img }) => {
  return (
    <section>
      <div className="w-full flex-col gap-8 justify-center lg:flex lg:flex-row lg:grid-rows-1 items-center px-6 lg:px-36 xl:px-44 mt-28 lg:mt-40">
        <div className="mb-5">
          <div className="mb-3">
            <AnimationSection className="animate-flip-down">
              <h3 className="text-2xl sm:text-4xl font-bold text-black-50">
                AlphaTrue <span className="text-second-50">Investor</span>
              </h3>
            </AnimationSection>
          </div>
          <AnimationSection className="animate-flip-up">
            <p className="text-sm md:text-xl 2xl:text-2xl">
              We’re proud to support and invest in over 10+ companies in the
              crypto industry, across every stage and sub-sector. Meet our
              portfolio below.
            </p>
          </AnimationSection>
        </div>

        <div className="w-full lg:max-w-96 h-60 sm:h-96 lg:h-64 overflow-hidden">
          <AnimationSection className="animate-fade-left">
            <Image
              src={APT}
              alt="Banner"
              className="w-full h-full lg:h-64 object-cover"
            />
          </AnimationSection>
        </div>
      </div>
    </section>
  );
};

export default SectionBannerPage;
