"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";

import {Swiper, SwiperSlide} from "swiper/react";
//swiper
import {Pagination} from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"


import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        image: "/work/1.png",
        category: "next js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/2.png",
        category: "js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/3.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/4.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/1.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/2.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/3.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/4.png",
        category: "react js",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },

]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/*Text Wrapper*/}
                <div
                    className="max-w-[570px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="description mb-8">
                        I have worked on a wide range of projects. Here are a few of my latest projects. You can check
                        out my GitHub for more.
                    </p>
                    <Link href="/projects">
                        <Button>
                            All Projects
                        </Button>
                    </Link>
                </div>
                {/*Project Wrapper*/}
                <div className="xl:max-w-[1000px] w-full xl:absolute right-0 top-0">
                    <Swiper className="h-[500px] "
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            pagination={{"clickable": true}}

                    >
                        {projectData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;