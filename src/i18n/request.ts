import { getUserLocale } from '@/services/locales'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  // const locale = 'vi'
  const locale = await getUserLocale()

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
