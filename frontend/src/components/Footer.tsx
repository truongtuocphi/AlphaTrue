import Link from "next/link";
import IconLogo from "./icons/IconLogo";
import IconLinkedin from "./icons/IconLinkedin";
import ContactInput from "./ContactInput";

const listItemFooter = [
  { icon: <IconLinkedin />, link: "/#1" },
  { icon: <IconLinkedin />, link: "/#2" },
  { icon: <IconLinkedin />, link: "/#3" },
  { icon: <IconLinkedin />, link: "/#4" },
  { icon: <IconLinkedin />, link: "/#5" },
];

const linkProducts = [
  { name: "Portfolio 1", link: "/#1" },
  { name: "Portfolio 2", link: "/#2" },
  { name: "Portfolio 3", link: "/#3" },
];

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between py-14 px-28">
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
          <div className="flex gap-6">
            {listItemFooter.map(({ icon, link }) => {
              return (
                <div key={link}>
                  <Link href={link}>{icon}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-32">
          <div className="flex flex-col gap-8">
            <div className="text-sm font-bold text-black-10">PRODUCTS</div>
            <div className="flex flex-col gap-6">
              {linkProducts.map(({ name, link }) => {
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
            <div className="text-sm font-bold text-black-10">PRODUCTS</div>
            <div className="flex flex-col gap-6">
              {linkProducts.map(({ name, link }) => {
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

        <div className="flex flex-col gap-4 w-96 h-fit px-3 py-5 text-center bg-backgroundThird rounded-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="text-third-50 font-bold text-xs">Get Started</div>
              <h6 className="font-bold text-xl">Stay connected.</h6>
            </div>
            <div>
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </div>
          </div>
          <div className="bg-white p-1 rounded-lg">
            <ContactInput />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[0.5px] px-28 py-5 border-black-80 text-black-80">
        <div>© 2024 Company</div>
        <nav>
          <ul className="flex gap-8 text-sm ">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
