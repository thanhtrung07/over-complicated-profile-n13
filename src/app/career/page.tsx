import Board from '@/components/Board'
import { ReactNode } from 'react'

const WorkListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-center gap-2">
    <span className="text-primary dark:text-primary-light text-sm">➤</span>
    {children}
  </li>
)

interface IJobItem {
  title: string
  position: string
  size: string
  description: ReactNode
  bullets: ReactNode[]
}

const jobData: IJobItem[] = [
  {
    title: 'Agency insurance mobile app',
    position: 'Mobile Developer at FSoft',
    size: 'Team size: 25',
    description: (
      <>
        Phát triển ứng dụng mobile với <strong>React Native</strong> giúp đại lý
        bảo hiểm quản lý khách hàng, theo dõi chỉ tiêu cá nhân & đội nhóm, tư
        vấn bán hàng, tham gia chiến dịch truyền thông và cập nhật tin tức nội
        bộ.
      </>
    ),
    bullets: [
      <>
        Xây dựng giao diện bằng <strong>React Native</strong>, viết test với{' '}
        <strong>Jest-Cucumber</strong>
      </>,
      <>
        Tham gia <strong>đề xuất giải pháp, estimate, review & merge PR</strong>
      </>,
      <>
        <strong>Hỗ trợ onboarding</strong> và{' '}
        <strong>phối hợp chặt chẽ với backend, tester, BA</strong>
      </>,
      <>
        <strong>Làm việc trực tiếp với khách hàng</strong> để làm rõ yêu cầu và
        xử lý lỗi
      </>,
      <>Tối ưu hiệu năng và xử lý lỗi giao diện.</>,
    ],
  },
  {
    title: 'App Tín dụng',
    position: 'Front End Developer at FSoft',
    size: 'Team size: 22',
    description: (
      <>
        Phát triển hệ thống gợi ý khoản vay và ưu đãi cho người dùng cuối, dựa
        trên dữ liệu quét gương mặt và căn cước. Hệ thống gồm 4 nền tảng: web
        admin cho khách hàng, web admin cho ngân hàng đối tác, SPA web app &
        mobile app cho end user
      </>
    ),
    bullets: [
      <>
        Phát triển frontend với <strong>ReactJS & React Native</strong>, viết
        unit test bằng <strong>Jest</strong>
      </>,
      <>
        <strong>Đề xuất & triển khai giải pháp kỹ thuật</strong> ở phase 2 & 3
      </>,
      <>
        <strong>Phối hợp với backend, tester, BA</strong> để đảm bảo tiến độ
      </>,
      <>Tối ưu hiệu năng và xử lý lỗi giao diện.</>,
    ],
  },
  {
    title: 'Startup Hundr Tech',
    position: 'Front End Developer',
    size: 'Team size: 3-5',
    description: (
      <>
        Thực hiện migrate UI của hệ thống web từ nền tảng cũ
        <strong> (HTML/CSS/jQuery)</strong> sang <strong>ReactJS</strong>. Dự án
        tập trung vào cải thiện hiệu suất, tính tái sử dụng, khả năng bảo trì và
        khả mở của mã nguồn.
      </>
    ),
    bullets: [
      <>
        Phát triển giao diện với <strong>ReactJS & Bootstrap</strong> theo task
        trên Jira
      </>,
      <>
        <strong>Đề xuất & triển khai giải pháp kỹ thuật</strong> phù hợp yêu cầu
      </>,
      <>
        <strong>Phối hợp backend</strong> khi dự án cần migrate toàn bộ hệ thống
      </>,
      <>Tối ưu hiệu năng và xử lý lỗi giao diện.</>,
    ],
  },
]

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
    <p>{description}</p>
    <ul className="space-y-1">
      {bullets.map((item, index) => (
        <WorkListItem key={index}>{item}</WorkListItem>
      ))}
    </ul>
  </article>
)

export default function Career() {
  return (
    <Board title="Career">
      {jobData.map((job, index) => (
        <JobDescription key={index} {...job} />
      ))}
    </Board>
  )
}
