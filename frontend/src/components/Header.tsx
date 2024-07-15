// import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex gap-3 justify-center items-center py-5 border-b-[0.5px] border-customSecondGray">
      <div className="w-12 font-bold text-xs bg-third-50 text-third-5 rounded-sm text-center py-1 px-2">
        New
      </div>
      <div className="text-customGray text-sm">
        AlphaTrue is the leading company in Vietnam to develop Blockchain
        projects.
      </div>
    </header>
  );
}
