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
            <h5 className="text-black mb-2">Our Journey</h5>
            <p className="text-base text-black-50">
              Founded in April 2021, AlphaTrue was born from the collaboration
              of seasoned experts across the blockchain and crypto industry. Our
              team brings a diverse range of expertise, from technical
              development and blockchain architecture to investment strategies,
              marketing innovations, and regulatory compliance. United by a
              shared vision, we aim to drive forward the adoption and evolution
              of decentralized technologies.
              <br />
              <br />
              At AlphaTrue, we believe in offering a multi-sectoral approach,
              providing a comprehensive, one-stop solution tailored to meet the
              diverse needs of blockchain businesses. Rooted in the principles
              of technical innovation, empirical research, and client-focused
              execution, every solution is designed using cutting-edge
              technology and data-driven insights, ensuring our clients stay
              ahead in the fast-evolving blockchain industry.
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
