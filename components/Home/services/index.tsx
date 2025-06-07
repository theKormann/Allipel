'use client';
import React from 'react';
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionDescription } from "@/components/ui/SectionDescription";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdOutlineLocalGroceryStore, MdOutlineShoppingCartCheckout, MdOutlineLocalOffer } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const marketServices = [
  {
    title: "Variedade Incrível",
    description: "De frescos à despensa, encontre tudo que seu lar precisa em nosso catálogo completo.",
    icon: <MdOutlineLocalGroceryStore size={28} className="text-red-500" />,
  },
  {
    title: "Compra Fácil e Rápida",
    description: "Escolha, peça e receba, tudo feito em minutos, sem complicações.",
    icon: <MdOutlineShoppingCartCheckout size={28} className="text-red-500" />,
  },
  {
    title: "Entrega Expressa",
    description: "Seus pedidos chegam voando! Agilidade e cuidado do nosso empório até sua porta.",
    icon: <TbTruckDelivery size={28} className="text-red-500" />,
  },
  {
    title: "Ofertas Imperdíveis",
    description: "Economize todos os dias com promoções exclusivas e preços que cabem no seu bolso.",
    icon: <MdOutlineLocalOffer size={28} className="text-red-500" />,
  },
];

export default function HomePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24 bg-black" 
    >

      <SectionTitle
      className='mb-4 text-center'>
        <span className="text-white font-bold">Seu Mercado </span>
        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-bold">
          Completo e Ágil
        </span>
      </SectionTitle>
      <div className="text-center">
        <SectionDescription>
          <span className="text-neutral-300">Tudo o que você precisa, com a facilidade de compra</span>{" "}
          e a rapidez da nossa entrega.
        </SectionDescription>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {marketServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-transparent border border-neutral-700/80 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70 hover:shadow-[0_0_25px_0px_rgba(239,68,68,0.15)]">
                <CardHeader className="flex flex-col items-center text-center gap-4 pb-3 pt-6">
                  <div className="rounded-full bg-neutral-800/60 p-4 border border-neutral-700/50">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-neutral-50">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6">
                  <CardDescription className="text-sm text-neutral-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}