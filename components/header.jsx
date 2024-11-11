import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user.menu";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/file.svg"}
            alt="Syncro"
            width={200}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <span>Syncro</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/project/create">
            <Button>
              <PenBox size={18} />
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
