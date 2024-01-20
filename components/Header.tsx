import { Poppins } from "next/font/google";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  label: string;
  label2?: string;
}

function Header({ label, label2 }: HeaderProps) {
  return (
    <div className="  flex flex-col gap-y-4 items-center justify-center">
      <div className="text-xl flex w-full items-center gap-x-2 text-primary">
        <p className="text-center w-full font-bold">Information Security </p>
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
