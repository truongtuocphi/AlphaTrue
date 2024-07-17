import Image from "next/image";
import Rectangle from "@/public/images/Home/Rectangle 3.png";

export default function SectionCompanyHistory() {
  return (
    <section>
      <div className="max-w-fit flex gap-8">
        <div className="w-96">
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

        <div className="max-w-full h-80 rounded-2xl overflow-hidden">
          <Image src={Rectangle} alt="Rectangle" className="w-full h-full " />
        </div>
      </div>
    </section>
  );
}
