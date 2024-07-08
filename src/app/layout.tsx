import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from 'react';
import "./globals.css";
import { Hearing } from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "groko",
  description: "groko",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="mt-16">{children}</body>
    </html>
  );
};

export default RootLayout;