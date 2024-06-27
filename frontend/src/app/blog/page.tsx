"use client";

import { useEffect, useState } from "react";

interface PostAttributes {
  id: number;
  title: string;
  createdAt: string;
}

export default function pageBlog() {
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

  if (isLoading)
    return (
      <div className="w-full h-svh flex justify-center">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  if (!DataPosts)
    return (
      <div className="w-full h-svh flex justify-center">
        <p className="text-3xl">No profile data</p>;
      </div>
    );

  return <div className="w-full h-svh">blog</div>;
}
