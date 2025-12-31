"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  /* SCROLL ANIMATION */
  const { scrollY } = useScroll();

  // Header height animation
  const headerHeight = useTransform(scrollY, [0, 80], [76, 64]);

  // Logo size animation
  const logoSize = useTransform(scrollY, [0, 80], [64, 52]);

  // Shadow intensity
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 0 0 rgba(0,0,0,0)",
      "0 4px 16px rgba(0,0,0,0.08)",
    ]
  );

  return (
    <motion.header
      style={{ height: headerHeight, boxShadow }}
      className="
        sticky top-0 z-50
        bg-white/70 backdrop-blur
        border-b border-gray-200
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Container (flexible, safe) */}
          <motion.div
            style={{ height: logoSize }}
            className="relative aspect-square"
          >
            <Image
              src="/images/whitelogo-temp.jpg"
              alt="ChezElle Care Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <span className="text-xl font-semibold text-brand-green whitespace-nowrap">
            ChezElle Care
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-brand-green transition">
            {t.nav.home}
          </Link>
          <Link href="/service" className="hover:text-brand-green transition">
            {t.nav.services}
          </Link>
          <Link href="/about" className="hover:text-brand-green transition">
            {t.nav.about}
          </Link>
          <Link href="/contact" className="hover:text-brand-green transition">
            {t.nav.contact}
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* Language Toggle */}
          <div className="flex items-center gap-1 rounded-xl border border-gray-300 p-1 text-sm">
            {(["EN", "FR", "PT"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  language === lang
                    ? "bg-brand-green text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/request-support"
            className="
              inline-flex items-center rounded-xl
              bg-brand-green px-5 py-2.5
              text-sm font-semibold text-white
              transition hover:bg-brand-green/90
            "
          >
            {t.requestSupport}
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-sm text-gray-700">

              <Link href="/" onClick={() => setOpen(false)}>
                {t.nav.home}
              </Link>
              <Link href="/service" onClick={() => setOpen(false)}>
                {t.nav.services}
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                {t.nav.about}
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </Link>

              {/* Mobile Language */}
              <div className="flex gap-2 pt-4 border-t">
                {(["EN", "FR", "PT"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 text-xs rounded-lg transition ${
                      language === lang
                        ? "bg-brand-green text-white"
                        : "border text-gray-600"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                href="/request-support"
                onClick={() => setOpen(false)}
                className="
                  mt-2 inline-flex justify-center rounded-xl
                  bg-brand-green px-5 py-3
                  text-sm font-semibold text-white
                "
              >
                {t.requestSupport}
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
