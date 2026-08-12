import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vixvify | Full Stack Developer",
  description: "Portfolio of vixvify, a Full Stack Developer studying Applied Computer Science at KMUTT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-full bg-[#080909] font-sans text-white antialiased">{children}</body>
    </html>
  );
}
