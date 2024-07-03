import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { getPostById, getPosts } from "@/config/api.config";
import { formatDate } from "@/utils/dateUtils";

export default async function BlogDeltail({
  params,
}: {
  params: { id: string };
}) {
  const getIdPost = params.id;

  const payload = await getPostById(getIdPost);
  const dataPost = payload.data;

  const content: BlocksContent = dataPost?.attributes?.content;
  console.log(content);
  return (
    dataPost && (
      <div className="max-w-4xl mx-auto px-5 pt-10 pb-12 lg:px-10 lg:pt-20 lg:pb-32">
        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-2xl lg:text-4xl">{dataPost.attributes.title}</h1>
          <div className="text-sm text-gray-600 mb-12">
            <div>
              Date Submitted: {formatDate(dataPost.attributes.createdAt)}
            </div>
            <div>Edit date: {formatDate(dataPost.attributes.updatedAt)}</div>
          </div>
        </div>
        {/* <div className="border-t-2 py-8 border-b-2">
          <BlocksRenderer
            content={content}
            blocks={{
              image: async ({ image }) => {
                "use server";
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
        </div> */}
        <div className="w-full pt-6">
          <div className="flex flex-col gap-14">
            <h1 className="font-semibold">NEWS & ANNOUNCEMENTS</h1>
            {/* {DataPosts &&
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
              ))} */}
          </div>
        </div>
      </div>
    )
  );
}
