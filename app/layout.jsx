import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import { Toaster } from 'sonner'; // ✅ add this

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: 'My Portfolio',
  description: 'Developed by Harvey Varela',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        
        {/* Animate page transitions */}
        <PageTransition>
          <main className="relative z-10">{children}</main>
        </PageTransition>

        {/* Toast notifications */}
        <Toaster richColors position="top-right" /> {/* ✅ added */}

        {/* Analytics tools */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
