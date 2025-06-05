
interface SectionDescriptionProps {
  children: React.ReactNode;
}

export function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <p className="mx-auto max-w-full px-4 text-center text-sm tracking-wide text-neutral-400 sm:max-w-3xl sm:px-6 sm:text-sm md:text-lg">
      {children}
    </p>
  );
}
