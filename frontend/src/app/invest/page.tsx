import Header from "@/components/Header";
import SectionBannerPage from "@/components/SectionBannerPage";

import APT from "@/public/images/Home/APT 1.png";

export default function invest() {
  return (
    <>
      <div className="w-full h-fit flex justify-center mt-10">
        <Header />
      </div>
      <SectionBannerPage
        title="Investor"
        des="Were's proud to support and invest in over 10+ companies in the crypto industry, across every stage and sub-sector. Meet our portfolio below."
        img={APT.src}
      />
    </>
  );
}
