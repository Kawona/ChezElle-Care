export type Language = "EN" | "FR" | "PT";

/* SCHEMA */

export interface TranslationSchema {
  heroTitle: string;
  heroSubtitle: string;
  requestSupport: string;

  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };

  footer: {
    company: string;
    description: string;
    rights: string;
    tagline: string;
  };

  whatWeDo: string;
  whatWeDoDescription: string;

  servicesTitle: string;
  services: {
    medical: { title: string; description: string };
    travel: { title: string; description: string };
    language: { title: string; description: string };
    administration: { title: string; description: string };
    local: { title: string; description: string };
  };

  ctaTitle: string;
  ctaDescription: string;

  whyChooseUsTitle: string;
  whyChooseUs: {
    expertise: { title: string; description: string };
    human: { title: string; description: string };
    reliable: { title: string; description: string };
    multilingual: { title: string; description: string };
  };

  about: {
    heroTitle: string;
    heroDescription: string;
    heroAlt: string;

    whoWeAreTitle: string;
    whoWeAreParagraph1: string;
    whoWeAreParagraph2: string;

    approachTitle: string;
    approach: {
      clientCentered: { title: string; description: string };
      structured: { title: string; description: string };
      crossBorder: { title: string; description: string };
      ethical: { title: string; description: string };
    };
  };

  contact: {
    heroTitle: string;
    heroDescription: string;
    heroAlt: string;

    general: { title: string; description: string };
    support: { title: string; description: string };
    partnerships: { title: string; description: string };

    formTitle: string;
    reassurance: string;

    successTitle: string;
    successMessage: string;

    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
    };
  };

  requestService: {
    heroTitle: string;
    heroDescription: string;

    formTitle: string;
    description: string;

    successTitle: string;
    successMessage: string;

    form: {
      fullName: string;
      email: string;
      phone: string;
      serviceType: string;
      country: string;
      message: string;
      submit: string;
      submitting: string;
    };
  };
}

/*  BASE EN  */

