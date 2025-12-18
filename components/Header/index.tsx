'use client';

import { useState, useEffect, useRef } from "react";
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
    const [, setScrolled] = useState(false);
    const [, setScrollDirection] = useState<"up" | "down" | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [showNavItems, setShowNavItems] = useState(true);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const sectionLabels: Record<string, string> = {
        home: "Início",
        about: "Sobre",
        services: "Serviços",
        location: "Localização",
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrolled = currentScrollY > 50;
            setScrolled(isScrolled);

            if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 100) {
                setScrollDirection("down");
                setShowNavItems(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setScrollDirection("up");
                setShowNavItems(true);
            }

            lastScrollY.current = currentScrollY;

            const sections = ["home", "about", "services", "location"];
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

            if (currentScrollY <= 0) {
                setShowNavItems(true);
            }

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
                            <a href="#">
                                <Image
                                    src="/images/logo.png"
                                    alt="Allipel Logo"
                                    fill
                                    className="object-contain transition-all duration-300 ease-out"
                                    priority
                                />
                            </a>
                        </div>
                    </div>

                    <div
                        className={`flex-1 flex items-center justify-end gap-4 transition-all duration-300 ease-out 
                            ${showNavItems ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >

                        <div className="hidden md:flex items-center gap-4">
                            {["home", "about", "services", "location"].map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`text-sm font-medium transition-opacity duration-300 hover:opacity-100 ${
                                        activeSection === section ? "text-base" : "text-white opacity-70"
                                    }`}
                                    onClick={() => setActiveSection(section)}
                                >
                                    {sectionLabels[section]}
                                </a>
                            ))}
                        </div>


                        <div className="hidden md:block">
                            <a
                                href="https://wa.me/5511916400563"
                                className="bg-red-600 hover:bg-red-700 rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-md transition-colors duration-300"
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

                                    <div className="mt-30 flex flex-col px-10 space-y-8">
                                        {["home", "about", "services", "location"].map((section) => (
                                            <SheetClose asChild key={section}>
                                                <a
                                                    href={`#${section}`}
                                                    className={`font-medium ${
                                                        activeSection === section ? "text-base" : "text-white"
                                                    }`}
                                                    onClick={() => setActiveSection(section)}
                                                >
                                                    {sectionLabels[section]}
                                                </a>
                                            </SheetClose>
                                        ))}

                                        <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

                                        <SheetClose asChild>
                                            <a
                                                href="https://wa.me/5511916400563"
                                                className="bg-red-600 hover:bg-red-700 mt-1 rounded-full py-2.5 text-center text-sm font-medium tracking-wide text-white shadow-md transition-colors duration-300"
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
