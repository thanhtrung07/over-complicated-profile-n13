import myImage from '@/assets/images/CV1_Transparent.png'
import { Github, LinkedIn, Twitter } from '@/assets/svgs'
import Board from '@/components/Board'
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { LANG_VI } from '@/consts/common'
import { Metadata } from 'next'
import { GMProps } from '@/types'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: GMProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.aboutMe' })

  return {
    title: t('title'),
  }
}

type TContact = {
  name: string
  url?: string
  backgroundClass: string
  icon: JSX.Element
}

const cvLinkEng = '/NguyenThanhTrung_Resume_Frontend_eng.pdf'
const cvLinkVi = '/NguyenThanhTrung_Resume_Frontend_vi.pdf'

const getCvLink = (locale: string) => {
  return locale === LANG_VI ? cvLinkVi : cvLinkEng
}

const contacts: TContact[] = [
  {
    name: 'Github',
    url: process.env.NEXT_PUBLIC_GITHUB_URL,
    backgroundClass: 'bg-foreground',
    icon: <Github className="h-7 w-7" />,
  },
  {
    name: 'LinkedIn',
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    backgroundClass: 'bg-[#0076b2]',
    icon: <LinkedIn className="h-5 w-5" />,
  },
  {
    name: 'Twitter',
    url: process.env.NEXT_PUBLIC_X_URL,
    backgroundClass: 'bg-[#2f2f2f] border-foreground border',
    icon: <Twitter className="h-4 w-4 fill-white" />,
  },
]

const ContactIcon = ({ name, url, icon, backgroundClass }: TContact) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={name}
    aria-label={name}
    className={clsx(
      'hover:border-accent-dark hover:dark:border-accent-light hover:border-1',
      'inline-flex h-7 w-7 items-center justify-center rounded-full',
      backgroundClass
    )}
  >
    {icon}
  </a>
)

const SkillLink = ({
  category,
  children,
}: {
  category: string
  children: JSX.Element
}) => (
  <p className="text-justify">
    <Link href={'/skills'}>
      <span className="text-primary dark:text-primary-light inline-block text-left font-bold">
        {category}:
      </span>
    </Link>
    {children}
  </p>
)

export default function AboutMe() {
  const t = useTranslations('AboutMe')
  const locale = useLocale()

  return (
    <Board title={t('title')}>
      {/* Profile Section */}
      <section
        className={clsx(
          'flex w-full flex-col items-center justify-around gap-4 sm:flex-row sm:py-1',
          'animate-slide-in opacity-0'
        )}
      >
        <div className="order-2 flex flex-col items-center sm:order-1">
          <h1 className="text-3xl font-bold">
            <span className="text-accent-dark dark:text-accent-light">
              {t('introduction.hi')}
            </span>
            {t('introduction.iam')}
          </h1>
          <h1
            className={clsx(
              'text-accent-dark dark:text-accent-light',
              'text-right align-bottom text-3xl font-bold sm:translate-x-15'
            )}
          >
            {t('introduction.name')}
          </h1>
        </div>
        <Image
          width={192}
          height={192}
          className={clsx(
            'border-accent bg-primary-light order-1 h-32 w-32 rounded-full border-2 text-center',
            'sm:order-2 sm:ml-12 lg:h-48 lg:w-48'
          )}
          src={myImage}
          alt="Profile"
        />
      </section>

      {/* Description */}
      <section className="animate-fade-in flex flex-col items-start gap-4">
        <div>
          <p className="text-justify">{t('opening')}</p>
          <p className="text-justify">
            {t('quite.label') + ' '}
            <span className="italic">{t('quite.text')}</span>
          </p>
        </div>
        <SkillLink category="Front-end">
          <>
            {t('stacksFe.text')}
            <span className="font-bold">{t('stacksFe.techs')}</span>
          </>
        </SkillLink>
        <SkillLink category="Back-end">
          <>
            {t('stacksBe.text')}
            <span className="font-bold">{t('stacksBe.techs')}</span>
          </>
        </SkillLink>
      </section>

      {/* Contacts + Resume */}
      <footer className="xs:flex-row xs:gap-0 mt-2 flex w-full flex-col items-center justify-between gap-6">
        <div className="xs:order-1 xs:justify-start order-2 flex flex-1 items-center justify-center gap-4">
          {contacts.map((contact) => (
            <ContactIcon key={contact.name} {...contact} />
          ))}
        </div>
        <div className="xs:justify-end xs:order-2 order-1 flex w-full flex-1 items-center justify-center">
          <a href={getCvLink(locale)} download>
            <Button
              className={clsx(
                'bg-primary text-primary-content hover:bg-primary-dark cursor-pointer',
                'min-w-2/3 rounded-md px-4 py-2'
              )}
            >
              {t('downloadCV')}
            </Button>
          </a>
        </div>
      </footer>
    </Board>
  )
}
