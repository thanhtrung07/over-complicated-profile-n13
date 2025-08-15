'use client'
import {
  DARK_THEME,
  KEY_THEME,
  LANG_EN,
  LANG_VI,
  LIGHT_THEME,
} from '@/consts/common'
import { ROUTES } from '@/consts/routes'
import clsx from 'clsx'
import { Bike, Briefcase, Contact, Handshake, Menu, Puzzle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { JSX, useEffect, useMemo, useState } from 'react'
import AsymCurveDivider from './AsymCurveDivider'
import SwitchBtn from './SwitchBtn'
import { useTranslations } from 'next-intl'
import { setUserLocale } from '@/services/locales'
import { Language } from '@/i18n/config'

const linkLists = [
  ROUTES.about,
  ROUTES.career,
  ROUTES.skills,
  ROUTES.interests,
  ROUTES.theEnd,
]

const getLinkLabel = (t: ReturnType<typeof useTranslations>, name: string) => {
  switch (name) {
    case ROUTES.about.name:
      return t('aboutMe')
    case ROUTES.career.name:
      return t('career')
    case ROUTES.skills.name:
      return t('skills')
    case ROUTES.interests.name:
      return t('interests')
    case ROUTES.theEnd.name:
      return t('theEnd')
    default:
      return name
  }
}

const applyTheme = (dark: boolean) => {
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  localStorage.theme = dark ? DARK_THEME : LIGHT_THEME
}

const iconMap: Record<string, JSX.Element> = {
  [ROUTES.about.name]: <Contact className="h-6 w-6" />,
  [ROUTES.career.name]: <Briefcase className="h-6 w-6" />,
  [ROUTES.skills.name]: <Puzzle className="h-6 w-6" />,
  [ROUTES.interests.name]: <Bike className="h-6 w-6" />,
  [ROUTES.theEnd.name]: <Handshake className="h-6 w-6" />,
}

export default function NavBar({ locale }: { locale: Language }) {
  const [open, setOpen] = useState<boolean>(false)
  const [lang, setLang] = useState<Language>(
    locale === LANG_EN ? LANG_VI : LANG_EN
  )
  const [isDark, setIsDark] = useState<boolean>()
  const pathname = usePathname()
  const t = useTranslations('Navbar')

  useEffect(() => {
    const shouldUseDark =
      isDark ??
      (localStorage.theme === DARK_THEME ||
        (!(KEY_THEME in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches))

    setIsDark(shouldUseDark)
    applyTheme(shouldUseDark)
  }, [isDark])

  const ThemeAndLangControls = useMemo(() => {
    const toggleLang = () => {
      setUserLocale(lang)
      setLang((prev: Language) => (prev === LANG_EN ? LANG_VI : LANG_EN))
    }

    return (
      <>
        <SwitchBtn enabled={!!isDark} setEnabled={setIsDark} />
        <button
          title={t('switchLang')}
          onClick={toggleLang}
          className="share-border-btns w-8 cursor-pointer rounded-md border px-1 py-0.5"
        >
          {`${lang}`}
        </button>
      </>
    )
  }, [t, lang, isDark])

  const Nickname = () => (
    <h1 className={clsx('font-brand text-2xl')}>
      Trung<span className="text-primary dark:text-primary-light">07</span>
    </h1>
  )

  return (
    <nav
      className={clsx(
        'fixed z-10 w-full px-5',
        'bg-foreground text-copy dark:bg-dark-foreground dark:text-dark-copy',
        'md:flex md:min-h-screen md:max-w-60 md:flex-2 md:px-8 md:pt-7 md:pb-4',
        'md:border-border md:dark:border-dark-border md:flex-1 md:flex-col md:justify-between md:border-r'
      )}
    >
      {/* Mobile Header */}
      <div className="flex items-center justify-between py-3 md:hidden">
        <Nickname />
        <div className="flex items-center space-x-3">
          {ThemeAndLangControls}
          <button
            onClick={() => setOpen(!open)}
            className="border-border dark:border-dark-border rounded-md border px-1 py-0.5"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="border-border dark:border-dark-border -mx-8 border-b md:hidden" />

      <div>
        {/* Desktop Header */}
        <div className="hidden md:block">
          <Nickname />
          <AsymCurveDivider className="-mx-8 mt-3 mb-5" />
        </div>

        {/* Menu Items*/}
        <ul
          className={clsx(
            'transition-[opacity, translate] duration-300 ease-in-out',
            open
              ? 'my-4 max-h-96 translate-y-0 opacity-100'
              : 'pointer-events-none my-0 max-h-0 translate-y-[-10px] opacity-0',
            '-mx-2 space-y-2 md:pointer-events-auto md:block md:max-h-none md:opacity-100'
          )}
        >
          {linkLists.map((link) => (
            <li key={link.route}>
              <Link
                onClick={() => setOpen(false)}
                href={link.route}
                className={clsx(
                  'ease transition-width flex w-7/10 space-x-2 rounded-md px-2 py-1 duration-300',
                  link.route === pathname
                    ? 'bg-dark-foreground text-dark-copy dark:bg-background dark:text-copy w-full'
                    : [
                        'hover:w-full',
                        'hover:bg-dark-foreground/20 hover:text-copy',
                        'hover:dark:bg-foreground/20 hover:dark:text-dark-copy',
                      ]
                )}
              >
                {iconMap[link.name]}
                <span>{getLinkLabel(t, link.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
        {open && (
          <div className="border-border dark:border-dark-border -mx-8 border-b md:hidden" />
        )}
      </div>

      {/* Desktop Navbar Footer */}
      <div className="hidden md:block">
        <AsymCurveDivider className="-mx-8 mb-2" />
        <div className="hover-btns flex items-center space-x-4">
          {ThemeAndLangControls}
        </div>
      </div>
    </nav>
  )
}
