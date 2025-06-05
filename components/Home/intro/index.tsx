'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Intro() {

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("Elemento com id 'next-section' não encontrado para scroll.");
        }
    };

    const customRed = '#FF5252';
    const customRedGlow = `0px 0px 15px rgba(179, 9, 9, 0.7)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full flex flex-col justify-end items-center relative overflow-hidden"
            style={{ height: '100vh' }} 
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/video/videoHero.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>

            <div className="relative z-10 mb-[5vh]">
                <motion.div
                    whileHover={{ scale: 1.1, boxShadow: customRedGlow }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >   
                <a href="#hero">
                    <Button
                        onClick={scrollToNextSection}
                        variant="ghost"
                        size="icon"
                        aria-label="Scroll para a próxima seção"
                        className="cursor-pointer rounded-full bg-[rgba(255,82,82,0.8)] hover:bg-[rgba(255,82,82,1)] text-white"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </Button>
                </a>
                </motion.div>
            </div>
        </motion.div>
    );
}
