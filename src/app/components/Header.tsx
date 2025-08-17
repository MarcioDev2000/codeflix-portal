'use client'

import React from "react";
import { UserProfile } from "./UserProfile";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
  const isScrolled = useScroll();
  

  return (
    <header
      className={`
        ${isScrolled ? "bg-black" : ""}
        top-0 z-50 flex w-full fixed
        items-center justify-between
        px-4 py-4 
        bg-gradient-to-t from-transparent to-black p-2 transition-all
        lg:px-16 lg:py-4
      `}
    >
      <div className="flex items-center space-x-2 md:space-x-4">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
