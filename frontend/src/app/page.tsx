import SectionBanner from "@/components/Home/SectionBanner";
import { getData } from "@/config/api.config";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div className="w-full">
      <SectionBanner />
    </div>
  );
}
