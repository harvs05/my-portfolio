
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
    return (
    <section className="h-full">
    <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Website Developer and Graphic Designer</span>
                <h1 className="h1 mb-6">
                    Hello I'm <br /> <span className="text-accent">Harvey Varela</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                    Offering flexible and reliable services in front-end web development, graphic design (Canva & Photoshop), 
                    and technical support. With hands-on experience in local government projects,
                    I provide efficient solutions tailored to your needs whether it’s creating visuals,
                    fixing tech issues, or building responsive websites. 
                    Always ready to adapt and learn.
                </p>
                {/* button and socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <a 
                        href="/Harvey-Varela-CV.pdf" 
                        download 
                        className="uppercase"
                    >
                        <Button variant="outline" size="lg" className="flex items-center gap-2">
                        <span>Download CV</span>
                        <FiDownload className="text-xl" />
                        </Button>
                    </a>

                    <div className="mb-8 xl:mb-0">
                        <Social 
                        containerStyles="flex gap-6" 
                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                        items-center text-accent text-base hover:bg-accent 
                        hover:text-primary transition-all duration-500"
                        />
                    </div>
                </div>
                
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo/>
            </div> 
        </div>
    </div>
       <Stats/> 
    </section>
    );
};

export default Home;

