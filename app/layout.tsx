import type { Metadata } from 'next'
import { Crimson_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lunardi',
  description: 'Panadería Lunardi - El arte de hacer pan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={crimson.variable}>
      <body className={`${crimson.className} antialiased bg-amber-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}