import Header from "@/components/Header";

export default function Moments() {
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
      <div>moments</div>
    </div>
  );
}
