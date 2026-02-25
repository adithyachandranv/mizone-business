import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiZone Business Hand-Holding Programme",
  description:
    "Professional support, institutional credibility and strategic guidance — everything a growing business needs. MiZone · Kannur, Kerala. India's First PPP Incubator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}