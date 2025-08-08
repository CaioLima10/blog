import { Poppins } from "next/font/google";

import "@/app/globals.css";
import { Container } from "@/components/container";
import { Header } from "@/components/content/header";
import { Metadata } from "next";
import { Footer } from "@/components/content/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Ignum Blog",
    template: "%s | Ignum Blog",
  },
  description: "Artigos sobre programação, tecnologia e novidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={poppins.className}>
      <body className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
