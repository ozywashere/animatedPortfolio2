"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.url}
            className={`capitalize ${linkStyles}`}
          >
            {link.url === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: "0" }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
