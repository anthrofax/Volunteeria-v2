"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { redirect } from "next/navigation";
import { getSession } from "@/utils/supabase/authApi";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Volunteeria",
  description: "Volunteers Vacancy Information Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        }
      </body>
    </html>
  );
}
