'use client'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SwitchBtn from './SwitchBtn'
import {
  DARK_THEME,
  KEY_THEME,
  LANG_EN,
  LANG_VI,
  LIGHT_THEME,
} from '@/consts/common'
import { ROUTES } from '@/consts/routes'

const linkLists = [
  ROUTES.about,
  ROUTES.career,
  ROUTES.skills,
  ROUTES.interests,
  ROUTES.theEnd,
]

type Language = typeof LANG_EN | typeof LANG_VI

const applyTheme = (dark: boolean) => {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
    localStorage.theme = DARK_THEME
  } else {
    root.classList.remove('dark')
    localStorage.theme = LIGHT_THEME
  }
}

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false)
  const [lang, setLang] = useState<Language>(LANG_EN)
  const [isDark, setIsDark] = useState<boolean>()

  useEffect(() => {
    const shouldUseDark =
      isDark ??
      (localStorage.theme === DARK_THEME ||
        (!(KEY_THEME in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches))

    setIsDark(shouldUseDark)
    applyTheme(shouldUseDark)
  }, [isDark])

  const toggleLang = () => {
    setLang((prev: Language) => (prev === LANG_EN ? LANG_VI : LANG_EN))
  }

  const ThemeAndLangControls = () => (
    <>
      <SwitchBtn enabled={!!isDark} setEnabled={setIsDark} />
      <button onClick={toggleLang} className="w-6">
        {lang}
      </button>
    </>
  )

  return (
    <nav
      className={clsx(
        'fixed z-10 w-full px-8 py-4',
        'bg-bg-surface-head text-dk-text-primary dark:bg-bg-dk-secondary dark:text-dk-text-primary',
        'md:static md:flex md:min-h-screen md:max-w-64 md:py-8',
        'md:flex-1 md:flex-col md:justify-between'
      )}
    >
      <div className="flex items-center justify-between py-3 md:hidden">
        <h1 className="text-xl font-bold">Trung07</h1>
        <div className="flex items-center space-x-4">
          <ThemeAndLangControls />
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div>
        <div className="mb-13 hidden md:block">
          <h1 className="text-xl font-bold">Trung07</h1>
        </div>

        <ul className={`space-y-4 ${open ? 'mt-4 block' : 'hidden'} md:block`}>
          {linkLists.map((link) => (
            <li key={link.route}>
              <Link
                onClick={() => setOpen(false)}
                href={link.route}
                className={clsx(
                  'block',
                  'hover:text-bg-surface-head hover:bg-white',
                  'hover:dark:bg-bg-dk-surface hover:dark:text-dk-accent'
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-4">
        <ThemeAndLangControls />
      </div>
    </nav>
  )
}
