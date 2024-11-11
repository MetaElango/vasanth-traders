"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
const routes = [
  { path: "/products", name: "Products" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  const pathname = usePathname();
  return (
    <header className="background px-4 md:px-16 py-6 flex justify-between items-center border-b border-nl_button_border z-10">
      <Link href="/">Sri Vasanth Traders</Link>

      <nav className="text-[12px] sm:text-base hidden lg:block">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`ml-2 md:ml-6 text-black ${
              pathname === route.path && "underline underline-offset-4"
            }`}
          >
            {route.name}
          </Link>
        ))}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="block lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </SheetTrigger>
        <SheetContent className="background">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex flex-col mt-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={handleLinkClick} // Close sheet on click
                  className={`mt-4 text-lg text-black ${
                    pathname === route.path && "underline underline-offset-4"
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
