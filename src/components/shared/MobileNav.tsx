"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="md:hidden flex py-5 px-5 border-b-2">
      <Link href="/">
        <Image
          src="/assets/images/logo-text.svg"
          alt="icon"
          width={180}
          height={28}
        />
      </Link>

      <nav className="ml-auto flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu-icon"
                width={32}
                height={32}
                className="cursor-pointer hover:bg-slate-400"
              />
            </SheetTrigger>
            <SheetContent>
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="flex-grow">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`mt-10 mb-10 cursor-pointer ${
                          isActive
                            ? "text-blue-500"
                            : "text-black hover:text-red-500"
                        }`}
                        key={link.route}
                      >
                        <Link href={link.route} className="flex gap-5">
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
