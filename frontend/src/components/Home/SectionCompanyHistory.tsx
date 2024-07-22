import Image from "next/image";
import Rectangle from "@/public/images/Home/Rectangle 3.png";
import { AnimationSection } from "../AnimationSection";

export default function SectionCompanyHistory() {
  return (
    <section className="max-w-5xl">
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <AnimationSection
          className={`animate-fade-right animate-once animate-duration-[1500ms]`}
        >
          <div className="w-full">
            <h4 className="text-4xl text-second-50 mb-6 font-bold">
              History - Story
            </h4>
            <p className="text-base text-black-50">
              AlphaTrue offers a multi-sectoral strategy and a one-stop solution
              for your business in the blockchain industry.
              <br />
              <br />
              We work at the crossroads of sincere, empirical, and technological
              research. AlphaTrue primary focuses are customer experience,
              advanced products, and clarity and efficiency in the management
              process.
            </p>
          </div>
        </AnimationSection>

        <AnimationSection
          className={`animate-fade-left animate-once animate-duration-[1500ms]`}
        >
          <div className="max-w-full h-80 rounded-2xl overflow-hidden animate-fade-left">
            <Image src={Rectangle} alt="Rectangle" className="w-full h-full " />
          </div>
        </AnimationSection>
      </div>
    </section>
  );
}
