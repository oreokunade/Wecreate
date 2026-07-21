import type { Metadata } from "next";
import "@fontsource/mona-sans/400.css";
import "@fontsource/mona-sans/500.css";
import "@fontsource/mona-sans/600.css";
import "@fontsource/mona-sans/700.css";
import "@fontsource/mona-sans/800.css";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Wecreate Consult | Investment Readiness, Fundraising and Grants",
  description:
    "Over ₦550 million in funding facilitated. Abuja-based firm building the valuations, decks, grant proposals and growth plans that get African startups and NGOs funded.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <SmoothScrolling>
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
        <CookieBanner />
      </body>
    </html>
  );
}
