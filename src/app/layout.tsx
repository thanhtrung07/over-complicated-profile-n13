import './globals.css'
import NavBar from '@/components/NavBar'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Gluten, Space_Grotesk, Notable } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { GMProps } from '@/types'
import { Analytics } from '@vercel/analytics/next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const notable = Notable({
  weight: '400',
  variable: '--font-notable',
  subsets: ['latin'],
})

const gluten = Gluten({
  weight: '300',
  variable: '--font-gluten',
  subsets: ['latin'],
})

export async function generateMetadata({ params }: GMProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: "Trung07's Portfolio",
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className={`${gluten.variable} ${spaceGrotesk.variable} ${notable.variable}`}
    >
      <body
        className={clsx(
          `font-main antialiased`,
          'bg-background text-copy dark:bg-dark-background dark:text-dark-copy'
        )}
      >
        <NextIntlClientProvider>
          <div className="flex min-h-screen">
            <NavBar />
            <main className="flex-1 pt-13.5 md:pt-0 md:pl-60">
              <div
                className={clsx(
                  'flex flex-col items-center justify-center p-8',
                  'md:min-h-screen md:flex-row md:justify-start md:p-10'
                )}
              >
                {children}
              </div>
            </main>
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
