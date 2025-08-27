import { ENGLISH, LANG_EN, LANG_VI, VIETNAMESE } from '@/consts/common'
import { Language } from '@/i18n/config'
import { setUserLocale } from '@/services/locales'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import clsx from 'clsx'
import { Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { memo } from 'react'

const langs = [
  { code: LANG_EN, des: ENGLISH },
  { code: LANG_VI, des: VIETNAMESE },
]

interface ILangOptions {
  lang: { code: Language; des: string }
  isActive: boolean
  onClick: (langCode: Language) => void
}

const LangOption = memo(({ lang, isActive, onClick }: ILangOptions) => {
  return (
    <MenuItem>
      <button
        onClick={() => onClick(lang.code)}
        className={clsx(
          'group flex w-full cursor-pointer rounded-sm px-3 text-start',
          'data-focus:bg-dark-foreground/20 data-focus:text-copy',
          'dark:data-focus:bg-foreground/20 dark:data-focus:text-dark-copy'
        )}
      >
        {lang.des}
        {isActive && <span className="text-success pl-2">✓</span>}
      </button>
    </MenuItem>
  )
})
LangOption.displayName = 'LangOption'

const SwitchLang = () => {
  const t = useTranslations('Navbar')
  const locale = useLocale() as Language

  const _changeLang = (langCode: Language) => {
    if (langCode === locale) return
    setUserLocale(langCode)
  }

  return (
    <Menu>
      <MenuButton
        title={t('switchLang')}
        className={
          'share-border-btns cursor-pointer rounded-md border p-1 focus:not-data-focus:outline-none'
        }
      >
        <Languages className="h-5 w-5" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className={clsx(
          'absolute z-20 gap-2 rounded-md border p-1',
          'shadow-copy-light dark:shadow-dark-copy-lighter shadow-lg/20 dark:shadow-md/20',
          'origin-top transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 md:origin-bottom',
          '[--anchor-gap:--spacing(2)] focus:not-data-focus:outline-none',
          'bg-foreground border-border dark:bg-dark-foreground dark:border-dark-border'
        )}
      >
        {langs.map((lang) => (
          <LangOption
            key={lang.code}
            lang={lang}
            isActive={lang.code === locale}
            onClick={_changeLang}
          />
        ))}
      </MenuItems>
    </Menu>
  )
}

export default memo(SwitchLang)
