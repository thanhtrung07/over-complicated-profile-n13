import Board from '@/components/Board'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <Board title={t('title')}>
      <section className="space-y-4 text-center text-xl">
        <div className="text-warning mb-12 font-bold">
          <p className="text-8xl">404</p>
          <p className="text-4xl">Not Found</p>
        </div>
        <p>{t('description')}</p>
        <p>
          {t('backHome')}
          <Link
            href={'/'}
            className={clsx(
              'text-primary-dark dark:text-primary-light font-bold underline',
              'hover:text-primary-light hover:dark:text-primary'
            )}
          >
            {t('home')}
          </Link>
        </p>
      </section>
    </Board>
  )
}
