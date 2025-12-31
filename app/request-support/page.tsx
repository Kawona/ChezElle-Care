"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function RequestSupportPage() {
  const [state, handleSubmit] = useForm("mdaokdyb");

  if (state.succeeded) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-brand-green">
            Request Submitted
          </h2>
          <p className="mt-4 text-gray-600">
            Thank you for reaching out. Our team will contact you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">
          Request Support
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="
                w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-brand-green
              "
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="
                w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-brand-green
              "
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="
                w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-brand-green
              "
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Type of Support Needed
            </label>
            <select
              name="service"
              required
              className="
                w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-brand-green
              "
            >
              <option value="">Select a service</option>
              <option>Medical Assistance</option>
              <option>Travel & Concierge Support</option>
              <option>Healthcare Administration</option>
              <option>Language & Translation</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Details
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="
                w-full rounded-xl border border-gray-300 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-brand-green
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="
              w-full rounded-xl bg-brand-green text-white py-4 font-medium
              transition-all duration-200
              hover:bg-brand-green/90 hover:scale-[1.02]
              active:scale-[0.97]
              disabled:opacity-60
            "
          >
            {state.submitting ? "Submitting..." : "Submit Request"}
          </button>

        </form>
      </div>
    </section>
  );
}
