import { Icons } from "@/components/ui/Icons";

interface SocialLink {
  name: "instagram" | "whatsapp" | "mail";
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "instagram",
    href: "https://www.instagram.com/allipeldescartaveis",
  },
  {
    name: "whatsapp",
    href: "https://wa.me/5511916400563", 
  },
  {
    name: "mail",
    href: "mailto:allipel@terra.com.br",
  },
];

export function FooterSocial() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 sm:justify-start sm:gap-6">
      {socialLinks.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-100"
          >
            <Icons
              name={name}
              className="h-4 opacity-40 hover:opacity-80 sm:h-5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
