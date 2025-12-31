import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "ChezElle Care",
    description: "Trusted Care. Wherever life takes you.",
};

export default function RootLayout({
    children,
}: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col bg-white text-gray-900">
                <LanguageProvider>
                <Header />
                    {children}
                <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}