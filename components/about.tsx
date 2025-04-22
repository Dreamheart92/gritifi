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
        <div ref={container} id='about' className="w-full lg:h-[100svh] bg-[#007AFF] flex flex-col lg:flex-row justify-center items-center pt-12 lg:pt-0 gap-24">
            <div className="w-full lg:basis-[50%] lg:h-full items-end flex order-2 lg:order-1">
                <motion.div style={{ y }}>
                    <Image
                        src='/ICON.svg'
                        alt='G symbol'
                        width={900}
                        height={100}
                        style={{
                            width: 'clamp(10rem, 45vw + 1rem, 54rem)',
                        }}
                    />
                </motion.div>
            </div>

            <div className="lg:flex-1 order-1 lg:order-2 flex justify-center items-center lg:justify-start lg:items-start text-stone-100">
                <div className="px-2 xl:max-w-[80%] 2xl:max-w-[70%] xl:mt-30 2xl:mt-70">
                    <TextGradientScroll Tag="h4" className="!font-thin text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl leading-relaxed" boldText>
                        Hi, I’m Marina — a graphic designer, visual thinker, and the founder of Gritifi. I believe great design starts with structure and ends with emotion. It’s not just about looking good — it’s about feeling right and communicating clearly.
                    </TextGradientScroll>
                    <TextGradientScroll Tag="h4" className="!font-thin text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl leading-relaxed mt-6">
                        I launched Gritifi as a studio where cultural soul meets strategic creativity.
                        My background in graphic design and my roots in a small Bulgarian town shape everything I create — from bold brand identities to thoughtful visual systems. Whether I’m working with a local artisan or an international startup, I bring empathy, clarity, and intention to every project.
                    </TextGradientScroll>
                </div>
            </div>
        </div>
    )
}