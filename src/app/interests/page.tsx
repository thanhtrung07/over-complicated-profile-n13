import Board from '@/components/Board'
import ddImg from '@/assets/images/darkest_dungeon.jpg'
import hkImg from '@/assets/images/hollow_knight.jpg'
import oniImg from '@/assets/images/oni.jpg'
import svImg from '@/assets/images/stardew.jpg'
import Image from 'next/image'
import { JPEG_BLUR_DATA_URL } from '@/consts/common'

const games = [
  { name: 'Oni', img: oniImg },
  { name: 'Hollow Knight', img: hkImg },
  { name: 'Darkest Dungeon', img: ddImg },
  { name: 'Stardew Valley', img: svImg },
]

export default function Interests() {
  return (
    <Board title="Interest">
      <section className="space-y-4 text-lg lg:space-y-8">
        <p>
          Tôi thích chơi bóng bàn, vì nó vui và tốt cho khả năng phản xạ và sự
          tập trung.
        </p>
        <p>
          Tôi cũng thường hay chạy bộ giúp rèn luyện ý chí{' '}
          <span className="text-dark-copy dark:text-copy">
            và cũng vì muốn né trĩ
            <span className="pl-2 font-bold">{' (-:'}</span>
          </span>
        </p>
        <p>
          Tôi yêu thích các tựa game indie, dù thường không sở hữu đồ họa khủng
          ngốn VGA, chúng lại có những giá trị nghệ thuật đầy sáng tạo cùng cách
          tiếp cận vô cùng độc đáo.
        </p>
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
