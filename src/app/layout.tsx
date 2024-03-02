"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Volunteeria",
  description: "Volunteers Vacancy Information Provider",
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Navbar />
            {children}
            <Footer />
          </QueryClientProvider>
        }
      </body>
    </html>
  );
}
