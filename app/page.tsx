"use client";

import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="
          relative h-[70vh] sm:h-[75vh] overflow-hidden
          left-1/2 right-1/2
          -ml-[50vw] -mr-[50vw]
          w-screen
        "
      >
        <Image
          src="/images/homepage-temp.png"
          alt="Healthcare and travel support"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 10%" }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-5xl font-bold max-w-xl sm:max-w-3xl mx-auto"
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-4 sm:mt-6 text-base sm:text-lg max-w-md sm:max-w-2xl mx-auto text-white/90"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-10"
            >
              <a
                href="/request-support"
                className="
                  inline-block rounded-xl bg-brand-green px-8 py-4 font-medium
                  transition-all duration-200
                  hover:bg-brand-green/90 hover:scale-[1.03]
                  active:scale-[0.97]
                "
              >
                {t.requestSupport}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <main className="flex flex-col gap-16 sm:gap-20 bg-white">

        {/* WHAT WE DO */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-16 sm:py-24 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">
              {t.whatWeDo}
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              {t.whatWeDoDescription}
            </p>
          </div>
        </motion.section>

        {/* SERVICES GRID */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 bg-brand-green/5"
        >
          <ServicesGrid />
        </motion.section>

        {/* WHY CHOOSE US */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-28 bg-gradient-to-b from-gray-50 to-white"
        >
          <WhyChooseUs />
        </motion.section>

        {/* FINAL CTA */}
        <section className="relative py-16">
          <Image
            src="/images/traveling-temp.jpg"
            alt="Support and guidance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-7xl mx-auto px-6 text-center text-white"
          >
            <h2 className="text-3xl font-semibold">
              {t.ctaTitle}
            </h2>

            <p className="mt-6 text-lg max-w-2xl mx-auto text-white/90">
              {t.ctaDescription}
            </p>

            <div className="mt-10">
              <a
                href="/request-support"
                className="
                  inline-block rounded-xl bg-brand-green px-8 py-4 font-medium
                  transition-all duration-200
                  hover:bg-brand-green/90 hover:scale-[1.03]
                  active:scale-[0.97]
                "
              >
                {t.requestSupport}
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
