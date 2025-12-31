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

  const { scrollY } = useScroll();

  // Disable scroll animation when menu is open
  const headerHeight = useTransform(
    scrollY,
    [0, 80],
    open ? [76, 76] : [76, 64]
  );

  const logoSize = useTransform(
    scrollY,
    [0, 80],
    open ? [64, 64] : [64, 52]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 0 0 rgba(0,0,0,0)",
      "0 4px 16px rgba(0,0,0,0.08)",
    ]
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        style={{ height: headerHeight, boxShadow }}
        className="
          sticky top-0 z-50
          bg-white/80 backdrop-blur
          border-b border-gray-200
          flex items-center
        "
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              style={{ height: logoSize }}
              className="relative aspect-square"
            >
              <Image
                src="/images/whitelogo.jpg"
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
            <Link href="/">{t.nav.home}</Link>
            <Link href="/service">{t.nav.services}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-xl border border-gray-300 p-1 text-sm">
              {(["EN", "FR", "PT"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-lg ${
                    language === lang
                      ? "bg-brand-green text-white"
                      : "text-gray-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              href="/request-support"
              className="rounded-xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.requestSupport}
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex items-center justify-between px-6 h-[76px] border-b">
              <span className="text-lg font-semibold text-brand-green">
                ChezElle Care
              </span>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setOpen(false)}>{t.nav.home}</Link>
              <Link href="/service" onClick={() => setOpen(false)}>{t.nav.services}</Link>
              <Link href="/about" onClick={() => setOpen(false)}>{t.nav.about}</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>{t.nav.contact}</Link>

              <div className="flex gap-2 pt-6 border-t">
                {(["EN", "FR", "PT"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      language === lang
                        ? "bg-brand-green text-white"
                        : "border"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <Link
                href="/request-support"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-brand-green py-3 text-center font-semibold text-white"
              >
                {t.requestSupport}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
