"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
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
        const contentPost = await getPostById(params.id);
        setDataPost(contentPost.data.attributes);
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

  const content: BlocksContent = DataPost?.content;
  console.log(content);
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
          <BlocksRenderer
            content={content}
            blocks={{
              image: ({ image }) => {
                return (
                  <Image
                    className="my-2"
                    src={image.url}
                    alt={image.name}
                    width={image.width}
                    height={image.height}
                  />
                );
              },
            }}
          />
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
