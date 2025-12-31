"use client";

import Image from "next/image";
import { ShieldCheck, Globe, HeartHandshake, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function AboutPage() {
  const t = useTranslations();

  const approachItems = [
    {
      title: t.about.approach.clientCentered.title,
      description: t.about.approach.clientCentered.description,
      icon: HeartHandshake,
    },
    {
      title: t.about.approach.structured.title,
      description: t.about.approach.structured.description,
      icon: Layers,
    },
    {
      title: t.about.approach.crossBorder.title,
      description: t.about.approach.crossBorder.description,
      icon: Globe,
    },
    {
      title: t.about.approach.ethical.title,
      description: t.about.approach.ethical.description,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-20">

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative h-[55vh] sm:h-[65vh] lg:h-[70vh]
          overflow-hidden
          left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          w-screen
        "
      >
        <Image
          src="/images/about.png"
          alt={t.about.heroAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />

        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-5xl px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-50">
              {t.about.heroTitle}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
              {t.about.heroDescription}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-2">
          <h2 className="text-3xl font-semibold text-gray-900">
            {t.about.whoWeAreTitle}
          </h2>

          <div className="space-y-6 text-gray-700">
            <p>{t.about.whoWeAreParagraph1}</p>
            <p>{t.about.whoWeAreParagraph2}</p>
          </div>
        </div>
      </motion.section>

      {/* Our Approach */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            {t.about.approachTitle}
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {approachItems.map((item, index) => {
              const Icon = item.icon;

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
                  className="rounded-3xl border border-gray-200 bg-[#B8962E]/40 p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                    <Icon className="h-6 w-6 text-brand-green" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

    </div>
  );
}
