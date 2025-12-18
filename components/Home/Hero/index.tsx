'use client';

import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { ArrowRight, PackageCheck, Truck, Leaf } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-[#000000] text-white overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block rounded-full bg-[#790001] px-4 py-1 text-sm font-medium text-white">
                Allipel, mais de 25 anos
            </div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Qualidade, Agilidade para o seu{" "}
              <span className="text-red-600 dark:text-red-300">Dia a Dia</span>
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#fff] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A Allipel é referência em descartáveis e produtos de limpeza para empresas e clientes finais. Garantimos agilidade na entrega, atendimento personalizado e respeito ao meio ambiente.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="/mvv">
              <Button className="cursor-pointer bg-[#790001] hover:bg-[#790001] text-white">
                Saiba Mais sobre a Allipel	
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </a>
              <a href="https://wa.me/5511916400563" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="cursor-pointer border-[#5A0004] text-[#FF0000] hover:bg-[#3A0002]">
                Fale conosco
              </Button>
              </a>

            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {[
                { icon: <PackageCheck className="h-4 w-4 text-[#FF0000]" />, text: "Produtos de qualidade" },
                { icon: <Truck className="h-4 w-4 text-[#DD0000]" />, text:"Entrega rápida e segura" },
                { icon: <Leaf className="h-4 w-4 text-[#9A0000]" />, text: "Boas Práticas" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto lg:ml-auto w-full max-w-md sm:max-w-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -top-16 -right-16 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-[#9A0000] to-[#120000] blur-3xl opacity-20"></div>

            <div className="relative z-20 overflow-hidden rounded-3xl border border-[#5A0004] bg-[#1a0000] shadow-2xl">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/heroImage(1).png"
                  alt="Produtos de limpeza Allipel"
                  width={600}
                  height={600}
                  priority
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-lg font-semibold">Empório Allipel</h3>
                <p className="text-sm opacity-80">Comprometida com a excelência em cada entrega</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}