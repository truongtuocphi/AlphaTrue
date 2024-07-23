import APT1 from "@/public/images/Home/APT 1.png";
import APT2 from "@/public/images/Home/APT 2.png";
import APT3 from "@/public/images/Home/APT 3.png";

import CoverFlow from "@/components/Home/CoverFlow";

import { AnimationSection } from "@/components/AnimationSection";

import IconIncubator from "@/components/icons/home/IconIncubator";
import IconLabs from "@/components/icons/home/IconLabs";
import IconMedia from "@/components/icons/home/IconMedia";
import SectionStakeholdersMobile from "./SectionStakeholdersMobile";

const images = [
  {
    link: APT2,
    title: "INCUBATOR",
    icon: <IconIncubator />,
    router: "/incubator",
  },
  { link: APT1, title: "LABS", icon: <IconLabs />, router: "/labs" },
  { link: APT3, title: "MEDIA", icon: <IconMedia />, router: "/media" },
];

export default function SectionStakeholders() {
  return (
    <AnimationSection className={`animate-flip-up animate-duration-[3000ms]`}>
      <div>
        <div className="w-full h-fit relative hidden lg:block">
          <div className="z-50">
            <CoverFlow imageData={images} />
          </div>
          <div className="absolute bottom-0 w-full h-80 bg-gradient-to-r from-blue-700 to-teal-400"></div>
        </div>

        <div className="w-full px-6 lg:hidden">
          {images.map((item, index) => {
            return (
              <div key={index} className="mb-4">
                <SectionStakeholdersMobile
                  link={item.link}
                  title={item.title}
                  router={item.router}
                />
              </div>
            );
          })}
        </div>
      </div>
    </AnimationSection>
  );
}
