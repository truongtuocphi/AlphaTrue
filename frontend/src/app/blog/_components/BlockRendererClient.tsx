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
        image: ({ image }) => {
          return (
            <div className="my-2">
              <Image
                className="w-full h-auto"
                src={image.url}
                alt={image.name}
                width={image.width}
                height={image.height}
              />
              <figcaption className="mt-2 text-sm text-gray-600">
                {image.caption}
              </figcaption>
            </div>
          );
        },
      }}
    />
  );
}
