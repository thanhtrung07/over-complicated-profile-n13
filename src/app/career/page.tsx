import Board from '@/components/Board'
import { ReactNode, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import { GMProps } from '@/types'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: GMProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.career' })

  return {
    title: t('title'),
  }
}

const WorkListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-center gap-2">
    <span className="text-primary dark:text-primary-light text-sm">➤</span>
    <span>{children}</span>
  </li>
)

interface IJobItem {
  title: string
  position: string
  size: string
  description: ReactNode
  bullets: ReactNode[]
}

const getJobData = (t: ReturnType<typeof useTranslations>) => {
  const jobs = [
    { jobKey: 'jobInsurance', nBullet: 5 },
    { jobKey: 'jobCreditCard', nBullet: 4 },
    { jobKey: 'jobMigrate', nBullet: 4 },
  ]
  return jobs.map(({ jobKey, nBullet }) => ({
    title: t(`${jobKey}.title`),
    position: t(`${jobKey}.position`),
    size: t(`${jobKey}.size`),
    description: (
      <>
        {t.rich(`${jobKey}.description`, {
          strong: (chunk) => <strong>{chunk}</strong>,
        })}
      </>
    ),
    bullets: [...Array(nBullet).keys()].map((i) => (
      <>
        {t.rich(`${jobKey}.bullet${i + 1}`, {
          strong: (chunk) => <strong>{chunk}</strong>,
        })}
      </>
    )),
  }))
}

const JobDescription = ({
  title,
  position,
  size,
  description,
  bullets,
}: IJobItem) => (
  <article className="mb-2 space-y-3">
    <header className="space-y-3">
      <h1 className="text-primary dark:text-primary-light text-2xl font-bold">
        {title}
      </h1>
      <h1 className="font-bold">{position}</h1>
      <p className="text-secondary dark:text-secondary-light font-bold">
        {size}
      </p>
    </header>
    <p className="animate-slide-in opacity-0">{description}</p>
    <ul className="animate-slide-in-after space-y-1 opacity-0">
      {bullets.map((item, index) => (
        <WorkListItem key={index}>{item}</WorkListItem>
      ))}
    </ul>
  </article>
)

export default function Career() {
  const t = useTranslations('Career')
  const jobData = useMemo(() => getJobData(t), [t])

  return (
    <Board title={t('title')}>
      {jobData.map((job, index) => (
        <JobDescription key={index} {...job} />
      ))}
    </Board>
  )
}
