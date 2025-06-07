import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonPrimaryProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function ButtonPrimary({ href, onClick, children }: ButtonPrimaryProps) {
  const Component = href ? "a" : "button";

  return (
    <Button
      asChild
      className="bg-base hover:bg-base group z-10 mt-2 cursor-pointer rounded-full px-1.5 py-4 pl-3 opacity-90 shadow-xl transition-opacity duration-300 hover:opacity-100 sm:mt-4 sm:px-2 sm:py-6 sm:pl-4.5"
    >
      <Component
        {...(href ? { href } : { onClick })}
        className="flex items-center gap-2 text-lg font-medium tracking-wide text-white sm:gap-4"
      >
        {children}
        <div className="rounded-full bg-zinc-950 p-1.5 sm:p-2">
          <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:rotate-90 sm:size-4" />
        </div>
      </Component>
    </Button>
  );
}
