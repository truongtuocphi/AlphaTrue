import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="text-sm flex gap-3 justify-center items-center py-5 border-b-[0.5px]">
      <Button className="w-12 h-6 font-bold rounded-[8px] px-2 py-1">
        New
      </Button>
      <div className="text-customGray opacity-40">
        AlphaTrue is the leading company in Vietnam to develop Blockchain
        projects.
      </div>
    </header>
  );
}
