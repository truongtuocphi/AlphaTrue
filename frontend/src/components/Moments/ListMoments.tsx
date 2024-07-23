import Link from "next/link";
import { AnimationSection } from "../AnimationSection";
import Image from "next/image";

import momentIMG from "@/public/images/Moment/moment 1.png";

const listMoment = [
  {
    title: "Team Building Mui Ne 2022",
    describe:
      "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.",
    img: momentIMG,
    link: "/#",
  },
  {
    title: "Team Building Mui Ne 2022",
    describe:
      "We work at the crossroads of sincere, empirical, and technological research. AlphaTrue's primary focuses are customer experience, advanced products, and clarity and efficiency in the management process.",
    img: momentIMG,
    link: "/#",
  },
];

export default function ListMoments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 px-6 sm:px-20 md:px-40 lg:px-64 2xl:px-96">
      {listMoment.map(({ title, describe, img, link }, index) => {
        return (
          <AnimationSection className="animate-jump-in" key={index}>
            <Link href={link}>
              <div className="group w-full p-2 pb-4 shadow-custom-lg hover:shadow-custom-inset rounded-2xl">
                <div className="w-full max-h-80 md:max-h-44 lg:max-h-60 xl:max-h-80 rounded-md overflow-hidden">
                  <Image
                    src={img}
                    alt="Moment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 px-2">
                  <h5 className="text-xl text-black-10 font-bold mt-3 mb-2 group-hover:text-second-50">
                    {title}
                  </h5>
                  <p className="text-sm text-black50 line-clamp-3">
                    {describe}
                  </p>
                </div>
              </div>
            </Link>
          </AnimationSection>
        );
      })}
    </div>
  );
}
