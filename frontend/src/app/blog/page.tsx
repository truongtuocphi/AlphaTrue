"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PostAttributes {
  id: number;
  title: string;
  createdAt: string;
  description: string;
}

const PageBlog = () => {
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

  // Function to format date
  const formatDate = (isoDate: string): string => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");

    return `${day}-${month}-${year}`;
  };

  // Chuyển đổi chuỗi ngày tháng thành đối tượng Date
  const dates = DataPosts.map((post) => formatDate(post.createdAt));

  // Tìm ngày mới nhất bằng phương thức reduce
  const latestDate = dates.reduce(
    (maxDate, currentDate) => (currentDate > maxDate ? currentDate : maxDate),
    dates[0]
  );
  console.log(DataPosts);
  return (
    <div className="w-full h-svh">
      <div className="my-10">
        <h1 className="text-3xl">Our BLog</h1>
      </div>
      <div>
        <div className="w-full">
          {DataPosts.map(
            (item, index) =>
              formatDate(item.createdAt) === latestDate && (
                <div key={index}>
                  <div>
                    <span>{formatDate(item.createdAt)}</span>
                    <h1 key={index}>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
