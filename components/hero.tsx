'use client';

import { motion } from 'motion/react';

import Image from "next/image";

const container = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const child = {
    initial: { y: '200%' },
    animate: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.33, 1]
        }
    }
}

export default function Hero() {
    return (
        <div>
            <div className="w-full h-[91.2vh] relative text-stone-100">
                <Image src='/hero.webp' alt='Women looking to the sky' className="object-cover" style={{ objectPosition: '50% 63%' }} quality={100} fill />
                <div className="w-full h-full absolute inset-0 bg-[#007AFF] opacity-50" />

                <div className="absolute top-18 w-full text-center overflow-hidden flex flex-col justify-center items-center">
                    <motion.div variants={container} initial='initial' animate='animate' className='overflow-hidden'>
                        <div className='overflow-hidden max-w-[80%] mx-auto'>
                            <motion.h3
                                variants={child}
                                className="font-light"
                                style={{
                                    fontSize: 'clamp(1.5rem, 1vw + 1rem, 3rem)',
                                }}
                            >
                                Design that speaks. Strategy that works.
                            </motion.h3>
                        </div>
                        <motion.h1
                            variants={child}
                            className="font-bold max-w-[60%] mx-auto"
                            style={{
                                fontSize: 'clamp(3.5rem, 4vw + 1rem, 8rem)',
                            }}
                        >
                            Building brands with purpose
                        </motion.h1>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}