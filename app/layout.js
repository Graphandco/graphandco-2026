import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

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
         <body suppressHydrationWarning={true}>
            <ViewTransitions>
               <ClientLayout>{children}</ClientLayout>
            </ViewTransitions>
         </body>
      </html>
   );
}
