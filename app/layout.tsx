import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Inter } from "next/font/google";
import logoimage from "../public/logo.png"; // Corrected logo import path
import { ErrorBoundary } from "react-error-boundary"; // Third-party ErrorBoundary

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swastideep's Portfolio",
  description:
    "Welcome to Swastideep's Portfolio. Explore my projects and skills.",
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
