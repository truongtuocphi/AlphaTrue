import { AnimationSection } from "../AnimationSection";
import TimeLine from "./TimeLine";

export default function SectionAchievements() {
  return (
    <div className="w-full mt-12 lg:mt-52">
      <div className="flex flex-col text-center gap-4 mb-10">
        <>
          <AnimationSection
            className={`animate-fade-right animate-once animate-duration-[2000ms]`}
          >
            <h4 className="text-4xl font-bold text-second-50">Achievements</h4>
          </AnimationSection>
          <AnimationSection
            className={`animate-fade-left animate-once animate-duration-[2000ms]`}
          >
            <p className="text-base text-black-50">
              We’re proud to support and invest in over 10+ companies
              <br className="hidden sm:block" />
              in the crypto industry, across every stage and sub-sector.
              <br className="hidden sm:block" />
              Meet our portfolio below.
            </p>
          </AnimationSection>
        </>
      </div>

      <div className="mt-20">
        <TimeLine />
      </div>
    </div>
  );
}
