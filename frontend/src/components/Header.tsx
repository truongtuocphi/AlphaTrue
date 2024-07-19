import Link from "next/link";
import IconHome from "./icons/IconHome";
import IconMenu from "./icons/IconMenu";

export default function Header() {
  return (
    <header className="w-3/4 top-10 max-h-14 flex items-center justify-between bg-backgroundHeader px-5 py-3 rounded-2xl">
      <IconHome />
      <nav>
        <ul className="flex gap-12">
          <li className="text-black-100 text-base font-medium">
            <Link href="/#">Home</Link>
          </li>
          <li className="text-black-100 text-base font-medium">
            <Link href="/#">Home</Link>
          </li>
          <li className="text-black-100 text-base font-medium">
            <Link href="/#">Home</Link>
          </li>
          <li className="text-black-100 text-base font-medium">
            <Link href="/#">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-1">
        <div className="text-black-100 text-base font-medium">MENU</div>
        <IconMenu />
      </div>
    </header>
  );
}
