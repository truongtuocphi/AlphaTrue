import Image from "next/image";

import LogoAPT from "@/public/images/Home/APT.gif";
import { getData } from "@/config/api.config";

import SectionBanner from "@/components/Home/SectionBanner";
import SectionBlog from "@/components/Home/SectionBlog";
import SectionCompanyHistory from "@/components/Home/SectionCompanyHistory";
import SectionStakeholders from "@/components/Home/SectionStakeholders";
import SectionTeam from "@/components/Home/SectionTeam";
import SectionAchievements from "@/components/Home/SectionAchievements";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div>
      <SectionBanner />

      <div className="flex justify-center my-12 md:my-52">
        <SectionCompanyHistory />
      </div>

      <div>
        <SectionStakeholders />
      </div>

      <div className="w-5/6 mx-auto">
        <SectionAchievements />
      </div>

      <div>
        <SectionBlog />
      </div>
    </div>
  );
}
