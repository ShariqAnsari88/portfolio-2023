import React from "react";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";

const Skills = () => {
    return (
        <div>
            <Wrapper>
                {/* SKILL ICONS START */}
                <div className="grid grid-cols-4 gap-3 md:grid-cols-11 py-[50px] md:py-[100px]">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                </div>
                {/* SKILL ICONS END */}
            </Wrapper>
        </div>
    );
};

export default Skills;
