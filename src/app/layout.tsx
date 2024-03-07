"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RouteProvider } from "@/contexts/RouteContext";
import { Toaster } from "react-hot-toast";
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
      staleTime: 0,
    },
  },
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
          <RouteProvider>
            <Navbar />
            {children}
            <Footer />
          </RouteProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
