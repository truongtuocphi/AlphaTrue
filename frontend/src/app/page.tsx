import SectionBanner from "@/components/Home/SectionBanner";
import SectionBlog from "@/components/Home/SectionBlog";
import SectionCompanyHistory from "@/components/Home/SectionCompanyHistory";
import SectionStakeholders from "@/components/Home/SectionStakeholders";
import { getData } from "@/config/api.config";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div>
      <SectionBanner />

      <div className="flex justify-center my-52">
        <SectionCompanyHistory />
      </div>

      <div>
        <SectionStakeholders />
      </div>

      <div className="w-full mb-32 mt-48 flex justify-center">
        <SectionBlog />
      </div>
    </div>
  );
}
