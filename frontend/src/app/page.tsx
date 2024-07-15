import Link from "next/link";
import IconLogo from "@/components/icons/IconLogo";
import { getData } from "@/config/api.config";
import { formatDate } from "@/utils/dateUtils";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div className="flex justify-center">
      <h5 className="text-2xl text-customBlack font-normal text-center">
        The true solution for the alpha
        <br />
        projects in the decentralized world
      </h5>
    </div>
  );
}
