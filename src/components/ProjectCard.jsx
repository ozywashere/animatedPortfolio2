import Link from "next/link";
import Image from "next/image";
import {Card, CardHeader} from "@/components/ui/card";
import {Github, Link2Icon} from "lucide-react";
import {Badge} from "@/components/ui/badge";

const ProjectCard = ({project}) => {
    const {image, category, name, description, link, github} = project;
    return (
        <Card className="group overflow-hidden">
            <CardHeader className="p-0">
                <div
                    className="relative w-full h-[300px] flex justify-center items-center dark:bg-secondary/40 bg-secondary bg-work_project_bg_light dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={image} alt={name} width={247} height={250} priority/>

                <div className="flex gap-x-4">
                    <Link href={link} className="bg-background shadow w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                            <Link2Icon size={24}/>
                    </Link>
                    <Link href={github}
                          className="bg-primary text-white w-[54px] shadow h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                            <Github size={24}/>
                    </Link>
                </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-4">{category}</Badge>
                <h4 className="h4 mb-1">{name}</h4>
                <p className="description">{description}</p>

            </div>
        </Card>
    );
};

export default ProjectCard;