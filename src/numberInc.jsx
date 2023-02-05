import { useState, useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";
function App() {
    const [once, setOnce] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        // const controls = !once
        //     ? animate(count, isInView ? 100 : 0, {
        //           duration: 2,
        //           onComplete: () => setOnce(true),
        //       })
        //     : null;

        const controls2 = animate(count, isInView ? 100 : 0, {
            duration: 2,
        });

        // return controls?.stop;
    }, [isInView]);

    return (
        <div className="App h-[5000px]">
            <div className="w-full h-[100vh]" />
            <div className="w-full h-[100vh]" />
            <div className="w-full h-[100vh] flex justify-center items-center">
                <motion.div
                    ref={ref}
                    className="w-48 h-48 bg-white text-black text-8xl flex justify-center items-center"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    {rounded}
                </motion.div>
            </div>
        </div>
    );
}

export default App;
