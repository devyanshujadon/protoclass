
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

import { Button } from "@/components/ui/button";
type Props = {};

function Header({}: Props) {
  return (
    <div className=" w-full h-16 flex items-center justify-between" >
        <h1 className=" font-bold text-xl">ProtoClass</h1>
      
      <Link href="/auth"><Button>Sign In</Button></Link>
      <ModeToggle />
    </div>
  );
}

export default Header;
