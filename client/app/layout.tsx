import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const pixel = Pixelify_Sans({
  subsets : ["latin"],
  variable: "--font-pixel",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}