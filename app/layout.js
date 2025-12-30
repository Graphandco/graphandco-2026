import { Outfit, Urbanist } from "next/font/google";

import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

const outfit = Outfit({
   variable: "--font-outfit",
   subsets: ["latin"],
});

const urbanist = Urbanist({
   variable: "--font-urbanist",
   subsets: ["latin"],
});

export const metadata = {
   title: "Polite Chaos | Codegrid",
   description: "MWT by Codegrid",
   icons: {
      icon: "/site-logo.png",
      shortcut: "/site-logo.png",
      apple: "/site-logo.png",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <body
            className={`${outfit.variable} ${urbanist.variable} antialiased`}
            suppressHydrationWarning={true}
         >
            <ViewTransitions>
               <ClientLayout>{children}</ClientLayout>
            </ViewTransitions>
         </body>
      </html>
   );
}
