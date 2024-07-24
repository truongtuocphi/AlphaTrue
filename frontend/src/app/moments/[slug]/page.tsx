// import { AnimationSection } from "@/components/AnimationSection";
import Header from "@/components/Header";
import HorizontalScrollCarousel from "@/components/Moments/HorizontalScrollCarousel";

export default function Moments({ params }: { params: { slug: string } }) {
  const slugPost = params.slug;

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

      <div className="mt-11">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
}
