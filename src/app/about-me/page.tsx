import myImage from '@/assets/images/CV1_Transparent.png'
import { Facebook, Github, LinkedIn } from '@/assets/svgs'
import Board from '@/components/Board'
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { JSX } from 'react'
import { useTranslations } from 'next-intl'

type TContact = {
  name: string
  url: string
  backgroundClass: string
  icon: JSX.Element
}

const contacts: TContact[] = [
  {
    name: 'Github',
    url: 'https://www.google.com.vn/',
    backgroundClass: 'bg-foreground',
    icon: <Github className="h-7 w-7" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.google.com.vn/',
    backgroundClass: 'bg-[#0076b2]',
    icon: <LinkedIn className="h-5 w-5" />,
  },
  {
    name: 'Facebook',
    url: 'https://www.google.com.vn/',
    backgroundClass: 'bg-[#3d5a98]',
    icon: <Facebook className="h-5 w-5" />,
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

  return (
    <Board title={t('title')}>
      {/* Profile Section */}
      <section className="flex w-full flex-col items-center justify-around gap-4 sm:flex-row sm:py-1">
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
      <section className="flex flex-col items-start gap-4">
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
          <Button
            className={clsx(
              'bg-primary dark:bg-primary-light text-primary-content',
              'min-w-2/3 rounded-md px-4 py-2'
            )}
          >
            {t('downloadCV')}
          </Button>
        </div>
      </footer>
    </Board>
  )
}
