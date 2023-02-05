import React from "react";

import Wrapper from "./Wrapper";
import man from "../assets/man.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";

const HeroBanner = () => {
    return (
        <div className="w-full h-[100vh] movingBackground relative">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px]">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>jsdev@gmail.com</div>
                    </div>
                    <ul className="flex 2xl:text-[20px]">
                        <li className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90">
                            About me
                        </li>
                        <li className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90">
                            Skills
                        </li>
                        <li className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90">
                            Work
                        </li>
                        <li className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90">
                            Contact
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <div className="flex justify-center text-center mt-10 md:mt-14 mb-10">
                    <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        I Am A Creative
                        <br className="invisible md:visible" />
                        Designer
                    </h1>
                </div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <div className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]">
                    <div className="font-light mb-4">
                        👋 Hi, I Am{" "}
                        <span className="font-semibold">John Doe</span>
                    </div>
                    <div className="max-w-[510px]">
                        I create and maintain modern websites and applications.
                        I solve all your business problems. Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                    </div>
                </div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}
                <div className="invisible md:visible flex gap-8 relative z-10">
                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[80px] font-light">10+</div>
                        <div className="leading-[22px]">
                            SUCCESSFULLY
                            <br />
                            COMPLETED
                            <br />
                            PROJECTS
                        </div>
                    </div>
                    {/* END */}

                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[80px] font-light">2+</div>
                        <div className="leading-[22px]">
                            YEARS OF
                            <br />
                            EXPERIENCE
                        </div>
                    </div>
                    {/* END */}
                </div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <div className="w-[260px] md:w-[360px] 2xl:w-[475px] absolute bottom-0 left-[50%] -translate-x-1/2">
                    <img src={man} alt="" />

                    {/* HIRE ME BUTTON START */}
                    <div className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer hover:-translate-y-2 transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90">
                        <img
                            src={externalLinkIcon}
                            alt=""
                            className="w-[15px]"
                        />
                        <div className="text-black">Hire Me</div>
                    </div>
                    {/* HIRE ME BUTTON END */}
                </div>
                {/* PERSON BLOCK END */}
            </Wrapper>
        </div>
    );
};

export default HeroBanner;
