"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { text: "GROK", href: "#" },
  { text: "API", href: "#" },
  { text: "DEVELOPER DOCS", href: "#" },
  { text: "NEWS", href: "#" },
  { text: "BLOG", href: "#" },
  { text: "ABOUT", href: "#" },
  { text: "CAREERS", href: "#" },
  { text: "CONTACT", href: "#" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/25 bg-[#0A0A0A]/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M6 6L16 16M16 16L26 6M16 16V26"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
          <span className="text-mono-label text-white">xAI</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.text}
              className="relative"
              onMouseEnter={() => link.text === "GROK" && setActiveDropdown("GROK")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="nav-link inline-block py-2"
              >
                {link.text}
              </Link>
              
              {/* Grok Dropdown */}
              {link.text === "GROK" && activeDropdown === "GROK" && (
                <div className="absolute left-0 top-full mt-2 min-w-[200px] rounded-2xl border border-white/25 bg-[#0A0A0A] p-4 shadow-lg">
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="nav-link block text-sm">
                        FOR EVERYONE
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="nav-link block text-sm">
                        FOR BUSINESS
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="nav-link block text-sm">
                        FOR GOVERNMENT
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="#" className="button-primary hidden sm:block">
          TRY GROK
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white/50 hover:text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
