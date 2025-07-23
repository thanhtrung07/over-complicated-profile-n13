import { LANG_EN, LANG_VI } from '@/consts/common'

export type Language = (typeof locales)[number]

export const locales = [LANG_EN, LANG_VI] as const
export const defaultLocale: Language = LANG_EN
