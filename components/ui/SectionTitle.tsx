interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h1
      className={`px-3 text-center text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
}


