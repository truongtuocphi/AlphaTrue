"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: async ({ image }) => {
          return (
            <Image
              className="my-2 w-full"
              src={image.url}
              alt={image.name}
              width={image.width}
              height={image.height}
            />
          );
        },
      }}
    />
  );
}
