import AppSidebar from "@/components/dashboard/Sidebar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Script from "next/script";
import { TourProvider } from "@/lib/context/TourContext";
import TourController from "@/components/ui/TourController";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TourProvider>
      <ScrollToTop />

      {/* GTranslate Scripts - Moved to body to avoid hydration errors */}
      <Script
        id="gtranslate-settings"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = {
              "default_language": "es",
              "detect_browser_language": true,
              "languages": ["es", "en", "it", "fr", "de", "zh-CN"],
              "wrapper_selector": ".gtranslate_wrapper",
              "flag_size": 24,
              "alt_flags": {"en": "usa"}
            };
          `,
        }}
      />
      <Script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
      <div className="gtranslate_wrapper"></div>

      {/* Sidebar fixa */}
      <AppSidebar />

      {/* Panel Principal */}
      <main className="flex-1 min-w-0 lg:ml-64 min-h-screen relative">
        <div className="p-4 md:p-8 pt-20 lg:pt-8 pb-24">
          {children}
        </div>
        <WhatsAppFloat />
      </main>

      <TourController />
    </TourProvider>
  );
}
