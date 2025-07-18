"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I develop modern, scalable, and responsive websites using Laravel, Livewire, HTML, CSS, and JavaScript — optimized for performance and user experience.",
    href: "/work?category=Web%20Development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I craft clean and intuitive user interfaces in Figma, focused on usability, accessibility, and seamless user journeys across all devices.",
    href: "/work?category=UI%2FUX%20Design",
  },
  {
    num: "03",
    title: "Social Media Design",
    description:
      "I create eye-catching banners and Instagram carousels using Canva and Photoshop — perfect for digital marketing, promotions, and branding.",
    href: "/work?category=Social%20Media%20Design",
  },
  {
    num: "04",
    title: "Digital Ads Design",
    description:
      "I design high-converting digital ads tailored for Facebook, Instagram, and web platforms, blending bold visuals with strategic messaging.",
    href: "/work?category=Digital%20Ads%20Design",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
              aria-label={`Go to ${service.title}`}
            >
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-white transition-colors duration-300 group-hover:text-accent"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {service.num}
                </div>
                <div
                  className="w-[70px] h-[70px] rounded-full bg-white 
                            group-hover:bg-accent transition-all duration-300 flex 
                            justify-center items-center hover:rotate-45"
                >
                  <BsArrowRight className="text-primary text-3xl" />
                </div>
              </div>

              {/* title */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
