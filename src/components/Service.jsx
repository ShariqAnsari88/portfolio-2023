import React from "react";
import Div from "./Div";

const Service = ({ num, title, desc, data }) => {
    return (
        <Div className="text-white border-b border-[#333333] flex flex-col gap-2 md:gap-4 2xl:gap-5 pb-7">
            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]">
                {num}.
            </div>
            <div className="text-[28px] 2xl:text-[34px] text-[#EFB946] uppercase">
                {title}
            </div>
            <div className="hidden md:flex gap-[10px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px]"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC]">
                {desc}
            </div>
        </Div>
    );
};

export default Service;
