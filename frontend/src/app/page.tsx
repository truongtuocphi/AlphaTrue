import SectionBanner from "@/components/Home/SectionBanner";
import SectionCompanyHistory from "@/components/Home/SectionCompanyHistory";
import SectionStakeholders from "@/components/Home/SectionStakeholders";
import { getData } from "@/config/api.config";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div className="w-full">
      <SectionBanner />
      <div className="flex justify-center my-52">
        <SectionCompanyHistory />
      </div>
      <div>
        <SectionStakeholders />
      </div>
    </div>
  );
}
