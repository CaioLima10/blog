import { Poppins } from "next/font/google";

import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={poppins.className}>
      <body className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
