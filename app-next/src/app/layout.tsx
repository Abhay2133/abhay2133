import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src:"./fonts/Montserrat-Regular.ttf",
  variable:"--font-montserrat",
  weight:"100 900"
})

export const metadata: Metadata = {
  title: "Abhay Bisht | Full Stack Developer Portfolio",
  description: "Explore Abhay Bisht's portfolio showcasing full stack development projects, experience in web and mobile app development, and insights into modern programming technologies. Get in touch for collaborations and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
