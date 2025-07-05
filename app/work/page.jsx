"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'Parsers Maintenance System ',
        title: 'project 1',
        description:
        "A web-based Parsers Maintenance System developed to track, manage, and document maintenance activities of parsing equipment. It features automated scheduling, repair logs, and status monitoring to ensure timely servicing and operational efficiency. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
        stack: [
            {name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}, {name: "Php"}, {name: "MySql"}
        ],
        image: '/assets/work/PMS.png',
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'Human Resource Information System',
        title: 'project 2',
        description:
        "A custom-built Human Resource Information System (HRIS) designed to streamline employee records, track attendance, manage leave requests, and generate reports. Built with PHP, Laravel, and Livewire, this system enhances HR efficiency through real-time data management and a responsive user interface.",
        stack: [
            {name: "Php"}, {name: "Laravel"}, {name: "Livewire Framework"}, {name:"MySql"}
        ],
        image: '/assets/work/HRIS.png',
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'Dalaguete Chess Club Logo',
        title: 'project 3',
        description:
        "A logo created for the Dalaguete Chess Club, representing the values of Dalaguete Endless Precision, Tactics, and Harmony (DEPTH). The design blends classic chess symbolism with modern aesthetics, emphasizing strategy, unity, and the club’s commitment to intellectual excellence. Designed using Canva and Adobe Photoshop.",
        stack: [
            {name: "Canva"}, {name: "Adobe Photoshop"},
        ],
        image: '/assets/work/DEPTH.png',
        live: "",
        github: "",
    },
    {
        num: '04',
        category: 'Dalaguete Fiesta Execom Logo',
        title: 'project 4',
        description:
        "A festive and dynamic logo designed for the Dalaguete Fiesta Executive Committee (Execom). The logo captures the vibrant spirit, culture, and unity of the Dalaguete community during its annual town fiesta. It symbolizes collaboration, tradition, and celebration — blending modern design with local elements. Created using Canva and Adobe Photoshop.",
        stack: [
            {name: "Canva"}, {name: "Adobe Photoshop"},
        ],
        image: '/assets/work/EXECOM (1).png',
        live: "",
        github: "",
    },
    {
        num: '05',
        category: 'SereniTea UI/UX Design for Mobile Based',
        title: 'project 5',
        description:
        "A clean and modern mobile UI/UX design concept for SereniTea, one of the leading milk tea shops in the Philippines. This project focuses on enhancing user experience with an intuitive layout, seamless ordering flow, and a visually calming aesthetic inspired by SereniTea’s branding. Designed using Figma, Adobe Photoshop, and Canva to reflect the shop’s premium yet approachable identity.",
        stack: [
            {name: "Canva"}, {name: "Adobe Photoshop"}, {name:"Figma"}
        ],
        image: '/assets/work/SERENITEA.png',
        live: "https://www.figma.com/design/BkdCBPd9lqAKhBfYDTKhuk/SereniTea-UI-UX-Design-Mobile-Based?node-id=1-49&m=dev&t=puZ51hcYCurTs4Zz-1",
        github: "",
    },

    {
        num: '06',
        category: 'Azalea Photography Logo',
        title: 'project 6',
        description:
        "A sophisticated and elegant logo designed for Azalea Photography. The logo combines modern typography with subtle floral elements to reflect the brand’s focus on capturing timeless, delicate moments. Crafted using Canva and Adobe Photoshop, the design emphasizes professionalism, creativity, and a personal touch tailored for the photography industry.",
        stack: [
            {name: "Canva"}, {name: "Adobe Photoshop"}
        ],
        image: '/assets/work/AZALEAPHOTOGRAPHY.png',
        live: "",
        github: "",
    },

     {
        num: '07',
        category: 'FOOD MENU ',
        title: 'project 7',
        description:
        "A visually appetizing food menu design created for both digital and print use. This project showcases the full offerings of Lasa Lokal and The Pitstop Grill, combining traditional Filipino aesthetics with a clean, modern layout. Designed using Canva and Adobe Photoshop to highlight signature dishes, desserts, and beverages with an easy-to-read flow for diners.",
        stack: [
            {name: "Canva"}, {name: "Adobe Photoshop"}
        ],
        image: '/assets/work/FOODMENU.png',
        live: "",
        github: "",
    },

];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project store based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
    <motion.section initial={{opacity: 0}}
        animate={{
            opacity: 1, 
            transition: {delay: 0.2, duration: 0.6, ease:"easeIn"},
    }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    > 
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                        {project.num}
                        </div>
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/*stock */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=> {
                                return (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last comma  */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                );
                            })}
                        </ul>
                         {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            {/* github project button*/}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>


                        </div>
                    </div>  
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30} 
                    slidesPerView={1} 
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index)=> {
                            return (
                            <SwiperSlide key ={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-cover" alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            );
                        })}
                    {/* slider buttons */}
                    <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                </div>
            </div>
        </div>

    </motion.section>
    );
};

export default Work;