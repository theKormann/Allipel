'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { Text, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function HeaderSimple() {
  const [showNavItems, setShowNavItems] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 10) {
        setShowNavItems(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setShowNavItems(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-out ${
        showNavItems ? "py-4" : "py-2"
      }`}
    >
      <div className="flex justify-center w-full">
        <div
          className="relative flex items-center justify-between w-full max-w-lg px-6 py-2 text-white rounded-full 
          md:border md:border-neutral-700/50 md:bg-neutral-950/30 md:shadow-md md:shadow-zinc-800/30 
          md:backdrop-blur-xl transition-all duration-300 ease-out"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div
                className="relative transition-all cursor-pointer"
                style={{
                  width: showNavItems ? "80px" : "100px",
                  height: showNavItems ? "50px" : "60px",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Allipel Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Menu desktop */}
          <div
            className={`hidden md:flex flex-1 justify-center transition-opacity duration-300 ${
              showNavItems ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Início
            </Link>
          </div>

          <div
            className={`flex items-center gap-4 transition-opacity duration-300 ${
              showNavItems ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="hidden md:block">
              <a
                href="https://wa.me/5511916400563"
                className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition"
              >
                Contato
              </a>
            </div>

            <div className="md:hidden">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button className="rounded-md border border-neutral-700/50 bg-black p-2">
                    <Text className="size-6 scale-x-[-1] text-white" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="border-neutral-800 bg-neutral-950/80 text-white backdrop-blur-md [&>button]:hidden"
                >
                  <div className="absolute top-6 right-5">
                    <SheetClose asChild>
                      <Button className="rounded-md border border-neutral-700/50 bg-black p-2">
                        <X className="size-6 text-white" />
                      </Button>
                    </SheetClose>
                  </div>

                  <div className="mt-20 flex flex-col px-10 space-y-8">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="font-medium text-white/80 hover:text-white"
                      >
                        Início
                      </Link>
                    </SheetClose>

                    <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

                    <SheetClose asChild>
                      <a
                        href="https://wa.me/5511916400563"
                        className="bg-red-600 hover:bg-red-700 mt-1 rounded-full py-2.5 text-center text-sm font-medium tracking-wide text-white shadow-md transition"
                      >
                        Contato
                      </a>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
