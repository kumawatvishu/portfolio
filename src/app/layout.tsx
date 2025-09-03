import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";
import CustomCursorWrapper from "@/components/CustomCursorWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bhanwar Lal Kumawat - MERN Stack Developer",
  description:
    "MERN Stack Developer specializing in Next.js, React, Node.js and scalable web apps.",
  other: {
    "google-site-verification": "lc6djjnA7d7S2AJWOQb3YBI7eQ-Mt3-DsLklBXUE66M",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.variable} antialiased`}>
        <CustomCursorWrapper /> {/* Client component only */}
        {children}
      </body>
    </html>
  );
}
