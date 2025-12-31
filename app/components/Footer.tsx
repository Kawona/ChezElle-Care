"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/whitelogo-temp.jpg"
                alt="ChezElle Care Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="text-lg font-semibold text-brand-green">
                ChezElle Care
              </span>
            </div>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/">{t.nav.home}</Link></li>
              <li><Link href="/about">{t.nav.about}</Link></li>
              <li><Link href="/service">{t.nav.services}</Link></li>
              <li><Link href="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>{t.services.medical.title}</li>
              <li>{t.services.travel.title}</li>
              <li>{t.services.administration.title}</li>
              <li>{t.services.language.title}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} ChezElle Care. {t.footer.rights}
          </span>
          <span className="mt-2 md:mt-0">
            {t.footer.tagline}
          </span>
        </div>

      </div>
    </footer>
  );
}
