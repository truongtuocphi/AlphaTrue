import APT1 from "@/public/images/Home/APT 1.png";
import APT2 from "@/public/images/Home/APT 2.png";
import APT3 from "@/public/images/Home/APT 3.png";
import CoverFlow from "./CoverFlow";
import { AnimationSection } from "../AnimationSection";

const images = [
  { link: APT2, title: "INCUBATOR" },
  { link: APT1, title: "LABS" },
  { link: APT3, title: "MEDIA" },
];

export default function SectionStakeholders() {
  return (
    <AnimationSection className={`animate-flip-up animate-duration-[3000ms]`}>
      <div className="w-full h-fit relative">
        <div className="z-50">
          <CoverFlow imageData={images} />
        </div>
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-r from-blue-700 to-teal-400"></div>
      </div>
    </AnimationSection>
  );
}
