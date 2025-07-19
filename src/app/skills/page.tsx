import Board from '@/components/Board'
import {
  Antd,
  Bootstrap,
  Css3,
  Express,
  Html5,
  Javascript,
  Mongodb,
  Nextjs,
  Nodejs,
  ReactIcon,
  Tailwindcss,
} from '@/assets/svgs'
import { JSX, useMemo } from 'react'
import { useTranslations } from 'next-intl'

type TTechUsed = {
  techName: string
  icon: JSX.Element
}

const techUsed: TTechUsed[] = [
  {
    techName: 'Javascript',
    icon: <Javascript className="h-12 w-12" />,
  },
  {
    techName: 'ReactJS',
    icon: <ReactIcon className="h-12 w-12" />,
  },
  {
    techName: 'React Native',
    icon: <ReactIcon className="h-12 w-12" />,
  },
  {
    techName: 'HTML5',
    icon: <Html5 className="h-12 w-12" />,
  },
  {
    techName: 'CSS3',
    icon: <Css3 className="h-12 w-12" />,
  },
  {
    techName: 'NextJS',
    icon: <Nextjs className="h-12 w-12" />,
  },
  {
    techName: 'Tailwind',
    icon: <Tailwindcss className="h-12 w-12" />,
  },
  {
    techName: 'Antd',
    icon: <Antd className="h-12 w-12" />,
  },
  {
    techName: 'Bootstrap',
    icon: <Bootstrap className="h-12 w-12" />,
  },
  {
    techName: 'NodeJS',
    icon: <Nodejs className="h-12 w-12" />,
  },
  {
    techName: 'MongoDB',
    icon: <Mongodb className="h-12 w-12" />,
  },
  {
    techName: 'ExpressJS',
    icon: <Express className="h-12 w-12 dark:fill-white" />,
  },
]

const TechIcons = ({ techName, icon }: TTechUsed) => (
  <div className="flex flex-col items-center justify-center">
    {icon}
    <span className="text-copy-light dark:text-dark-copy-light text-sm">
      {techName}
    </span>
  </div>
)
export default function Skills() {
  const t = useTranslations('Skills')

  const practices = useMemo(
    () => [
      t('practices.debug'),
      t('practices.git'),
      t('practices.workflow'),
      t('practices.responsive'),
      t('practices.methodology'),
      t('practices.english'),
    ],
    [t]
  )

  return (
    <Board title={t('title')}>
      <section>
        <p className="text-lg font-bold">{t('programLng')}</p>
        <div className="xs:grid-cols-5 mt-3 grid w-full grid-cols-3 gap-y-4">
          {techUsed.map((techs) => (
            <TechIcons key={techs.techName} {...techs} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-lg font-bold">{t('practices.label')}</p>
        <ul className="mt-1 pl-4">
          {practices.map((description, index) => (
            <li key={index} className="custom-tick-marker">
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Board>
  )
}
