'use client';
import React from 'react';
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SectionDescription } from "@/components/ui/SectionDescription";

export function Location() {
  return (
    <section 
    id='location'
    className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24">
      <SectionTitle className="mb-4 text-center">
        <span className="text-white font-bold">Estamos </span>
        <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-bold">
          Perto de Você
        </span>
      </SectionTitle>

      <div className="text-center mb-8">
        <SectionDescription>
          Estamos localizados em uma região de fácil acesso para melhor atender você. Confira no mapa abaixo e venha conhecer a <span className="text-white font-semibold">Allipel</span>!
        </SectionDescription>
      </div>

      <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-neutral-700">
        <iframe
          title="Mapa Empório Allipel - Jaguaré"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.231840258379!2d-46.74758212374001!3d-23.56160177880298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce566dc027b2d1%3A0x1cfcdb153e22cb10!2sR.%20Dr.%20Agenor%20Fernandes%20Barbosa%20-%20Jaguar%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005344-010!5e0!3m2!1spt-BR!2sbr!4v1717691845335!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
