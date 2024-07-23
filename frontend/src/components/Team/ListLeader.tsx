import Avatar from "@/public/images/Team/avatar.png";
import Image from "next/image";
import { AnimationSection } from "../AnimationSection";

const dataLeader = [
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
];

export default function ListLeader() {
  return (
    <AnimationSection className="animate-flip-down">
      <div className="flex flex-wrap justify-center mt-7 md:mt-14 gap-8 px-6">
        {dataLeader.map(({ name, position, avatar }, index) => (
          <div
            key={index}
            className="w-full overflow-hidden sm:w-1/3 lg:w-1/4 xl:w-1/5 pt-4 px-4 pb-7 rounded-2xl bg-black-95"
          >
            <div className="w-full lg:max-h-56 2xl:max-h-80 overflow-hidden rounded-lg object-contain">
              <Image src={avatar} alt="avatar" className="w-full h-full" />
            </div>
            <div className="text-center mt-3">
              <h5 className="text-black-10 font-bold text-2xl">{name}</h5>
              <p className="text-second-50">{position}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimationSection>
  );
}
