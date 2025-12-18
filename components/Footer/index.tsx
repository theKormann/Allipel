import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FooterSocial } from "@/components/ui/FooterSocial";
import { FooterNav } from "@/components/ui/FooterNav";

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 py-5 text-white sm:px-6 md:px-12 lg:px-32">
      <div className="rounded-2xl border border-neutral-800/50">
        <div className="mx-auto max-w-6xl pt-4 md:pt-10">
          <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 sm:py-8">
            <div>
              <a href="#home">
                <Image src="/images/logo.png" alt="Logo" width={120} height={60} />
              </a>
            </div>
            <FooterSocial />
          </div>
          <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />
          <FooterNav />
          <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />
          <h2 className="px-4 py-6 text-center text-xs font-medium text-neutral-500 sm:text-sm md:py-12">
            © 2025{" "}
            <span className="transition-colors duration-300 hover:text-white/90">
              Allipel
            </span>
            . Todos os direitos reservados.
          </h2>
        </div>
      </div>
    </footer>
  );
}
