import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-center p-2 space-x-4 border-b">
      <Button
        variant={"ghost"}
        className="rounded-sm hover:bg-slate-100 px-2 py-0.5 cursor-pointer"
      >
        About
      </Button>
      <Separator className="h-6" orientation="vertical" />
      <Button
        variant={"ghost"}
        className="rounded-sm hover:bg-slate-100 px-2 py-0.5 cursor-pointer"
      >
        Projects
      </Button>
      <Separator className="h-6" orientation="vertical" />
      <Button
        variant={"ghost"}
        className="rounded-sm hover:bg-slate-100 px-2 py-0.5 cursor-pointer"
      >
        Contact
      </Button>
    </div>
  );
};

export default NavBar;
