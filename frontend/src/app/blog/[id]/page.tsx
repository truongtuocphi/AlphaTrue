"use client";

import Image from "next/image";
import Link from "next/link";
import { getPostById, getPosts } from "@/config/api.config";
import { formatDate } from "@/utils/dateUtils";
import { useEffect, useState } from "react";

interface PostAttributes {
  id: number;
  title: string;
  createdAt: string;
}

const BlogDeltail = ({ params }: { params: { id: string } }) => {
  const [DataPost, setDataPost] = useState<any>(null);
  const [DataPosts, setDataPosts] = useState<PostAttributes[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPostById(params.id);
        setDataPost(data.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();

        setDataPosts(data.data.map((item: any) => item.attributes) || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const renderText = (item: any, index: any) => {
    let textElement = <span key={index}>{item.text}</span>;

    if (item.bold) textElement = <strong key={index}>{textElement}</strong>;
    if (item.italic) textElement = <em key={index}>{textElement}</em>;
    if (item.underline) textElement = <u key={index}>{textElement}</u>;
    if (item.strikethrough) textElement = <s key={index}>{textElement}</s>;

    return textElement;
  };

  const renderLink = (item: any, index: number) => (
    <Link
      href={item.url}
      key={index}
      style={{ color: "blue", textDecoration: "underline" }}
      target="_blank"
    >
      {item.children[0].text}
    </Link>
  );

  const breakLine = (item: any, index: number) => {
    return item.text === "" && <br key={index} />;
  };

  const renderContent = (content: any) => {
    return content.map((block: any, index: number) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="my-3">
              {block.children.map((item: any, childIndex: number) =>
                item.type === "link"
                  ? renderLink(item, childIndex)
                  : item.text === ""
                  ? breakLine(item, childIndex)
                  : renderText(item, childIndex)
              )}
            </p>
          );
        case "image":
          return (
            <div key={index} className="my-2">
              <Image
                className="w-full"
                src={block.image.url}
                alt={block.image.url || ""}
                width={block.image.width}
                height={block.image.height}
                priority={true}
                style={{ color: "transparent" }}
              />
            </div>
          );
        case "heading":
          const HeaddingTag: any = `h${block.level}`;
          return (
            <HeaddingTag key={index}>{block.children[0].text}</HeaddingTag>
          );
        case "list":
          const blockList = block.children;
          return (
            <ul className="list-inside ml-4">
              {blockList.map((item: any, index: number) => (
                <li key={index} style={{ listStyle: "circle" }}>
                  {item.children[0].text}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

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

  return (
    DataPost && (
      <div className="max-w-4xl mx-auto px-5 pt-10 pb-12 lg:px-10 lg:pt-20 lg:pb-32">
        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-2xl lg:text-4xl">{DataPost.title}</h1>
          <div className="text-sm text-gray-600 mb-12">
            <div>Date Submitted: {formatDate(DataPost.createdAt)}</div>
            <div>Edit date: {formatDate(DataPost.updatedAt)}</div>
          </div>
        </div>
        <div className="border-t-2 py-8 border-b-2">
          {renderContent(DataPost.content)}
        </div>
        <div className="w-full pt-6">
          <div className="flex flex-col gap-14">
            <h1 className="font-semibold">NEWS & ANNOUNCEMENTS</h1>
            {DataPosts &&
              DataPosts.map((post, index) => (
                <a href={`/blog/${index + 1}`} key={index}>
                  <div className="flex items-center gap-14">
                    <div className="text-xs font-semibold text-gray-500">
                      {formatDate(post.createdAt)}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-thin">
                      {post.title}
                    </h2>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default BlogDeltail;
