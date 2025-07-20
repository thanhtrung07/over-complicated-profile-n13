import Board from '@/components/Board'
import { GIF_BLUR_DATA_URL } from '@/consts/common'
import { GMProps } from '@/types'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function generateMetadata({ params }: GMProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.theEnd' })

  return {
    title: t('title'),
  }
}

const MemeText = ({ text }: { text: string }) => (
  <p className="font-meme xs:text-3xl mt-1 text-center text-2xl lg:text-4xl">
    {text}
  </p>
)

export default function TheEnd() {
  const t = useTranslations('TheEnd')

  return (
    <Board title={t('title')}>
      <section className="space-y-8">
        <div className="space-y-1 text-lg">
          <p>
            {t('farewell.opening')}
            <span className="text-accent-dark dark:text-accent-light font-bold">
              {t('farewell.thanks')}
            </span>{' '}
            {t('farewell.closing')}
          </p>
          <p>{t('hopeful')}</p>
        </div>

        <div className="flex flex-col items-center gap-2 px-[10%]">
          <MemeText text={t('meme.top')} />
          <Image
            src="/Guy_look_at_comp.gif"
            alt="meme_look_at_computer"
            width={900}
            height={523}
            unoptimized
            className="lg:w-[80%]"
            placeholder="blur"
            blurDataURL={GIF_BLUR_DATA_URL}
          />
          <MemeText text={t('meme.bottom')} />
        </div>
      </section>
    </Board>
  )
}
