import { Logo } from "../components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        text-white min-h-screen 
        bg-black
        md:bg-[url('/background.jpg')] md:bg-cover md:bg-center md:bg-no-repeat md:opacity-80
      "
    >
      {/* Logo */}
      <div
  className="
    pt-1 px-4 flex justify-center
    md:absolute md:top-0 md:left-0 md:mx-8 md:pt-0
  "
>
  <Logo className="w-40 h-40 sm:w-20 sm:h-20 md:w-40 md:h-40" />
</div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center justify-center
    py-2
    sm:py-0
    md:min-h-screen">
        {children}
      </div>
    </div>
  );
}
