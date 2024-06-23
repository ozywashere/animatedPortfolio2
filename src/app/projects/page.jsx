"use client"
import React, {useState} from "react";
import {Tabs, TabsTrigger, TabsList, TabsContent} from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectsData = [
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
        category: "next js",
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
        category: "full stack",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/2.png",
        category: "mern stack",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/3.png",
        category: "full stack",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },
    {
        image: "/work/4.png",
        category: "full stack",
        name: "Nexa Website",
        description: "Nexa is a modern and creative website template for multi-purpose businesses. ",
        link: "/",
        github: "/"
    },

]


const uniqueCategory = ["all projects", ...new Set(projectsData.map((item) => item.category))];


const Projects = () => {
    const [category, setCategory] = useState("all projects");
    const [categories, setCategories] = useState(uniqueCategory);

    const filteredProjects = projectsData.filter((project) => {

            return category === "all projects" ? project : project.category === category;
        }
    );
    console.log(category);
    return <section className="min-h-screen pt-12">
        <div className="container">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
            {/*Tabs*/}
            <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                <TabsList
                    className="w-full grid h-full md:grid-cols-5 lg:w-[740px] mx-auto mb-12 md:border dark:border-none">
                    {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(category)}
                                    value={category}
                                    className="capitalize w-[162px] md:w-auto"
                                    key={index}>
                                    {category}
                                </TabsTrigger>
                            )
                        }
                    )}
                </TabsList>
                <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                    {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index} className="relative">
                                    <ProjectCard project={project}/>
                                </TabsContent>
                            )
                        }
                    )}
                </div>
            </Tabs>
        </div>
    </section>;
};

export default Projects;
