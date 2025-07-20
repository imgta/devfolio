import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const META: Record<string, string> = {
  author: 'Gordon Ta',
  title: 'Gordon Ta | Full-Stack Engineer - AI, FastAPI, Nuxt, React',
  description: 'Full-stack engineer & Video Blog AI co-founder, skilled in FastAPI, Nuxt, React. From biotech labs to browser tabs, I build expressive, AI-powered apps—driving impact with creativity.',
  url: 'https://imgta.dev',
};

export const metadata: Metadata = {
  authors: [{ name: META.author }],
  title: META.title,
  description: META.description,
  openGraph: {
    type: 'website',
    url: META.url,
    title: META.title,
    description: META.description,
    // images: [{ url: "https://example.com/og.png" }]
  }
};

//------------------------------------------------------------

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="isolate pb-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
