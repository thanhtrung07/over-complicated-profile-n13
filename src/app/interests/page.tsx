import Board from '@/components/Board'
import ddImg from '@/assets/images/darkest_dungeon.jpg'
import hkImg from '@/assets/images/hollow_knight.jpg'
import oniImg from '@/assets/images/oni.jpg'
import svImg from '@/assets/images/stardew.jpg'
import Image from 'next/image'
import { JPEG_BLUR_DATA_URL } from '@/consts/common'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import { GMProps } from '@/types'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: GMProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata.interests' })

  return {
    title: t('title'),
  }
}

const games = [
  { name: 'Oni', img: oniImg },
  { name: 'Hollow Knight', img: hkImg },
  { name: 'Darkest Dungeon', img: ddImg },
  { name: 'Stardew Valley', img: svImg },
]

export default function Interests() {
  const t = useTranslations('Interests')

  return (
    <Board title={t('title')}>
      <section className="animate-fade-in space-y-4 text-justify text-lg lg:space-y-8">
        <p>{t('pingpong')}</p>
        <p>
          {t('running.text')}
          <span className="text-dark-copy dark:text-copy">
            {t('running.hidden')}
            <span className="pl-2 font-bold">{' (-:'}</span>
          </span>
        </p>
        <p>{t('indie')}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:mt-12 lg:grid-cols-4">
          {games.map((game) => (
            <Image
              key={game.name}
              width={460}
              height={215}
              blurDataURL={JPEG_BLUR_DATA_URL}
              src={game.img}
              alt="Indie Game"
            />
          ))}
        </div>
      </section>
    </Board>
  )
}
