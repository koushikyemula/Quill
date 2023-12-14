import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-2 hover:opacity-75 transition">
        <div className="rounded-full bg-white p-1">
          <Image src="/logo.svg" alt="logo" height="32" width="32" />
        </div>
        <div className={cn(font.className)}>
          <p className="text-lg font-semibold">Trinity</p>
        </div>
      </div>
    </Link>
  );
};