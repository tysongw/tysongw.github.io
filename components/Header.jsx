"use client";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      {/* 左侧品牌 */}
      <Link
        href="/"
        className="text-sm font-bold tracking-wide bg-gradient-to-br from-blue-800 to-sky-700 bg-clip-text text-transparent"
        onClick={closeMenu}
      >
        岸上歌
      </Link>

      {/* 桌面端导航（md及以上显示） */}
      <nav className="hidden gap-6 text-sm md:flex">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "text-white" : "text-white/80 hover:text-white"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* 移动端汉堡按钮（md以下显示） */}
      <button
        aria-label="Open menu"
        className="md:hidden rounded-md border border-white/20 px-2 py-1 text-white/90 hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
      >
        {/* 简单汉堡图标 */}
        <span className="block h-0.5 w-5 bg-white mb-1" />
        <span className="block h-0.5 w-5 bg-white mb-1" />
        <span className="block h-0.5 w-5 bg-white" />
      </button>

      {/* 移动端抽屉菜单 */}
      {open && (
        <div className="absolute right-5 top-14 w-48 rounded-xl border border-white/15 bg-black/80 backdrop-blur p-2 md:hidden">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={
                  "block rounded-md px-3 py-2 text-sm " +
                  (active
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
