'use client';

import { useScroll, useTransform, motion, useSpring } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import TextGradientScroll from "./text-gradient-scroll";

export default function About() {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 0.4], [500, 0]);
    const y = useSpring(translateY, { stiffness: 200, damping: 40 });

    return (
        <div ref={container} className="w-full h-[100vh] bg-[#007AFF] flex justify-center items-center">
            <div className="w-full basis-[50%] h-full items-end flex">
                <motion.div style={{ y }}>
                    <Image src='/ICON.svg' alt='G symbol' width={1000} height={100} />
                </motion.div>
            </div>

            <div className="flex-1">
                <div className="max-w-[60%] mt-70">
                    <TextGradientScroll Tag="h4" className="!font-thin">
                        Hi, I’m Marina — a graphic designer, visual thinker, and the founder of Gritifi. I believe great design starts with structure and ends with emotion. It’s not just about looking good — it’s about feeling right and communicating clearly.
                    </TextGradientScroll>
                </div>
            </div>
        </div>
    )
}