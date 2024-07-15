import Link from "next/link";
import IconLogo from "./icons/IconLogo";
import { links } from "@/lib/data";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center px-28 py-10 mb-24">
      <Link href="/">
        <IconLogo width="130px" height="31px" />
      </Link>
      <nav>
        <ul className="flex gap-12">
          {links.map(({ href, label }) => {
            return (
              <li key={label}>
                <Link
                  href={href}
                  className="text-customBlack font-bold text-base"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
