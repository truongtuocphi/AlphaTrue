import Image from "next/image";
import blog from "@/public/images/Home/Team 1.png";

const data = [
  { name: "g Le 1", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
  { name: "g Le 2", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
  { name: "g Le 3", des: `Co-founder & Partner, Co-Head Advisory`, img: blog },
];

export default function SectionTeam() {
  return (
    <div>
      <h4>Team</h4>
      <div>
        We’re proud to support and invest in over 10+ companies <br />
        in the crypto industry, across every stage and sub-sector. <br />
        Meet our portfolio below.
      </div>
      <div>
        {data.map(({ name, des }, index) => {
          return <div key={index}>sdf</div>;
        })}
      </div>
    </div>
  );
}
