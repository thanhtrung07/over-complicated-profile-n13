import Board from '@/components/Board'
import { GIF_BLUR_DATA_URL } from '@/consts/common'
import Image from 'next/image'

const MemeText = ({ text }: { text: string }) => (
  <p className="font-meme xs:text-3xl text-center text-2xl lg:text-4xl">
    {text}
  </p>
)

export default function TheEnd() {
  return (
    <Board title="The End">
      <section className="space-y-8">
        <div className="space-y-1 text-lg">
          <p>
            Cuối cùng, xin được gửi lời{' '}
            <span className="text-accent-dark dark:text-accent-light font-bold">
              Cảm ơn
            </span>{' '}
            tới bạn, người đã dành thời gian để đọc hết portolio này 🤗🤗🤗{' '}
          </p>
          <p>Mong rằng sẽ có cơ hội được hợp tác cùng bạn!</p>
        </div>

        <div className="flex flex-col items-center gap-2 px-[10%]">
          <MemeText text="Tôi khi thiết kế Portfolio" />
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
          <MemeText text="Người xem Portfolio của tôi" />
        </div>
      </section>
    </Board>
  )
}
