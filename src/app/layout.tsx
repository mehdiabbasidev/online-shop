import type { Metadata } from "next";
import "./globals.css";
import { iranSans , inter } from "@/configs/fonts";

export const metadata: Metadata = {
  title: "فروشگاه درسمن",
  description: "بهترین فروشگاه آنلاین ایران",
  keywords:"",
  icons:"/images/logo/favicon.ico",
  robots:"noindex, nofollow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa"  className={`${iranSans.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
          {children}
      </body>
    </html>
  );
}
