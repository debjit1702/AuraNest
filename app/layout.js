// /app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import Header from "./dashboard/_components/Header"; // Import Header to include in the layout

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={outfit.className}>
          <Provider>
            <Header /> {/* Place Header here so it receives context */}
            {children}
          </Provider>
        </body>
      </ClerkProvider>  
    </html>
  );
}