const EN_TRANSLATIONS: TranslationSchema = {
  heroTitle: "Care that moves with you",
  heroSubtitle:
    "ChezElle Care delivers coordinated medical, travel, and healthcare support for individuals and organizations navigating care across borders with clarity and confidence.",
  requestSupport: "Request Support",

  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
  },

  footer: {
    company: "Company",
    description:
      "ChezElle Care provides coordinated medical, travel, and healthcare support for individuals and organizations navigating care journeys across borders.",
    rights: "All rights reserved.",
    tagline: "Trusted Care. Wherever life takes you.",
  },

  whatWeDo: "What We Do",
  whatWeDoDescription:
    "We coordinate medical care, travel logistics, and healthcare administration for individuals and organizations navigating complex care journeys across borders.",

  servicesTitle: "Our Services",
  services: {
    medical: {
      title: "International Medical Assistance",
      description:
        "End-to-end coordination for medical care abroad, including travel support, treatment coordination, and repatriation.",
    },
    travel: {
      title: "Concierge & Travel Support",
      description:
        "Seamless logistics covering airport transfers, accommodation arrangements, and on-ground coordination.",
    },
    language: {
      title: "Language & Translation Services",
      description:
        "Professional support in English, French, and Portuguese to ensure clear communication.",
    },
    administration: {
      title: "Healthcare Administration",
      description:
        "Operational and administrative support for healthcare providers and organizations.",
    },
    local: {
      title: "Local Guidance & On-Ground Support",
      description:
        "Trusted local insight to help clients navigate unfamiliar environments.",
    },
  },

  ctaTitle: "Ready to get the support you need?",
  ctaDescription:
    "Whether you require medical assistance, travel coordination, or healthcare administration support, our team is here to guide you with professionalism and care.",

  whyChooseUsTitle: "Why Choose ChezElle Care",
  whyChooseUs: {
    expertise: {
      title: "Cross-Border Expertise",
      description:
        "We specialize in supporting individuals and organizations navigating care across countries and systems.",
    },
    human: {
      title: "Human-Centered Care",
      description:
        "Every service we provide is designed around people, ensuring empathy and dignity at every stage.",
    },
    reliable: {
      title: "Reliable Coordination",
      description:
        "From planning to execution, we manage complex logistics with precision and clarity.",
    },
    multilingual: {
      title: "Multilingual & Cultural Understanding",
      description:
        "We communicate fluently across languages and cultures, removing barriers in sensitive situations.",
    },
  },

  about: {
    heroTitle: "About ChezElle Care",
    heroDescription:
      "ChezElle Care is a healthcare support and medical coordination organization focused on simplifying access to care, travel, and healthcare operations across borders.",
    heroAlt: "ChezElle Care healthcare coordination team",

    whoWeAreTitle: "Who We Are",
    whoWeAreParagraph1:
      "We operate at the intersection of healthcare, travel, and administration.",
    whoWeAreParagraph2:
      "Our role is to serve as a trusted partner ensuring continuity of care with professionalism and discretion.",

    approachTitle: "Our Approach",
    approach: {
      clientCentered: {
        title: "Client-Centered",
        description: "Each engagement is shaped by client-specific needs.",
      },
      structured: {
        title: "Structured Coordination",
        description:
          "We manage healthcare and travel processes with clarity and accountability.",
      },
      crossBorder: {
        title: "Cross-Border Expertise",
        description:
          "Designed to operate seamlessly across countries and systems.",
      },
      ethical: {
        title: "Ethical & Discreet",
        description:
          "Confidentiality, professionalism, and ethics guide our work.",
        },
      },
    },

  contact: {
    heroTitle: "Get in Touch",
    heroDescription:
      "Whether you have questions or need assistance, our team is ready to listen.",
    heroAlt: "Contact ChezElle Care",

    general: {
      title: "General Enquiries",
      description:
        "Reach out for general questions about our services and operations.",
    },
    support: {
      title: "Support Requests",
      description:
        "Need immediate assistance with care coordination? We are here to help.",
    },
    partnerships: {
      title: "Partnerships",
      description:
        "Interested in collaborating or partnering with ChezElle Care?",
    },

    formTitle: "Send Us a Message",
    reassurance:
      "Your information is handled with care and confidentiality. Our team will respond promptly.",

    successTitle: "Message Sent Successfully",
    successMessage:
      "Thank you for reaching out. Our team will get back to you shortly.",

    form: {
      name: "Full Name",
      email: "Email Address",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
    },
  },

  requestService: {
    heroTitle: "Request Support",
    heroDescription:
      "Submit a support request and our team will guide you through the next steps.",

    formTitle: "Support Request Form",
    description:
      "Please provide the necessary details so we can assist you efficiently.",

    successTitle: "Request Submitted",
    successMessage:
      "Your support request has been received. Our team will contact you shortly.",

    form: {
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      serviceType: "Type of Service",
      country: "Country",
      message: "Additional Information",
      submit: "Submit Request",
      submitting: "Submitting...",
    },
  },
};

/* EXPORT */

export const translations: Record<Language, TranslationSchema> = {
  EN: EN_TRANSLATIONS,

  FR: {
    ...EN_TRANSLATIONS,
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
    },
    footer: {
      company: "Entreprise",
      description:
        "ChezElle Care fournit un accompagnement médical et sanitaire coordonné.",
      rights: "Tous droits réservés.",
      tagline: "Des soins de confiance. Où que la vie vous mène.",
    },
  },

  PT: {
    ...EN_TRANSLATIONS,
    nav: {
      home: "Início",
      services: "Serviços",
      about: "Sobre",
      contact: "Contato",
    },
    footer: {
      company: "Empresa",
      description:
        "A ChezElle Care oferece apoio médico e de saúde coordenado.",
      rights: "Todos os direitos reservados.",
      tagline: "Cuidado confiável. Onde quer que a vida leve você.",
    },
  },
};
