export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterItems {
  title: string;
  links: FooterLink[];
}

export const footerNav: FooterItems[] = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/#home" },
      { label: "Sobre", href: "/#about" },
      { label: "Localização", href: "/#location" },
      { label: "Contato", href: "/#contact" },
      { label: "Quem Somos", href: "/mvv" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Variedades", href: "/#services" },
      { label: "Fácil e Ágil", href: "/#services" },
      { label: "Entrega Express", href: "/#services" },
      { label: "Ofertas Imperdíveis", href: "/#services" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Termos de Uso", href: "/terms/termOfUse" },
      { label: "Política de Privacidade", href: "/terms/privacyPolicy" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Trabalhe conosco", href: "mailto:allipel@terra.com.br" },
      { label: "Suporte", href: "https://wa.me/5511916400563" },
    ],
  },
];
