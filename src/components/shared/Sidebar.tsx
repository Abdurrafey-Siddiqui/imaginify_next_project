"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";

import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block">
      <div className="px-5 py-5 h-full">
        <Link href="/" className="">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="flex flex-col h-full py-7">
          <SignedIn>
            <ul className="flex-grow space-y-10">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    className={`cursor-pointer ${
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
                        className=""
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="flex-col space-y-10">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    className={`cursor-pointer ${
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
                        className=""
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
