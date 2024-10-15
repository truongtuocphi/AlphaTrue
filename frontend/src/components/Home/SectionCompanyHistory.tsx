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
            <div className="font-bold mb-2">Our Journey</div>
            <p className="text-base text-black-50">
              Founded in April 2021, AlphaTrue brings together experts in
              blockchain and crypto to drive the adoption of decentralized
              technologies. With a strong focus on innovation and data-driven
              insights, we offer tailored solutions that combine technical
              expertise, investment strategies, digital marketing and regulatory
              knowledge, ensuring our clients stay ahead in this fast-evolving
              industry.
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
