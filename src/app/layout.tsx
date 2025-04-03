import './globals.css'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Marko & Katarina | Wedding Landing Page',
  robots: 'noindex',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
