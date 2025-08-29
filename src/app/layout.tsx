import CustomCursor from "@/components/CustomCursor";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, medium, bold
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Bhanwar Kumawat Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
