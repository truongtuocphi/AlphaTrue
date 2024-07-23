import Avatar from "@/public/images/Team/avatar_member.png";
import Image from "next/image";
import { AnimationSection } from "../AnimationSection";

const dataListTeam = [
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
  { name: "Lara Maleon", position: "Managment", avatar: Avatar },
];

export default function ListTeam() {
  return (
    <AnimationSection className="animate-fade-up">
      <div className="flex flex-wrap justify-center mt-7 md:mt-28 gap-8 px-6">
        {dataListTeam.map(({ name, position, avatar }, index) => (
          <div
            key={index}
            className="bg-black-95 flex items-center gap-2 md:gap-4 w-full max-h-72 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/4 p-2 rounded-2xl hover:shadow-custom-inset cursor-pointer"
          >
            <div className="w-28 lg:max-h-56 2xl:max-h-80 overflow-hidden rounded-lg object-contain">
              <Image src={avatar} alt="avatar" className="w-full h-full" />
            </div>
            <div>
              <h5 className="text-black-10 font-bold text-2xl md:text-base lg:text-2xl">
                {name}
              </h5>
              <p className="text-second-50 text-base md:text-sm lg:text-base">
                {position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimationSection>
  );
}
