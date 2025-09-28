"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      
      <Link
        href="/"
        className="text-sm font-bold tracking-wide bg-gradient-to-br from-blue-800 to-sky-700 bg-clip-text text-transparent"
      >
        岸上歌
      </Link>

      
      <nav className="hidden gap-6 text-sm md:flex">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
