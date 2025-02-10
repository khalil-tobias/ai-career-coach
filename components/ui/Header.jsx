import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, LayoutDashboardIcon, PenBox, StarsIcon } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = async () => {
   
  return (
    <div className="border-b">
      <header className="container mx-auto">
        <nav className="flex items-center justify-between py-4 px-4">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Sensai logo" 
              width={200} 
              height={60}
              priority
              className="h-12 py-1 w-auto object-contain"
            />
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline">
                  <LayoutDashboardIcon className="w-4 h-4 mr-2" />
                  <span className="hidden md:block">Industry Insights</span>
                </Button>
              </Link>
            


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Growth Tools
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/*<DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
                <DropdownMenuItem>
                <Link href={"/build-resume"} className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Build Resume</span>
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                <PenBox className="w-4 h-4" />
                <span>Cover Letter</span>
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href={"/interview-prep"} className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Interview Prep</span>
                </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-x1",
                  userPreviewMainIdentifier:"font-semibold",
                },
              }}
              afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
