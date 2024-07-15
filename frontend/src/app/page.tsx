import { getData } from "@/config/api.config";

export default async function Home() {
  const payload = await getData("posts");
  const postList = payload.data;

  return (
    <div className="flex justify-center w-full h-svh">
      <h5 className="text-2xl text-black-10 font-normal text-center">
        The true solution for the alpha
        <br />
        projects in the decentralized world
      </h5>
    </div>
  );
}
