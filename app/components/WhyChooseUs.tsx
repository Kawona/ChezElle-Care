"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function WhyChooseUs() {
  const t = useTranslations();

  const reasons = [
    {
      title: t.whyChooseUs.expertise.title,
      description: t.whyChooseUs.expertise.description,
    },
    {
      title: t.whyChooseUs.human.title,
      description: t.whyChooseUs.human.description,
    },
    {
      title: t.whyChooseUs.reliable.title,
      description: t.whyChooseUs.reliable.description,
    },
    {
      title: t.whyChooseUs.multilingual.title,
      description: t.whyChooseUs.multilingual.description,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center text-brand-green">
          {t.whyChooseUsTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                relative bg-white rounded-2xl border border-gray-200 p-8
                transition-all duration-300 shadow-sm
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-brand-green" />

              {/* Accent dot */}
              <div className="mb-6 h-10 w-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-brand-gold" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
