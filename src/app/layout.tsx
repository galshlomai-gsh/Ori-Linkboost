import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "LinkBoost — ניהול בניית קישורים לסוכנויות SEO",
  description:
    "שירות ניהול בניית קישורים איכותיים לסוכנויות קידום אתרים ומקדמים עצמאיים. קישורים אמיתיים, דוחות שקופים, שקט תעשייתי.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen bg-[#05070d] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
