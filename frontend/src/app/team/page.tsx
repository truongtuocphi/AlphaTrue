import { AnimationSection } from "@/components/AnimationSection";
import Header from "@/components/Header";
import ListLeader from "@/components/Team/ListLeader";
import ListTeam from "@/components/Team/ListTeam";

export default function Team() {
  return (
    <div>
      <div className="w-full h-fit flex justify-center mt-10">
        <Header
          bgColor="bg-backgroundGrayHeader"
          bgColorScroll="bg-backgroundGrayHeader"
          textColor="text-black-50"
          fill="black"
        />
      </div>

      <div className="w-full mt-16 lg:mt-28 mb-5 md:mb-10">
        <div className="w-full flex-col justify-center items-start text-center px-6 sm:px-12 md:px-28 lg:px-44 lg:px-62 xl:px-72">
          <AnimationSection className="animate-flip-down">
            <h3 className="font-bold text-xl md:text-3xl lg:text-5xl text-black-50 mb-3">
              The people behind quiety
            </h3>
          </AnimationSection>
          <AnimationSection className="animate-flip-up">
            <p className="text-sm md:text-base">
              We’re proud to support and invest in over 10+ companies in the
              crypto
              <br className="hidden sm:block" />
              industry, across every stage and sub-sector. Meet our portfolio
              below.
            </p>
          </AnimationSection>
        </div>
      </div>

      <ListLeader />

      <ListTeam />
    </div>
  );
}
