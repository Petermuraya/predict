import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap', 
});

export const metadata: Metadata = {
  title: {
    default: 'mercy Hotel Price Prediction',
    template: '%s | mercy Hotel Price Prediction',
  },
  description: 'AI-powered hotel price prediction system for Kenya my final year project',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  openGraph: {
    title: 'mercy Hotel Price Prediction',
    description: 'AI-powered hotel price prediction system for Kenya',
    url: 'https://yourdomain.com',
    siteName: 'Kenya Hotel Price Prediction',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-gradient-to-br from-background/95 via-muted/20 to-background/95 font-sans antialiased',
          'selection:bg-primary selection:text-primary-foreground', // Better text selection
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Rainbow border accent - now theme-aware */}
          <div className="fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50" />
          
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>

          {/* Optimized animated background elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Adjusted size and opacity for smaller screens */}
            <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float opacity-70 sm:w-24 sm:h-24 sm:top-1/4" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-float-delay opacity-70 sm:w-36 sm:h-36 sm:right-1/4" />
            <div className="absolute bottom-0 left-1/2 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float opacity-70 sm:w-32 sm:h-32 sm:left-1/2" />
          </div>

          <Toaster 
            position="top-center"
            richColors
            closeButton
            toastOptions={{
              classNames: {
                toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground',
                title: 'font-semibold',
                description: 'text-muted-foreground',
                actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
