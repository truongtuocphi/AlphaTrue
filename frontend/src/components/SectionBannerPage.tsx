import Image from "next/image";
import React from "react";

const SectionBannerPage: React.FC<{
  title: string;
  des: string;
  img: string;
}> = ({ title, des, img }) => {
  return (
    <section>
      <div className="w-full flex-col gap-8 justify-center lg:flex lg:flex-row lg:grid-rows-1 items-center px-6 lg:px-36 xl:px-72 mt-28 lg:mt-40">
        <div>
          <div className="mb-3">
            <h3 className="text-4xl font-bold text-black-50">
              AlphaTrue <span className="text-second-50">Investor</span>
            </h3>
          </div>
          <p>
            We’re proud to support and invest in over 10+ companies in the
            crypto industry, across every stage and sub-sector. Meet our
            portfolio below.
          </p>
        </div>
        <div className="w-full lg:max-w-96 h-80 lg:h-52 bg-black-20"></div>
      </div>
    </section>
  );
};

export default SectionBannerPage;
