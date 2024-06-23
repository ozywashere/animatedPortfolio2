'use client';

import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';
import DevImage from '@/components/DevImage';
import Badge from '@/components/Badge';
import Link from 'next/link';
import Socials from '@/components/Socials';

const Hero = () => {
  return (
    <section className="py-12 xl:pb-24 h-[86vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      {/*  Container*/}
      <div className="container">
        <div className="flex justify-between gap-x-8 relative">
          {/*text*/}
          <div className="flex max-w-[600px] flex-col xl:mx-0 mx-auto text-center xl:text-left">
            <span className="subtitle mb-4">Web Developer</span>
            <h1 className="title  mb-6">
              Hello, I am <span className="text-primary">Ryan Davis</span>
            </h1>
            <p className="description max-w-[490px] mx-auto xl:mx-0 mb-8">
              Bringing ideas to life with modern web technologies. I specialize in building web applications with React,
              Next.js, and Tailwind CSS.
            </p>
            {/*Buttons*/}
            <div className="flex flex-col md:flex-row gap-3  xl:mx-0 mx-auto  mb-12 ">
              <Link href="/contact">
                <Button>
                  Contact Me
                  <Send className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="#" download>
                <Button variant="secondary">
                  Download CV
                  <Download className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[24px] hover:text-primary transition-colors cursor-pointer"
            />
          </div>
          {/*image*/}
          <div className="hidden xl:flex relative ">
            {/*badge*/}
            <Badge
              containerStyles="top-[25%] -left-[10rem] absolute"
              icon={<RiBriefcase4Fill />}
              endCountNum={444}
              endCountText="k"
              badgeText=" Years of Experience"
            />
            <Badge
              containerStyles="top-[80%] -left-[1rem] absolute"
              icon={<RiTeamFill />}
              endCountText="k"
              endCountNum={4444}
              badgeText=" Projects Completed"
            />
            <Badge
              containerStyles="top-[55%] -right-[8rem] absolute"
              icon={<RiTodoFill />}
              endCountText="k"
              endCountNum={5}
              badgeText=" Happy Clients"
            />
            <div className="bg-hero_shape_2_light dark:hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImage
              containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat bg-bottom relative"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
      </div>
      {/* icon */}
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
