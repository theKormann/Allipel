'use client';
import React from 'react';
import { Footer } from '@/components/Footer';
import { HeaderSimple } from '@/components/HeaderOthers';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

// Um componente de item de FAQ para evitar repetição
type FaqItemProps = {
  value: string;
  question: React.ReactNode;
  children: React.ReactNode;
};

const FaqItem: React.FC<FaqItemProps> = ({ value, question, children }) => (
  <AccordionItem
    value={value}
    className="bg-neutral-900 border-b border-neutral-800 rounded-lg transition-all"
  >
    <AccordionTrigger className="text-left p-4 hover:no-underline hover:bg-neutral-800/50 rounded-lg">
      {question}
    </AccordionTrigger>
    <AccordionContent className="p-4 pt-0 text-neutral-400">
      {children}
    </AccordionContent>
  </AccordionItem>
);

export function FaqPage() {
  return (
    <>
      <HeaderSimple />
      <main className="min-h-screen bg-neutral-950 text-white px-4 py-16 md:py-24">
        <div className="mt-20 max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-neutral-400">
              Tudo o que você precisa saber sobre a Allipel.
            </p>
          </div>


          <Accordion type="single" collapsible className="w-full space-y-3">
            <FaqItem value="item-1" question="O que é a Allipel?">
              A Allipel é um empório especializado em produtos descartáveis e de
              limpeza, focado em atender a todos da melhor forma possível com
              qualidade e eficiência.
            </FaqItem>

            <FaqItem
              value="item-2"
              question="Quais são os principais produtos vendidos?"
            >
              Trabalhamos com uma vasta gama de produtos que inclui Alimentos
              (mercearia), Descartáveis para festas e dia a dia, e produtos de
              limpeza profissionais e domésticos, entre outros itens.
            </FaqItem>

            <FaqItem
              value="item-3"
              question="Como posso comprar produtos da Allipel?"
            >
              Você pode comprar diretamente pelo nosso WhatsApp para um
              atendimento personalizado ou através do iFood para entregas
              rápidas. Estamos trabalhando para lançar nossa loja virtual em
              breve!
            </FaqItem>

            <FaqItem value="item-4" question="Onde a Allipel está localizada?">
              Nossa loja física está localizada em São Paulo, no bairro Jaguaré.
              O endereço completo é de fácil acesso, ideal para retirada de
              produtos e para quem deseja um atendimento presencial.
            </FaqItem>

            <FaqItem value="item-5" question="Qual o horário de funcionamento?">
              Nosso horário de atendimento é de Segunda a Sábado, das 7:30 às 18:30.
              
              Não abrimos aos domingos.

              Feriados das 8:00 às 16:00.
            </FaqItem>

            <FaqItem
              value="item-6"
              question="Vocês fazem entregas? Qual a área de cobertura?"
            >
              Sim, realizamos entregas! Atendemos toda a região do Jaguaré e
              bairros vizinhos através do iFood. Para pedidos maiores ou outras
              localidades, por favor, entre em contato pelo WhatsApp para
              verificarmos a possibilidade.
            </FaqItem>

            <FaqItem
              value="item-7"
              question="Quais são as formas de pagamento aceitas?"
            >
              Aceitamos diversas formas de pagamento para sua conveniência,
              incluindo cartões de crédito, débito, PIX e dinheiro.
            </FaqItem>
          </Accordion>


          <div className="mt-16 text-center bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h2 className="text-2xl font-bold mb-2">
              Não encontrou o que procurava?
            </h2>
            <p className="text-neutral-400 mb-6">
              Nossa equipe está pronta para ajudar com qualquer outra dúvida.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-4 text-base shadow-lg shadow-red-900/20 transition-transform hover:scale-105"
            >
              <a href="https://wa.me/5511916400563" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Fale Conosco no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}