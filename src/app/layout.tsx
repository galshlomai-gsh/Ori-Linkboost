import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { QuizProvider } from "@/components/quiz/QuizProvider";
import { QuizModal } from "@/components/quiz/QuizModal";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["500", "800"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "LinkBoost — ניהול בניית קישורים לסוכנויות SEO",
  description:
    "שירות ניהול בניית קישורים איכותיים לסוכנויות קידום אתרים ומקדמים עצמאיים. קישורים אמיתיים, דוחות שקופים, שקט מבניית קישורים.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen bg-[#05070d] font-sans font-medium text-slate-100 antialiased">
        <QuizProvider>
          {children}
          <QuizModal />
        </QuizProvider>
      </body>
    </html>
  );
}
