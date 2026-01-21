"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navRef.current.offsetHeight}px`,
        );
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-[var(--background)] shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src={logo}
            alt="Neesh Enterprise Strategies logo"
            className="h-14 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-full bg-slate-900 transition ${
                isOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-slate-900 transition ${
                isOpen ? "opacity-0" : "top-1.5"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-slate-900 transition ${
                isOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-t border-slate-100 bg-[var(--background)] transition-all duration-300`}
      >
        <div className="space-y-2 px-4 py-3 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-md px-3 py-2 transition hover:bg-slate-50 hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
