interface NavLink {
  name: string;
  href: string;
  section: string;
}

interface NavBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const navLinks: NavLink[] = [
  { name: "Início", href: "#home", section: "home" },
  { name: "Sobre", href: "#about", section: "about" },
  { name: "Serviços", href: "#services", section: "services" },
  { name: "Contato", href: "#contact", section: "contact" },
];

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  return (
    <ul className="flex gap-7">
      {navLinks.map(({ name, href, section }) => (
        <li key={section}>
          <a
            href={href}
            className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
              activeSection === section ? "text-white" : "text-neutral-400"
            }`}
            onClick={() => setActiveSection(section)}
          >
            <h2 className="group-hover:text-white">{name}</h2>
            <div
              className={`absolute -bottom-1 left-0 h-0.5 bg-white/80 transition-all duration-300 ease-out ${
                activeSection === section ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></div>
          </a>
        </li>
      ))}
    </ul>
  );
}
