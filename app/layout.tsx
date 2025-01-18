import type { Metadata } from "next";
import { Lato, Kaushan_Script } from 'next/font/google';
import "./globals.css";

const latoFont = Lato({
  subsets:["latin"],
  weight: "300",
  variable: '--font-lato',
})
const KaushanFont = Kaushan_Script ({
  subsets:["latin"],
  weight: "400",
  variable: '--font-kaushan',
})

export const metadata: Metadata = {
  title: "Mark Yudt's portfolio",
  description: "Built with next.js, typescript and tailwinds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${latoFont.variable} ${KaushanFont.variable} antialiased`}>
        <nav className="bg-white sticky top-0 p-5  max-w-[1600px] mx-auto z-20 ">
          <div className="flex items-start justify-between p-5">
            <div className="">
              menu left
            </div>

            <div className="">
              menu right
            </div>
          </div>
        </nav>

        {children}

        <footer>
            <div className="border-t-2 border-gray-200"></div>
            <div className="text-left text-gray-600 m-10 font-lato">2025 - Mark Yudt&apos;s Portfolio</div>
        </footer>
      </body>
      
    </html>
  );
}
