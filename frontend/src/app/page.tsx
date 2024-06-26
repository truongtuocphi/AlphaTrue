"use client";

import Link from "next/link";
import IconLogo from "@/components/icons/IconLogo";
import { useEffect, useState } from "react";

// Định nghĩa kiểu dữ liệu cho DataPosts
interface PostAttributes {
  id: number;
  title: string;
  createdAt: string;
}

const listCards = [
  {
    title: "ADVISE",
    name: "Spartan Advisory",
    describe:
      "The industry’s most active and innovative Web3 advisory firm, specialising in M&A, restructuring and capital raises.",
  },
  {
    title: "INVEST",
    name: "Spartan Capital",
    describe:
      "The industry’s most active and innovative Web3 advisory firm, specialising in M&A, restructuring and capital raises.",
  },
  {
    title: "BUILD",
    name: "Spartan Labs",
    describe:
      "The industry’s most active and innovative Web3 advisory firm, specialising in M&A, restructuring and capital raises.",
  },
];

export default function Home() {
  const [DataPosts, setDataPosts] = useState<PostAttributes[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:1337/api/posts/");
        const data = await response.json();

        setDataPosts(data?.data?.map((item: any) => item.attributes) || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!DataPosts) return <p>No profile data</p>;

  // Function to format date
  const formatDate = (isoDate: string): string => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="mt-20 h-96">
        <h1 className="font-light text-3xl text-center leading-normal lg:text-4xl">
          The true solution for the alpha
          <br />
          projects in the{" "}
          <span className="text-primary">decentralized world</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <IconLogo width={"100%"} />
        <div className="w-full mt-8 lg:px-40">
          <p className="text-center text-xl font-light text-gray-800 leading-relaxed lg:text-2xl">
            AlphaTrue offers a multi-sectoral strategy and a one-stop solution
            for your business in the blockchain industry. We work at the
            crossroads of sincere,empirical, and technological research.
            <br />
            <br />
            AlphaTrue primary focuses are customer experience, advanced
            products, and clarity and efficiency in the management process.
          </p>
        </div>
      </div>
      <div className="w-fit grid mx-auto justify-center grid-cols-1 pb-20 lg:grid-cols-3 gap-6 mt-20">
        {listCards.map((card) => (
          <div
            key={card.name}
            className="max-w-md lg:w-full lg:h-full transform transition-transform duration-300 hover:scale-105 group"
          >
            <Link href="/#">
              <div className="flex flex-col gap-9 justify-between bg-card p-10 border-[1px] text-center rounded-lg">
                <div className="flex flex-col gap-6">
                  <h2 className="text-zinc-700 text-xs font-semibold">
                    {card.title}
                  </h2>
                  <h3 className="text-3xl text-gray-700 lg:text-2xl lg:font-extralight">
                    {card.name}
                  </h3>
                  <h3 className="text-base lg:text-base lg:text-gray-700 font-thin">
                    {card.describe}
                  </h3>
                </div>
                <div className="mt-20 lg:mt-10">
                  <button
                    className="border-2 border-primary text-primary font-semibold py-3 px-5 rounded-full bg-white hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    aria-label="Explore more options"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="w-full pt-40 pb-6 flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="text-sm font-bold">BE PROUD OF ACHIEVEMENTS</h3>
          <h2 className="text-3xl font-thin text-gray-600">
            Pushing the industry forward
          </h2>
        </div>
        <div className="grid gap-28 mx-auto grid-cols-1 text-center pb-20 lg:grid-cols-3 mt-20">
          <div className="flex flex-col gap-9 p-10 text-center overflow-hidden">
            <p className="text-7xl font-bold">#20+</p>
            <h3 className="text-base text-gray-500">Projects Done</h3>
          </div>
          <div className="flex flex-col gap-9 p-10 text-center overflow-hidden">
            <p className="text-7xl font-bold">10,000+</p>
            <h3 className="text-base text-gray-500">Trusted People</h3>
          </div>
          <div className="flex flex-col gap-9 p-10 text-center overflow-hidden">
            <p className="text-7xl font-bold">#20+</p>
            <h3 className="text-base text-gray-500">Team Members</h3>
          </div>
        </div>
      </div>
      <div className="w-full px-24 py-40">
        <div className="flex flex-col gap-14">
          <h3 className="font-semibold">NEWS & ANNOUNCEMENTS</h3>
          {DataPosts.map((post, index) => (
            <a href={`/blog/${index + 1}`} key={index}>
              <div className="flex items-center gap-14">
                <div className="text-xs font-semibold text-gray-500">
                  {formatDate(post.createdAt)}
                </div>
                <h2 className="text-xl lg:text-2xl font-thin">{post.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
