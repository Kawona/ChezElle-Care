"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactPage() {
  const t = useTranslations();

  const contactOptions = [
    {
      title: t.contact.general.title,
      description: t.contact.general.description,
      email: "info@chezellecare.com",
    },
    {
      title: t.contact.support.title,
      description: t.contact.support.description,
      email: "support@chezellecare.com",
    },
    {
      title: t.contact.partnerships.title,
      description: t.contact.partnerships.description,
      email: "partnerships@chezellecare.com",
    },
  ];

  return (
    <div className="flex flex-col gap-24">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-[55vh] min-h-[700px] w-full overflow-hidden"
      >
        <Image
          src="/images/contact-temp.png"
          alt={t.contact.heroAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-50">
              {t.contact.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-50">
              {t.contact.heroDescription}
            </p>
          </div>
        </div>
      </motion.section>

      {/* CONTACT OPTIONS */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactOptions.map((item, index) => (
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
                className="bg-[#B8962E]/40 rounded-2xl border border-gray-200 p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-50 leading-relaxed">
                  {item.description}
                </p>

                <p className="mt-4 font-medium text-brand-green">
                  {item.email}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 bg-brand-green/5"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            {t.contact.formTitle}
          </h2>

          <ContactForm />
        </div>
      </motion.section>

      {/*  REASSURANCE */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pb-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contact.reassurance}
          </p>
        </div>
      </motion.section>

    </div>
  );
}

/* CONTACT FORM */

function ContactForm() {
  const t = useTranslations();
  const [state, handleSubmit] = useForm("mdaokdyb");

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-2xl border p-10 text-center shadow-sm">
        <h3 className="text-2xl font-semibold text-brand-green">
          {t.contact.successTitle}
        </h3>
        <p className="mt-4 text-gray-600">
          {t.contact.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.contact.form.name}
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand-green"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.contact.form.email}
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand-green"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t.contact.form.message}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand-green"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-xl bg-brand-green text-white py-3 font-medium transition hover:bg-brand-green/90 disabled:opacity-60"
      >
        {state.submitting ? t.contact.form.sending : t.contact.form.submit}
      </button>
    </form>
  );
}
