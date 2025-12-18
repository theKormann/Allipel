'use client';

import Image from 'next/image';

interface IconProps {
  name: keyof typeof iconsMap;
  alt?: string;
  className?: string;
}

const iconsMap = {
  github: "/images/icons/github.svg",
  x: "/images/icons/x.svg",
  tiktok: "/images/icons/tiktok.svg",
  youtube: "/images/icons/youtube.svg",
  instagram: "/images/icons/instagram.svg",
  nubank: "/images/icons/nubank.svg",
  microsoft: "/images/icons/microsoft.svg",
  playstation: "/images/icons/playstation.svg",
  uber: "/images/icons/uber.svg",
  amazon: "/images/icons/amazon.svg",
  whatsapp: "/images/icons/whatsapp.svg",
  mail: "/images/icons/mail.svg",
} as const;

export const Icons = ({
  name,
  alt = `${name} logo`,
  className = "",
}: IconProps) => {
  const src = iconsMap[name];

  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={`invert transition-opacity duration-300 hover:opacity-90 ${className}`}
    />
  );
};
