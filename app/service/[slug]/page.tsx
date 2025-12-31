import { notFound } from "next/navigation";
import {
  Globe,
  Plane,
  Languages,
  BriefcaseMedical,
  MapPin,
} from "lucide-react";

const services = [
  {
    title: "International Medical Assistance & Medical Tourism",
    slug: "international-medical-assistance",
    description:
      "We support individuals seeking medical care abroad by coordinating travel, medical transfers, referrals, treatment arrangements, and continuity of care across borders.",
    icon: Globe,
  },
  {
    title: "Concierge & Travel Support",
    slug: "concierge-travel-support",
    description:
      "Our team manages all non-medical logistics, including airport transfers, accommodation arrangements, and on-ground coordination to ensure a smooth experience.",
    icon: Plane,
  },
  {
    title: "Language & Translation Services",
    slug: "language-translation",
    description:
      "We provide professional language support in English, French, and Portuguese, ensuring accurate communication in medical, travel, and administrative settings.",
    icon: Languages,
  },
  {
    title: "Healthcare Administration & Private Management",
    slug: "healthcare-administration",
    description:
      "ChezElle Care offers operational and administrative support for healthcare providers, including revenue cycle assistance, case coordination, and project management.",
    icon: BriefcaseMedical,
  },
  {
    title: "Local Guidance & On-Ground Support",
    slug: "local-guidance",
    description:
      "We provide trusted local insight, cultural orientation, and ongoing support to help clients navigate new environments confidently and safely.",
    icon: MapPin,
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      {/* Service Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10">
            <Icon className="h-7 w-7 text-brand-green" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            {service.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {service.description}
          </p>
        </div>
      </section>

      {/* Supporting Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700">
          <p>
            Our team works closely with clients to ensure each service is
            delivered with professionalism, discretion, and care.
          </p>

          <p>
            Whether coordinating international medical care, managing
            healthcare operations, or providing on-ground support, ChezElle
            Care prioritizes clarity, reliability, and continuity.
          </p>
        </div>
      </section>
    </div>
  );
}
