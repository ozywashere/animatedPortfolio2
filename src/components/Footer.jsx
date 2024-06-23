import React from "react";
import Socials from "@/components/Socials";

const Footer = () => {
    return <footer className="bg-secondary py-12">
        <div className="container">
            <div className="flex flex-col items-center justify-between">
                <Socials containerStyles="flex gap-x-6" iconStyles="text-primary dark:text-white/70 text-[22px] dark:hover:text-primary hover:text-white w-10 h-10 flex items-center justify-center  hover:bg-primary rounded-full dark:hover:bg-white"/>
                {/*    copyright*/}
                <p className="description">
                    CopyRight &copy;Ryan Davids 2025. All rights reserved.
                </p>
            </div>
        </div>
    </footer>;
};

export default Footer;
