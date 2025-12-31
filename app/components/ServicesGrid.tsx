"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function ServicesGrid() {
  const t = useTranslations();

  const services = [
    {
      title: t.services.medical.title,
      description: t.services.medical.description,
      image: "/images/MedicalAssistance.png",
    },
    {
      title: t.services.travel.title,
      description: t.services.travel.description,
      image: "/images/Travel.jpg",
    },
    {
      title: t.services.language.title,
      description: t.services.language.description,
      image: "/images/language.png",
    },
    {
      title: t.services.administration.title,
      description: t.services.administration.description,
      image: "/images/administration.jpeg",
    },
    {
      title: t.services.local.title,
      description: t.services.local.description,
      image: "/images/localSupport.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-brand-green mb-12">
        {t.servicesTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
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
            className="
              bg-white rounded-2xl overflow-hidden
              border border-gray-200 shadow-sm
              transition-all duration-300
              hover:shadow-lg
            "
          >
            {/* IMAGE */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
