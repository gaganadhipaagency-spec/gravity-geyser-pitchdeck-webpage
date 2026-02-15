import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gravity Geyser - Licensed Gravity-Based Water Heating Architecture",
  description: "Official engineering platform for Gravity Geyser technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
