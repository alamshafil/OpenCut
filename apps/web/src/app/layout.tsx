import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import { StorageProvider } from "../components/storage-provider";
import { baseMetaData } from "./metadata";
import { defaultFont } from "../lib/font-config";
export const metadata = baseMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${defaultFont.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <TooltipProvider>
            <StorageProvider>{children}</StorageProvider>
            <Analytics />
            <Toaster />
            {/* Debug Build Overlay for GH Pages */}
            <div className="fixed bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold z-50 pointer-events-none">
              UNOFFICIAL BUILD
            </div>
            {/* DataBuddy disabled for GH Pages */}
            {/* <Script
              src="https://cdn.databuddy.cc/databuddy.js"
              strategy="afterInteractive"
              async
              data-client-id="UP-Wcoy5arxFeK7oyjMMZ"
              data-disabled={env.NODE_ENV === "development"}
              data-track-attributes={false}
              data-track-errors={true}
              data-track-outgoing-links={false}
              data-track-web-vitals={false}
              data-track-sessions={false}
            /> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
