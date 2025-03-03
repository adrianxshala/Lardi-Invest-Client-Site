
import './globals.css';
import type { Metadata } from 'next';
import { Oxanium } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const oxanium = Oxanium({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Lardi Invest',
  description: 'Building tomorrow, today',
  icons: {
    icon: '/favicon.png', // Path to your favicon in the public directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oxanium.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}