import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image"; // Import next/image for optimization
import logoimage from "../public/logo.png"; // Importing the logo image

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swastideep's Portfolio",
  description:
    "Welcome to Swastideep's Portfolio. Explore my projects and skills.",
};

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    return <div>Something went wrong!</div>;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={logoimage.src} // Using the correct imported path
          sizes="any"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
