"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-container mx-auto flex h-16 items-center justify-between px-6">
          <Link
            href="/"
            className="text-sm font-medium text-text-primary tracking-tight"
          >
            Carlos León
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={handleClose} />
    </>
  );
}
