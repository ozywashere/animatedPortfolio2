import React from 'react';
import DevImage from './DevImage';
import Image from 'next/image';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={24}/>,
        text: 'Ryan Davis',
    },
    {
        icon: <MailIcon size={24}/>,
        text: 'uHb5w@example.com',
    },
    {
        icon: <HomeIcon size={24}/>,
        text: 'San Francisco, CA',
    },
    {
        icon: <PhoneCall size={24}/>,
        text: '123-456-7890',
    },
    {
        icon: <GraduationCap size={24}/>,
        text: 'University of California, Berkeley',
    },
    {
        icon: <Calendar size={24}/>,
        text: 'May 2019',
    },
    {
        icon: <Briefcase size={24}/>,
        text: 'Software Engineer',
    },
];
const skillsData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML',
            },
            {
                name: 'CSS',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'React',
            },
            {
                name: 'Node.js',
            },
            {
                name: 'Express',
            },
            {
                name: 'MongoDB',
            },
            {
                name: 'SQL',
            },

            {
                name: 'Java',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
                name: 'VS Code',
            },
            {
                imgPath: '/about/figma.svg',
                name: 'Figma',
            },
            {
                imgPath: '/about/notion.svg',
                name: 'Notion',
            },
            {
                imgPath: '/about/wordpress.svg',
                name: 'Wordpress',
            },
        ],
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor of Science',
                years: '2018 - 2020',
            },
            {
                university: 'Another University',
                qualification: 'Master of Science',
                years: '2021 - 2023',
            },
            {
                university: 'Yet Another University',
                qualification: 'Doctor of Philosophy',
                years: '2023 - Present',
            },
        ],
    },
    {
        title: 'experience',
        data: [
            {
                company: 'GHI LLC',
                role: 'Software Engineer',
                years: '2020-2021',
            },
            {
                company: 'ABC Inc',
                role: 'Senior Developer',
                years: '2021-2022',
            },

            {
                company: 'DEF Corp',
                role: 'Lead Developer',
                years: '2023-Present',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-cols xl:flex-row">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImage
                            containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    <div className="flex-1 mt-12 xl:mt-8">
                        <Tabs defaultValue={"personal"}>
                            <TabsList
                                className="w-full grid xl:grid-cols-3 xl:max-w-[520px] border dark:border-none"
                                defaultValue="personal">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            <div className="text-lg">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 10</h3>
                                        <p className="mb-4 description max-w-xl mx-auto xl:mx-0">
                                            I specialize in crafting intuitive websites with cutting-edge
                                            technology,delivering dynamic and
                                            engaging user experiences.
                                        </p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div key={index}
                                                         className="flex items-center gap-x-4 mb-4 mx-auto xl:mx-0">
                                                        <p className="text-primary">{item.icon}</p>
                                                        <p>{item.text}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages*/}
                                        <div className="flex flex-col gap-y-4">
                                            <p className="text-primary">Language skill</p>
                                            <div className="border-b border-border"></div>
                                            <p>English,French,Spanish,Italian</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div
                                                    className="flex gap-x-4 items-center text-[22px] text-primary mb-4">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').title}</h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const {years, role, company} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-px bg-border relative ml-2">
                                                                    <div
                                                                        className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div
                                                                        className="text-lg leading-none text-muted-foreground mb-4">{years}</div>
                                                                    <div className="text-base font-medium">{role}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap/>
                                                    <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').title}</h4>
                                                </div>
                                                {/* list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const {years, qualification, university} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group " key={index}>
                                                                <div className="h-[84px] w-px bg-border relative ml-2">
                                                                    <div
                                                                        className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div
                                                                        className="text-lg leading-none text-muted-foreground mb-4">{years}</div>
                                                                    <div
                                                                        className="text-base font-medium">{qualification}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">What I Use Everyday</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillsData, 'skills').data.map((item, index) => {
                                                    const {name} = item;
                                                    return (
                                                        <div key={index}
                                                             className="w-2/4 text-center xl:text-left mx-auto xl:mx-0">
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillsData, 'tools').data.map((item, index) => {
                                                    const {imgPath} = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image src={imgPath} alt="tools" width={48} height={48}/>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
