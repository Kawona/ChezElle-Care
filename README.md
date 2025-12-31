## ChezElle Care

Trusted Care. Wherever life takes you.

ChezElle Care is a healthcare support and medical coordination platform designed to simplify access to medical care, travel logistics, and healthcare administration across borders. The platform provides a clear, multilingual, and user-focused experience for individuals and organizations navigating complex care journeys.

## Overview
ChezElle Care operates at the intersection of:

- Healthcare coordination

- International travel support

- Medical administration

- Multilingual and cross-border assistance

The website serves as both an informational platform and an entry point for users to request professional support.

## Key Features
- Multilingual Support
English (EN), French (FR), and Portuguese (PT) with a global language switcher.

- Global Translation Architecture
Centralized translation schema powering navigation, pages, and UI components.

- Responsive & Accessible Design
Optimized for desktop, tablet, and mobile with keyboard and touch accessibility.

- Animated UI with Framer Motion
Subtle motion for page transitions, cards, and navigation interactions.

- Service-Based Navigation
Clear service cards that guide users to detailed service pages.

- Request Support Workflow
Dedicated request-support flow for users seeking assistance.

- SEO & Performance Focused
Built with Next.js App Router best practices.

## Tech Stack
- Framework: Next.js (App Router)

- Language: TypeScript

- Styling: Tailwind CSS

- Animations: Framer Motion

- Icons: Lucide React

- Forms: Formspree

- State Management: React Context (Language Context)

- Images: Next/Image optimization

## Internationalization (i18n)
ChezElle Care uses a custom translation system built on top of React Context.

Supported Languages

- English (EN)

- French (FR)

- Portuguese (PT)

How it works

- All translations live in lib/translations.ts

- LanguageContext controls the active language

- useTranslations() provides typed access to translations

- Language preference is persisted via localStorage

## Design Principles
- Clarity over complexity

- Professional, calm visual tone

- Strong visual affordances for navigation

- Consistent spacing, typography, and color usage

- Accessible interactions across devices

## Future Enhancements
- CMS integration for services and content

- SEO metadata per language

- Analytics and conversion tracking

- Admin dashboard for service requests

- Dark mode (optional)

## Contribution Guidelines
This project follows a clean, structured, and scalable code style.

When contributing:

Use TypeScript strictly

Keep UI components reusable

Centralize all text in translations

Avoid hardcoded strings in UI components

Maintain accessibility standards

## 📄 License

This project is proprietary and maintained for ChezElle Care.
All rights reserved

