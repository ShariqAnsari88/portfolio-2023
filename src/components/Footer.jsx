import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import linkedin from "../assets/linkedin-icon.png"
import github from "../assets/github-icon.png"
import { scrollTo } from "../helper";

const Footer = () => {
    return (
        <div id="footer" className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
                    
                    <div className="flex items-center gap-[6px]">
                        <h2>Hablemos</h2>
                        <a href="https://mail.google.com/mail/u/2/#inbox?compose=new" target="_blank">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#rgb(123, 118, 118)] flex justify-center items-center">
                                <img src={gmailIcon} alt="" className="w-[18px]" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/sandro-malca" target="_blank">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#rgb(123, 118, 118)] flex justify-center items-center">
                                <img src={linkedin} alt="" className="w-[18px]" />
                            </div>
                        </a>
                        <a href="https://github.com/SandroMalca" target="_blank">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#rgb(123, 118, 118)] flex justify-center items-center">
                                <img src={github} alt="" className="w-[18px]" />
                            </div>
                        </a>
                    </div>
                    <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("about")}
                        >
                            Conoceme
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("work")}
                        >
                            Proyectos
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("contact")}
                        >
                            Contacto
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
