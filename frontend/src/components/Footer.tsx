import Link from "next/link";
import IconLogo from "./icons/IconLogo";
import ContactInput from "./ContactInput";
import IconTelegramCircle from "./icons/IconTelegramCircle";
import IconTwitterCircle from "./icons/IconTwitterCircle";
import IconMail from "./icons/IconMail";
import IconAddress from "./icons/IconAddress";

const listItemFooter = [
  {
    icon: <IconTelegramCircle width={36} height={36} />,
    link: "https://t.me/APTAnalytics",
  },
  {
    icon: <IconTwitterCircle width={36} height={36} />,
    link: "https://x.com/AlphaTrueAPT",
  },
];

const linkProducts_1 = [
  { name: "Press", link: "/#1" },
  { name: "Blogs", link: "/#2" },
  { name: "Privacy Policy", link: "/#3" },
  { name: "Terms & Conditions", link: "/#3" },
  { name: "Careers", link: "/#3" },
];

const linkProducts_2 = [
  {
    name: "support@alphatrue.com",
    link: "/#1",
    icon: <IconMail width={20} height={20} />,
  },
  {
    name: "Diamond Plaza, District 1, Ho Chi Minh City, Vietnam",
    link: "/#2",
    icon: <IconAddress width={20} height={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black-95 mt-12 lg:mt-36">
      <div className="grid grid-flow-row gap-9 px-6 py-6 lg:flex lg:justify-between lg:gap-0 lg:py-14 lg:px-28 ">
        <div>
          <div className="flex flex-col gap-3 mb-11">
            <IconLogo />
            <div className="text-sm text-black-50">
              AlphaTrue offers a multi-sectoral
              <br />
              strategy and a one-stop solution for
              <br />
              your business in the blockchain industry.
            </div>
          </div>
          <div className="flex gap-3">
            {listItemFooter.map(({ icon, link }) => {
              return (
                <div key={link}>
                  <Link href={link}>{icon}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-start gap-16">
          <div className="flex gap-32">
            <div className="flex flex-col gap-8">
              <div className="text-sm font-bold text-black-10">Company</div>
              <div className="flex flex-col gap-6">
                {linkProducts_1.map(({ name, link }) => {
                  return (
                    <ul key={name}>
                      <li className="text-base text-black-50">
                        <Link href={link}>{name}</Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-8">
              <div className="text-sm font-bold text-black-10">Contact Us</div>
              <div className="flex flex-col gap-6">
                {linkProducts_2.map(({ name, icon, link }) => {
                  return (
                    <ul key={name}>
                      <li className="flex items-center gap-2 text-base text-black-50">
                        {icon}
                        <Link href={link}>{name}</Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4 w-fit h-fit px-6 py-5 text-center bg-backgroundContact rounded-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="text-second-50 font-bold text-xs">
                Get Started
              </div>
              <h6 className="font-bold text-xl">Stay connected.</h6>
            </div>
            <div>
              Subscribe to our newsletter for the latest
              <br className="hidden sm:block" />
              updates and exclusive offers.
            </div>
          </div>
          <div className="bg-white p-1 rounded-lg !w-full">
            <ContactInput />
          </div>
        </div> */}
      </div>

      <div className="w-full h-fit grid grid-flow-row justify-center gap-3 px-4 lg:flex lg:justify-center items-center border-t-[0.5px] lg:px-28 py-5 border-black-80 text-black-80">
        <div>Copyright © 2022 AlphaTrue | All Rights Reserved</div>
      </div>
    </footer>
  );
}
