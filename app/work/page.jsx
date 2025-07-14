"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useSearchParams } from "next/navigation";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Parsers Maintenance System",
    description:
      "A web-based Parsers Maintenance System developed to track, manage, and document maintenance activities of parsing equipment. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Php" }, { name: "MySql" }],
    image: "/assets/work/PMS.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Human Resource Information System",
    description:
      "A custom-built HRIS designed to streamline employee records, track attendance, manage leave requests, and generate reports. Built with PHP, Laravel, and Livewire.",
    stack: [{ name: "Php" }, { name: "Laravel" }, { name: "Livewire" }, { name: "MySql" }],
    image: "/assets/work/HRIS.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Web Development",
    title: "TrooTea Management System",
    description:
      "A custom-built Management and Inventory System developed for a tea shop. Built with PHP, Laravel, and Livewire.",
    stack: [{ name: "Php" }, { name: "Laravel" }, { name: "PHP mailer" }, { name: "MySql" }],
    image: "/assets/work/TrooTeaMS.png",
    live: "https://www.figma.com/proto/djZGQyxU3kCZ5vdovwgWee/TrooTea-Management-System?node-id=0-1&t=pR4yUqqj7pjtTFkN-1",
    github: "",
  },
  {
    num: "04",
    category: "Social Media Design",
    title: "Dalaguete Chess Club Logo",
    description:
      "A logo created for the Dalaguete Chess Club, blending chess symbolism with modern aesthetics. Designed using Canva and Photoshop.",
    stack: [{ name: "Canva" }, { name: "Adobe Photoshop" }],
    image: "/assets/work/DEPTHLOGO.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Social Media Design",
    title: "Dalaguete Fiesta Execom Logo",
    description:
      "A vibrant logo designed for the Dalaguete Fiesta Executive Committee. Created using Canva and Photoshop.",
    stack: [{ name: "Canva" }, { name: "Adobe Photoshop" }],
    image: "/assets/work/EXECOM (1).png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "UI/UX Design",
    title: "SereniTea Mobile UI",
    description:
      "A clean and modern mobile UI/UX concept for SereniTea, enhancing user experience. Designed in Figma.",
    stack: [{ name: "Canva" }, { name: "Adobe Photoshop" }, { name: "Figma" }],
    image: "/assets/work/SERENITEA.png",
    live: "https://www.figma.com/design/BkdCBPd9lqAKhBfYDTKhuk/SereniTea-UI-UX-Design-Mobile-Based?node-id=1-49&m=dev&t=puZ51hcYCurTs4Zz-1",
    github: "",
  },
  {
    num: "07",
    category: "Social Media Design",
    title: "Food Menu Design",
    description:
      "A visually appetizing food menu design created for digital and print. Designed with Canva and Photoshop.",
    stack: [{ name: "Canva" }, { name: "Adobe Photoshop" }],
    image: "/assets/work/FOODMENU.png",
    live: "",
    github: "",
  },

   {
    num: "08",
    category: "Social Media Design",
    title: "Iced Coffee",
    description:
      "A visually appetizing food menu design created for digital and print. Designed with Canva and Photoshop.",
    stack: [{ name: "Adobe Photoshop" }],
    image: "/assets/work/ICEDCOFFEEADS.png",
    live: "",
    github: "",
  },
  {
    num: "09",
    category: "Social Media Design",
    title: "ChocoPie Ice Cream",
    description:
      "A visually appetizing food menu design created for digital and print. Designed with Canva and Photoshop.",
    stack: [{ name: "Adobe Photoshop" }, { name: "Canva" }],
    image: "/assets/work/ICECREAMADS.png",
    live: "",
    github: "",
  },
   {
    num: "10",
    category: "Digital Ads Design",
    title: "Rent a Car ",
    description:
      "A visually appetizing food menu design created for digital and print. Designed with Canva and Photoshop.",
    stack: [{ name: "Adobe Photoshop" }, { name: "Canva" }],
    image: "/assets/work/RENTCARADS.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredProjects =
    categoryFilter !== null
      ? projects.filter((p) => p.category === categoryFilter)
      : projects;

  const [project, setProject] = useState(filteredProjects[0] ?? null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(filteredProjects[currentIndex]);
  };

  useEffect(() => {
    setProject(filteredProjects[0] ?? null);
  }, [categoryFilter]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {categoryFilter && (
          <>
            <div className="text-right mb-4">
              <Link
                href="/work"
                className="inline-block bg-accent text-primary px-4 py-2 rounded hover:bg-accent-hover transition"
              >
                Show All Projects
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-accent mb-6">
              {categoryFilter} Projects
            </h1>
          </>
        )}

        {project ? (
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
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
                {filteredProjects.map((proj, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={proj.image} fill className="object-cover" alt={proj.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        ) : (
          <div className="text-center text-white/60 text-lg">
            No projects found for category:{" "}
            <span className="text-accent">{categoryFilter}</span>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Work;
