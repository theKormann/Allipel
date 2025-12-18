import { footerNav } from "@/data/footer-nav";

type FooterNavItem = {
  title: string;
  links: { label: string; href: string }[];
};

export function FooterNav() {
  return (
    <div className="grid grid-cols-2 gap-8 px-4 py-8 sm:px-6 sm:py-12 md:grid-cols-4 md:px-10 md:py-16">
      {footerNav.map((item: FooterNavItem) => (
        <div key={item.title}>
          <h2 className="mb-3 text-sm font-medium tracking-wide sm:mb-5">
            {item.title}
          </h2>
          <ul className="space-y-2">
            {item.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-medium tracking-wide text-neutral-400 transition-colors duration-300 hover:text-white sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
