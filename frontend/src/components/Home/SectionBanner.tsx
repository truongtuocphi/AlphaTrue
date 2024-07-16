import webAPT1BG from "@/public/images/webAPT1BG 1.png";
import Image from "next/image";
import Header from "../Header";
import IconLogoWhite from "../icons/IconLogoWhite";

const listStatistical = [
  { number: "20+", name: "PROJECT DONE" },
  { number: "50K+", name: "TRUSTED PEOPLE" },
  { number: "100+", name: "HAPPY CLIENTS" },
  { number: "40+", name: "TEAM MEMBERS" },
];

export default function SectionBanner() {
  return (
    <section>
      <div className="w-full h-svh relative">
        <Image
          className="w-full h-full object-cover"
          src={webAPT1BG}
          alt="banner"
        />
        <div className="w-full absolute flex justify-center top-10">
          <Header />
        </div>
        <div className="absolute top-48 left-2/4 -translate-x-2/4">
          <IconLogoWhite />
          <div className="text-center mt-12">
            <h6 className="text-xl font-medium text-black-100">
              The true solution for the alpha projects in
              <br />
              the decentralized world
            </h6>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center gap-24 py-6 bg-black-20">
        {listStatistical.map(({ number, name }) => {
          return (
            <div key={name} className="flex flex-col gap-1 text-center">
              <h3 className="font-bold text-5xl text-third-50">{number}</h3>
              <div className="font-bold text-base text-black-100">{name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
