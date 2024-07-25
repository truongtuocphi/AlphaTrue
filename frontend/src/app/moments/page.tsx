import { AnimationSection } from "@/components/AnimationSection";
import Header from "@/components/Header";
import ListMoments from "@/components/Moments/ListMoments";

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
            <p className="text-sm md:text-base xl:text-lg">
              We’re proud to support and invest in over 10+ companies
              <br className="hidden sm:block" />
              in the crypto industry, across every stage and sub-sector.
              <br className="hidden sm:block" />
              Meet our portfolio below.
            </p>
          </AnimationSection>
        </div>
      </div>

      <ListMoments />
    </>
  );
}
