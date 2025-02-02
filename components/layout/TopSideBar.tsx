"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const TopSideBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between z-20 lg:hidden px-8 py-4 bg-blue-2 shadow-xl w-full">
      <Image src="/logo.png" alt="logo" width={150} height={70} />
      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className="flex gap-4 text-body-medium"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute flex flex-col gap-8 top-10 right-6 bg-white-1 p-5 shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1": ""}`}
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopSideBar;
