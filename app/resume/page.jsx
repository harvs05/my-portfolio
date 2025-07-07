"use client";

import {
     FaHtml5, 
     FaCss3, 
     FaJs, 
     FaReact, 
     FaNodeJs ,
     FaFigma,
     FaGithub,
     FaPhp,
    } from "react-icons/fa";

import { 
  SiTailwindcss,
  SiNextdotjs, 
  SiLaragon, 
  SiLaravel,
  SiCanva,
  SiMysql,
  SiAdobephotoshop,
} from "react-icons/si";

// about data

const about = {
    title: "About me",
    description: 
    "I'm an IT professional with a passion for both code and design — building responsive websites, solving tech issues, and crafting bold visuals. With experience in HTML, CSS, JavaScript, PHP, and Adobe tools, I blend functionality with creativity to deliver smart, standout solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Harvey B. Varela"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+63)9635814079"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Filipino"
        },
        {
            fieldName: "Email",
            fieldValue: "harveyv291@gmail.com"
        },
        {
            fieldName: "Work Status",
            fieldValue: "Open for Freelance & Remote Work"
        },
        {
            fieldName: "Language",
            fieldValue: "English and Filipino"
        },
    ]
};

// experience data

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    "I have 1 year of industry experience as an IT staff and junior programmer, backed by over 2 years of coding and design practice through academic and personal projects. My journey started with our capstone research system, where I led development and design efforts.",
  items: [
    {
      company: "Municipal Government of Dalaguete",
      position: "Junior Developer & Graphic Designer",
      duration: "2024 – Present",
      details: [
        "Develop and maintain web-based systems using PHP, MySQL, and JavaScript.",
        "Provide technical support for hardware and software issues.",
        "Create digital materials using Canva and Adobe tools for internal use."
      ]
    },
    {
      company: "Capstone Research Project",
      position: "Lead Developer",
      duration: "2023-2024",
      location: "School-Based",
      details: [
        "Led the development of a full-stack system for our thesis project.",
        "Handled front-end and back-end using HTML, CSS, JavaScript, and PHP.",
        "Collaborated with teammates for system design, testing, and deployment."
      ]
    },
    
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description:
        "Studied core IT subjects such as programming, database systems, and web development. Gained experience in both coding and UI/UX design through academic projects, including a full-stack capstone system.",
  items: [
    {
      institution: "Cebu Technological University – Argao Campus",
      degree: "Bachelor of Science in Information Technology",
      duration: "2020 – 2024",
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  description: 
  "Technologies and tools I use in development and design.",
  skillList: [
    {
        icon: <FaHtml5 />,
        name: "html 5",
    },
    {
        icon: <FaCss3 />,
        name: "css 3",
    },
    {
        icon: <FaJs />,
        name: "javascript",
    },
    {
        icon: <FaReact />,
        name: "react.js",
    },
    {
        icon: <SiNextdotjs />,
        name: "next.js",
    },
    {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
    },
    {
        icon: <FaNodeJs />,
        name: "node.js",
    },
    {
        icon: <FaFigma />,
        name: "figma",
    },
     {
        icon: <FaPhp />,
        name: "PHP",
    },
    {
        icon: <SiLaragon/>,
        name: "laragon",
    },
    {
        icon: <SiMysql/>,
        name: "Mysql",
    },
    {
        icon: <SiLaravel />,
        name: "laravel",
    },
    {
        icon: <FaGithub />,
        name: "github",
    },
     {
        icon: <SiAdobephotoshop />,
        name: "Photoshop",
    },
    {
        icon: <SiCanva />,
        name: "Canva",
    },
 

  ],
};



import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import  { motion } from "framer-motion";


const Resume = () => {
    return (
      <motion.div
       initial={{opacity: 0}} 
      animate={{
        opacity: 1,
         transition: {delay: 0.2, duration:0.6, ease: "easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
              <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                <div className="min-h-[70vh] w-full ">
                    {/* experience */}
                    <TabsContent value="experience"className="w-full">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                              {experience.items.map((item, index) => {
                                return (
                                <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                    <div className="flex items-center gap-3">
                                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                      <p className="text-white/60">{item.company}</p>
                                    </div>
                                </li>
                                );
                              })}
                          </ul>
                        </ScrollArea>
                      </div>
                    </TabsContent>

                     {/* education */}
                    
                     <TabsContent value="education"className="w-full">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                              {education.items.map((item, index) => {
                                return (
                                <li key={index}  className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col items-center lg:items-start gap-3 text-left">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-lg font-semibold max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                    <div className="flex items-center gap-3">
                                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                      <p className="text-white/60">{item.institution}</p>
                                    </div>
                                </li>
                                );
                              })}
                          </ul>
                        </ScrollArea>
                      </div>
                    </TabsContent>             

                     {/* skills */}
                    <TabsContent value="skills"className="w-full h-full">
                      <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                          <h3 className="text-4xl font-bold">{skills.title}</h3>
                          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                          {skills.skillList.map((skill,index) => {
                            return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                  </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                            );
                          })}
                        </ul>
                      </div>
                    </TabsContent>

                     {/* about me */}
                     <TabsContent value="about"className="w-full text-cemter xl:text-left">
                      <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[62-px] mx-auto xl:mx-0">
                          {about.info.map((item, index)=> {
                            return (
                              <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span className="text-xl">{item.fieldValue}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </TabsContent>
                </div>
              </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;