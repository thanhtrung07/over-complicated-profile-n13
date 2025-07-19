'use server'

import { cookies, headers } from 'next/headers'
import { Language, defaultLocale, locales } from '@/i18n/config'
import { COOKIE_LOCALE } from '@/consts/common'

// Could read locale from a database, backend service, or any other source.

export async function getUserLocale() {
  const headersList = await headers()
  const acceptLocale = headersList.get('accept-language')?.split('-')[0]
  const browserLocale =
    locales.includes(acceptLocale as Language) && acceptLocale

  return (
    (await cookies()).get(COOKIE_LOCALE)?.value ||
    browserLocale ||
    defaultLocale
  )
}

export async function setUserLocale(locale: Language) {
  ;(await cookies()).set(COOKIE_LOCALE, locale)
}
