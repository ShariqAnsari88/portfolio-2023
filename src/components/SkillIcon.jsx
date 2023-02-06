import React from "react";

const SkillIcon = ({ path }) => {
    return (
        <div className="flex items-center justify-center w-[70px] md:w-[90px] 2xl:w-[110px] h-[70px] md:h-[90px] 2xl:h-[110px] rounded-full bg-[#292929]">
            <img src={path} className="w-[34px] md:w-[44px] 2xl:w-[58px]" />
        </div>
    );
};

export default SkillIcon;
