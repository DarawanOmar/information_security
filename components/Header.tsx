import { Poppins } from "next/font/google";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  label2?: string;
}

function Header({ label, label2 }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div
        className={cn(
          "text-2xl flex items-center gap-x-2 text-primary",
          font.className
        )}
      >
        <p className="text-center">Information Security </p>
      </div>
      <p className="text-muted-foreground text-sm flex items-center">
        {label} :
        <span>
          <FaceIcon />
        </span>
      </p>
      {label2 && <p className="text-muted-foreground text-sm">{label2}</p>}
    </div>
  );
}

export default Header;
