'use client';

import { useState, useEffect, useRef } from "react";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { Text, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function HeaderMain() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [showNavItems, setShowNavItems] = useState(true);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrolled = currentScrollY > 50;
            setScrolled(isScrolled);

            // Determine scroll direction with threshold
            if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 100) {
                setScrollDirection("down");
                setShowNavItems(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setScrollDirection("up");
                setShowNavItems(true);
            }

            lastScrollY.current = currentScrollY;

            // Active section detection
            const sections = ["home", "about", "services", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top <= 100 && rect.bottom >= 100;
                    if (isVisible) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            // Reset to full header if at top
            if (currentScrollY <= 0) {
                setShowNavItems(true);
            }

            // Clear any existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed z-50 w-full transition-all duration-300 ease-out top-0
                ${showNavItems ? "py-4" : "py-2"}`}
        >
            <div className="flex justify-center w-full">
                <div
                    className={`relative flex items-center justify-between transition-all duration-300 ease-out text-white rounded-full
                        md:border md:border-neutral-700/50 md:bg-neutral-950/30 
                        md:shadow-md md:shadow-zinc-800/30 md:backdrop-blur-xl 
                        px-6 py-2 w-full max-w-lg`} 
                >
                    {/* Logo container - centralizado quando nav items estão ocultos */}
                    <div className={`flex-shrink-0 transition-all duration-300 ease-out ${
                        !showNavItems ? "absolute left-1/2 transform -translate-x-1/2" : ""
                    }`}>
                        <div
                            className="relative transition-all duration-300 ease-out"
                            style={{
                                width: !showNavItems ? "100px" : "80px",
                                height: !showNavItems ? "60px" : "50px",
                            }}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Allipel Logo"
                                fill
                                className="object-contain transition-all duration-300 ease-out"
                                priority
                            />
                        </div>
                    </div>

                    <div
                        className={`flex-1 flex items-center justify-end gap-4 transition-all duration-300 ease-out 
                            ${showNavItems ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                        <div className="hidden md:flex items-center gap-4">
                            <NavBar
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                            />
                        </div>

                        <div className="hidden md:block">
                            <a
                                href="#contact"
                                className="bg-base rounded-full px-3 py-2 text-sm font-medium tracking-wide text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
                            >
                                Solicitar
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

                                    <div className="mt-30 flex flex-col px-10 space-y-8">
                                        {["home", "about", "services", "contact"].map((section) => (
                                            <SheetClose asChild key={section}>
                                                <a
                                                    href={`#${section}`}
                                                    className={`font-medium ${activeSection === section ? "text-base" : "text-white"
                                                        }`}
                                                    onClick={() => setActiveSection(section)}
                                                >
                                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                                </a>
                                            </SheetClose>
                                        ))}

                                        <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

                                        <SheetClose asChild>
                                            <a
                                                href="#contact"
                                                className="bg-base mt-1 rounded-full py-2.5 text-center text-sm font-medium tracking-wide text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
                                            >
                                                Solicitar
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