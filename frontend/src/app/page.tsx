// import { getData } from "@/config/api.config";

import SectionBanner from "@/components/Home/SectionBanner";
import SectionBlog from "@/components/Home/SectionBlog";
import SectionCompanyHistory from "@/components/Home/SectionCompanyHistory";
import SectionStakeholders from "@/components/Home/SectionStakeholders";
import SectionAchievements from "@/components/Home/SectionAchievements";
import ContactFrom from "@/components/Home/ContactFrom";

export default async function Home() {
  // const payload = await getData("posts");
  // const postList = payload.data;

  return (
    <>
      <SectionBanner />

      <div className="flex justify-center my-12 md:mt-72 md:mb-72">
        <SectionCompanyHistory />
      </div>

      <SectionStakeholders />

      <div className="flex justify-center px-6 lg:mx-auto">
        <SectionAchievements />
      </div>
      <div className="my-72">
        <SectionBlog />
      </div>
      <ContactFrom />
    </>
  );
}
