import Link from "next/link";
import IconLogoWhite from "./icons/IconLogoWhite";
import IconArrow from "./icons/IconArrow";
import { listItemFooter } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full h-fit bg-secondBody pt-10 px-6 pb-6 sticky bottom-0 z-0">
      <div className="flex flex-col items-center gap-6">
        <div className="p-2 rounded-full bg-primary">
          <Link href="/#top" aria-label="Back to top">
            <IconArrow width="20px" height="20px" fill="white" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-20">
          {listItemFooter.map((item) => (
            <Link
              key={item.name}
              href={item.slug}
              className="text-gray-400 font-medium text-sm hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16 border-t-[1px] border-gray-500 pt-20">
        <IconLogoWhite width={1280} height={214} />
      </div>
    </footer>
  );
}
