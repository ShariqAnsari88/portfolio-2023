import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import man from "../assets/man.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import linkedin from "../assets/linkedin-icon.png"
import github from "../assets/github-icon.png"
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <div
            id="hero"
            className="w-full h-[130vh] relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR MOBILE START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR MOBILE END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#ffffff] flex justify-center items-center">
                            <a href="https://mail.google.com/mail/u/2/#inbox?compose=new" target="_blank">
                                <img src={gmailIcon} alt="" className="w-[18px]" />
                            </a>                           
                                                        
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full bg-[#ffffff] flex justify-center items-center">
                            <a href="https://www.linkedin.com/in/sandro-malca" target="_blank">
                                <img src={linkedin} alt="" className="w-[18px]" />
                            </a>                                                        
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full bg-[#ffffff] flex justify-center items-center">
                            <a href="https://github.com/SandroMalca" target="_blank">
                                <img src={github} alt="" className="w-[18px]" />
                            </a>                                                        
                        </div>
                        
            

                    </div>
                    <ul className="flex 2xl:text-[20px]">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            Conoceme
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("work")}
                        >
                            Proyectos
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("contact")}
                        >
                            Contacto
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <motion.div
                    className="flex justify-center text-center mt-14 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        Fullstack 
                        <br className="invisible md:visible" />
                        Developer
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-4">
                        👋 Hola, Yo soy{" "}
                        <span className="font-semibold">Sandro Malca</span>
                    </div>
                    <div className="max-w-[510px]">
                        Desarrollo y administro sitios web y aplicaciones modernas.
                        Resuelvo todos sus problemas empresariales.
                        Amante de la tecnología y del trabajo en equipo.
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}
                <motion.div
                    className="hidden md:flex gap-8 relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[80px] font-light">+10</div>
                        <div className="leading-[22px]">
                            PROYECTOS
                            <br />
                            GENIALES
                            <br />
                            COMPLETOS
                        </div>
                    </div>
                    {/* END */}

                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[80px] font-light">+4</div>
                        <div className="leading-[22px]">
                            AÑOS DE
                            <br />
                            EXPERIENCIA
                        </div>
                    </div>
                    {/* END */}
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className="w-[300px] md:w-[360px] 2xl:w-[500px] absolute bottom-0 left-[60%] -translate-x-1/2"
                    initial={{ y: 200, x: "-50%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={man} alt="man" />

                    {/* HIRE ME BUTTON START */}               
                        <div
                            className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[120px] h-[120px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
                            onClick={() => scrollTo("footer")}
                        >
                            <img
                                src={externalLinkIcon}
                                alt=""
                                className="w-[15px]"
                            />
                            <div className="text-black">Contacto</div>
                        </div>
                 
                    
                    {/* HIRE ME BUTTON END */}
                </motion.div>
                {/* PERSON BLOCK END */}
            </Wrapper>
        </div>
    );
};

export default HeroBanner;
