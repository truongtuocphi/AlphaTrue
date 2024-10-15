import Image from "next/image";

import LogoAPT from "@/public/images/Home/APT.gif";
import { getData } from "@/config/api.config";

import SectionBanner from "@/components/Home/SectionBanner";
import SectionBlog from "@/components/Home/SectionBlog";
import SectionCompanyHistory from "@/components/Home/SectionCompanyHistory";
import SectionStakeholders from "@/components/Home/SectionStakeholders";
import SectionTeam from "@/components/Home/SectionTeam";
import SectionAchievements from "@/components/Home/SectionAchievements";
import ContactFrom from "@/components/Home/ContactFrom";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div>
      <SectionBanner />

      <div className="flex justify-center my-12 md:mt-52 md:mb-32">
        <SectionCompanyHistory />
      </div>

      <>
        <SectionStakeholders />
      </>

      <div className="flex justify-center px-6 lg:mx-auto">
        <SectionAchievements />
      </div>

      <>
        <SectionBlog />
      </>

      <div className="mt-52">
        <ContactFrom />
      </div>
    </div>
  );
}
