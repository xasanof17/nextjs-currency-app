import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import CurrencyProvider from "@/context/CurrencyProvider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "Currency Converter",
    images: [
      {
        url: `/opengraph-image.jpg`,
        width: 1920,
        height: 1000,
        type: "image/jpg",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <CurrencyProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
              <Footer />
            </ThemeProvider>
          </CurrencyProvider>
        </body>
      </html>
    </>
  );
}
