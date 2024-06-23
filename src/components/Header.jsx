"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "@/components/ThemeToggler";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const [header, setHeader] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${header ? "py-4 shadow-lg bg-white dark:bg-accent" : "py-6 dark:bg-transparent"}   ${pathname === "/" && "bg-[#fef9f5]"} sticky top-0 z-30 transition-all duration-300`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8  items-center"
              linkStyles="relative hover:text-primary  transition-all duration-300"
              underlineStyles="absolute w-full h-[2px] bg-primary top-full left-0 "
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
