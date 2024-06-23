"use client";

import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiTwitterFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
