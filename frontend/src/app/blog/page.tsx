"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PostAttributes {
  content: any;
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
        const response = await fetch(
          "https://majestic-passion-7a0f93529a.strapiapp.com/api/posts/"
        );
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

  const getImage = (contents: any) => {
    const imageItem = contents.find((item: any) => item.type === "image");

    if (imageItem) {
      return (
        <Image
          className="w-full object-cover"
          key={0}
          src={imageItem.image.url}
          alt={imageItem.image.url || ""}
          width={imageItem.image.width}
          height={imageItem.image.height}
          priority={true}
          style={{ color: "transparent" }}
        />
      );
    }

    return null;
  };

  console.log(DataPosts);

  return (
    <div className="w-full pb-10">
      <div className="my-10">
        <h1 className="text-3xl">Our BLog</h1>
      </div>
      <div>
        <div className="w-full">
          {DataPosts.map(
            (item, index) =>
              formatDate(item.createdAt) === latestDate && (
                <div
                  key={index}
                  className="grid grid-rows-1 gap-5 md:grid-cols-6 md:gap-10"
                >
                  <div className="max-w-full h-full overflow-hidden rounded-lg col-span-3">
                    {getImage(item.content)}
                  </div>
                  <div className="col-span-3 flex flex-col gap-6">
                    <span className="text-base text-gray-600">
                      {formatDate(item.createdAt)}
                    </span>
                    <h1 className="text-4xl font-semibold" key={index}>
                      {item.title}
                    </h1>
                    <p className="w-3/4 text-gray-700">{item.description}</p>
                    <Link
                      className="w-fit px-5 py-3 border-primary border-2 rounded-lg font-bold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                      href={`blog/${index + 1}`}
                    >
                      Read more
                    </Link>
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
