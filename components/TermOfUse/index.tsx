'use client';
import React from 'react';
import { HeaderSimple } from '../HeaderOthers';

export default function TermsOfUseSection() {
    return (
        <>
            <HeaderSimple />
            <main className="mt-20 min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Termos de Uso — Allipel</h1>
                <p className="text-sm text-neutral-400 mb-10">Última atualização: 15/06/2025</p>

                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Objetivo do Site</h2>
                        <p>O presente site tem como finalidade:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Promover a presença digital da Allipel;</li>
                            <li>Informar sobre a missão, visão, valores e serviços da empresa;</li>
                            <li>Facilitar o contato com a equipe por meio de botões diretos para WhatsApp;</li>
                            <li>Apresentar conteúdos multimídia, inclusive vídeos gerados por inteligência artificial, para fins institucionais e promocionais.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. Uso de Conteúdo e Mídia</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Direitos autorais:</strong> Todo o conteúdo presente no site — incluindo textos, imagens, vídeos e gráficos — é de propriedade da Allipel ou licenciado para seu uso. É proibida a reprodução total ou parcial sem autorização.</li>
                            <li><strong>Vídeos com IA:</strong> Alguns vídeos exibidos são gerados com auxílio de tecnologias de inteligência artificial e têm caráter ilustrativo e promocional.</li>
                            <li><strong>Limitação de responsabilidade:</strong> A Allipel não se responsabiliza por interpretações incorretas dos conteúdos multimídia ou institucionais apresentados.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Comunicação via WhatsApp</h2>
                        <p>
                            Os botões disponíveis para redirecionamento ao WhatsApp têm como objetivo facilitar o atendimento e a comunicação direta com a equipe da Allipel. As conversas realizadas por este meio seguem os padrões de privacidade e cordialidade. Mensagens ofensivas ou inadequadas não serão toleradas.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Dados e Privacidade</h2>
                        <p>
                            O site não coleta dados sensíveis ou realiza cadastros automáticos. Dados compartilhados via WhatsApp são tratados com confidencialidade e utilizados apenas para fins de atendimento e relacionamento.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Modificações nos Termos</h2>
                        <p>
                            A Allipel se reserva o direito de atualizar este documento periodicamente. Recomendamos que os visitantes consultem esta página com regularidade.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. Contato</h2>
                        <p>
                            Em caso de dúvidas sobre estes termos, entre em contato com a equipe da Allipel pelo botão &quot;Contato&quot; presente no topo do site ou diretamente via WhatsApp.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
