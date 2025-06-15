'use client';
import React from 'react';
import { HeaderSimple } from '../HeaderOthers';

export default function PrivacyPolicySection() {
  return (
    <>
      <HeaderSimple />
      <main className="mt-20 min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Política de Privacidade — Allipel</h1>
        <p className="text-sm text-neutral-400 mb-10">Última atualização: 15/06/2025</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Compromisso com a Privacidade</h2>
            <p>
              A Allipel valoriza a sua privacidade. Esta Política explica como coletamos, utilizamos e protegemos suas informações ao navegar em nosso site ou entrar em contato conosco.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Coleta de Informações</h2>
            <p>
              Não realizamos coletas automáticas de dados pessoais neste site. Informações só são obtidas caso você entre em contato voluntariamente via WhatsApp, onde podem ser coletados dados como:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nome;</li>
              <li>Telefone;</li>
              <li>Mensagem enviada e dados fornecidos diretamente por você.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Uso das Informações</h2>
            <p>
              As informações fornecidas voluntariamente serão utilizadas exclusivamente para:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Responder dúvidas e solicitações;</li>
              <li>Fornecer informações institucionais sobre a Allipel;</li>
              <li>Melhorar o atendimento e o relacionamento com os visitantes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Compartilhamento de Dados</h2>
            <p>
              A Allipel não compartilha, vende ou divulga dados pessoais com terceiros, salvo quando exigido por lei ou com autorização expressa do titular.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Segurança</h2>
            <p>
              Utilizamos boas práticas de segurança para proteger qualquer dado que venha a ser compartilhado, incluindo criptografia em conexões e acesso restrito aos dados recebidos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Direitos do Usuário</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito de:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Solicitar a exclusão de suas informações;</li>
              <li>Acessar os dados que nos forneceu;</li>
              <li>Retirar o consentimento a qualquer momento.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política a qualquer momento para refletir mudanças legais ou melhorias no serviço. A data da última alteração sempre estará visível nesta página.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Fale Conosco</h2>
            <p>
              Em caso de dúvidas ou solicitações relacionadas à privacidade, entre em contato conosco via o botão de WhatsApp disponível no site ou por nossos canais oficiais.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
