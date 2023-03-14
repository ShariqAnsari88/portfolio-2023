import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/peru-logo.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>SOY FULLSTACK DEVELOPER</span>
                    <span className="flex items-center gap-2">
                        <span>DE LIMA</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>PERU</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    📑 ¿Quién soy? 📑<br />
                    Soy un Desarrollador FullStack👨🏻‍💻, con una gran capacidad para trabajar en equipo y consolidar proyectos web, manteniendo siempre el entusiasmo y la buena predisposición.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    📌 ¿Por qué yo? 📌<br />
                    Conmigo en tu equipo, no solo habrás ganado un desarrollador con excelentes habilidades técnicas y con la capacidad de integrarse en cualquier grupo de trabajo, identificar su sinergia natural y ayudar a su organización óptima, para que cada individuo logre desarrollar su máximo potencial, se sienta a gusto y valorado. Me encanta ayudar y aprender de los demás y me encuentro siempre en la búsqueda de nuevos desafíos que fortalezcan y amplíen mis conocimientos y habilidades.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative ">
                    🚀 Experiencia 🚀<br />
                    Destaco mi experiencia académica más reciente, como estudiante de Desarrollador Web Full Stack en Henry. Allí aprendí y perfeccioné mis bases en Front-end y otras tecnologías, sumándole un excelente manejo en JavaScript con sus librerías y frameworks 👨🏻‍💻📚. Esto me ayudado a mejorar mi pensamiento creativo al máximo en búsqueda de nuevas soluciones.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
