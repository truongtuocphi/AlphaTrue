import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { getData } from "@/config/api.config";
import { formatDate } from "@/utils/dateUtils";
import BlockRendererClient from "@/app/blog/_components/BlockRendererClient";

export default async function BlogDeltail({
  params,
}: {
  params: { slug: string };
}) {
  const slugPost = params.slug;
  // Build your query URL with Strapi
  // https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  const payload = await getData(`posts?filters[slug][$eq]=${slugPost}`);

  const dataPost = payload.data[0];
  const contentPost: BlocksContent = dataPost?.attributes?.content;

  return (
    <>
      {!dataPost && <div>This page could not be found.</div>}
      {dataPost && (
        <div className="max-w-4xl mx-auto px-5 pt-10 pb-12 lg:px-10 lg:pt-20 lg:pb-32">
          <div className="flex flex-col gap-3 mb-4">
            <h1 className="text-2xl lg:text-4xl">
              {dataPost?.attributes?.title}
            </h1>
            <div className="text-sm text-gray-600 mb-12">
              <div>
                Date Submitted: {formatDate(dataPost?.attributes?.createdAt)}
              </div>
              <div>
                Edit date: {formatDate(dataPost?.attributes?.updatedAt)}
              </div>
            </div>
          </div>
          <div className="border-t-2 py-8 border-b-2">
            <BlockRendererClient content={contentPost} />
          </div>
        </div>
      )}
    </>
  );
}
