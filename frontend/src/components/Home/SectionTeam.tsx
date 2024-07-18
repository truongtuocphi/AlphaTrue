import Image from "next/image";
import blog from "@/public/images/Home/Team 1.png";

const data = [
  { name: "g Le 1", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
  { name: "g Le 2", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
  { name: "g Le 3", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
];

export default function SectionTeam() {
  return (
    <div className="flex justify-center mt-28 mb-52">
      <div className="text-center">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-bold text-second-50">Team</h4>
          <p className="text-base text-black-50">
            We’re proud to support and invest in over 10+ companies <br />
            in the crypto industry, across every stage and sub-sector. <br />
            Meet our portfolio below.
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-10">
          {data.map(({ name, des, img }, index) => {
            return (
              <div
                key={index}
                className="w-full flex items-center gap-3 max-w-64 p-4 shadow-lg rounded-lg"
              >
                <Image src={img} alt="Picture" className="size-24" />
                <div className="text-left">
                  <h6 className="text-xl font-bold mb-2">{name}</h6>
                  <p className="text-xs">{des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
