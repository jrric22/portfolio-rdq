import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Ricardo De Quiroz Jr. | Junior Software Engineer',
  description:
    'Portfolio of Ricardo De Quiroz Jr. — BS Information Technology graduate and Junior Software Engineer skilled in React.js, Next.js, TypeScript, Prisma, PostgreSQL, and Tailwind CSS.',
  keywords: [
    'Ricardo De Quiroz Jr.',
    'Junior Software Engineer',
    'React Developer',
    'Next.js',
    'Philippines',
    'Portfolio',
  ],
  authors: [{ name: 'Ricardo De Quiroz Jr.' }],
  openGraph: {
    title: 'Ricardo De Quiroz Jr. | Software Engineer Portfolio',
    description: 'Full-stack developer from the Philippines. React, TypeScript, Prisma, PostgreSQL.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
