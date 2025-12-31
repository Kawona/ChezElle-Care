"use client";

import {
  Globe,
  Plane,
  Languages,
  BriefcaseMedical,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function ServicesPage() {
  const t = useTranslations();

  const services = [
    {
      title: t.services.medical.title,
      description: t.services.medical.description,
      slug: "international-medical-assistance",
      icon: Globe,
    },
    {
      title: t.services.travel.title,
      description: t.services.travel.description,
      slug: "concierge-travel-support",
      icon: Plane,
    },
    {
      title: t.services.language.title,
      description: t.services.language.description,
      slug: "language-translation",
      icon: Languages,
    },
    {
      title: t.services.administration.title,
      description: t.services.administration.description,
      slug: "healthcare-administration",
      icon: BriefcaseMedical,
    },
    {
      title: t.services.local.title,
      description: t.services.local.description,
      slug: "local-guidance",
      icon: MapPin,
    },
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-20">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative h-[65vh] sm:h-[75vh] lg:h-[80vh]
          overflow-hidden
          left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          w-screen
        "
      >
        <Image
          src="/images/family.png"
          alt={t.about.heroAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 10%" }}
        />
      </motion.section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <Link
                    href={`/service/${service.slug}`}
                    className="group block h-full focus:outline-none"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div
                      className="
                        h-full rounded-3xl border border-gray-200
                        bg-[#B8962E]/30 p-8
                        shadow-sm transition-all duration-300

                        group-hover:bg-[#B8962E]/50
                        group-hover:border-brand-green
                        group-hover:shadow-lg

                        group-active:bg-[#B8962E]/60
                        group-active:scale-[0.98]

                        group-focus-visible:ring-2
                        group-focus-visible:ring-brand-green
                      "
                    >
                      {/* Icon */}
                      <div
                        className="
                          mb-6 flex h-12 w-12 items-center justify-center
                          rounded-xl bg-brand-green/10
                          transition-colors
                          group-hover:bg-brand-green/20
                        "
                      >
                        <Icon className="h-6 w-6 text-brand-green" />
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          text-xl font-semibold text-gray-900
                          transition-colors
                          group-hover:text-brand-green
                        "
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA Hint */}
                      <div
                        className="
                          mt-6 inline-flex items-center gap-2
                          text-sm font-medium text-brand-green
                          opacity-0 translate-x-1
                          transition-all duration-300

                          group-hover:opacity-100
                          group-hover:translate-x-0
                          group-active:opacity-100
                        "
                      >
                        Learn more →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold max-w-2xl">
            {t.ctaTitle}
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl">
            {t.ctaDescription}
          </p>

          <div className="mt-10">
            <Link
              href="/request-support"
              className="
                inline-block rounded-xl bg-brand-green
                text-white px-8 py-4 font-medium
                transition hover:bg-brand-green/90
              "
            >
              {t.requestSupport}
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
