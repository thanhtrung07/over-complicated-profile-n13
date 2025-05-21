import Board from '@/components/Board'
import { Button } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, LinkedIn, Github } from '@/assets/svgs'
import clsx from 'clsx'
import myImage from '@/assets/images/CV1_Transparent.png'
import { JSX } from 'react'

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

const HeadDivider = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'border-border dark:border-dark-border hidden h-5 flex-1 sm:block',
      'rounded-tl-md border-t',
      className
    )}
  />
)

const ContactIcon = ({ name, url, icon, backgroundClass }: TContact) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    className={clsx(
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
  return (
    <Board>
      <div className="flex h-full w-full flex-col items-center gap-4 py-1">
        {/* Title */}
        <div className="flex w-full items-end justify-center gap-4">
          <HeadDivider />
          <h1 className="text text-4xl font-bold">Greetings!</h1>
          <HeadDivider className="rounded-tr-md" />
        </div>

        {/* Profile Section */}
        <div className="flex w-full flex-col items-center justify-around gap-4 sm:flex-row sm:py-1">
          <div className="order-2 flex flex-col items-center sm:order-1">
            <h1 className="text-3xl font-bold">
              <span className="text-accent-dark dark:text-accent-light">
                Hi
              </span>
              , I am Nguyen
            </h1>
            <h1
              className={clsx(
                'text-accent-dark dark:text-accent-light',
                'text-right align-bottom text-3xl font-bold sm:translate-x-15'
              )}
            >
              Thanh Trung
            </h1>
          </div>
          <Image
            width={128}
            height={128}
            className="border-accent bg-primary-light order-1 rounded-full border-2 text-center sm:order-2 sm:ml-12"
            src={myImage}
            alt="Profile"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="text-justify">
              Tôi là lập trình viên với 4 năm kinh nghiệm về Javascript. Thích
              code và luôn hướng đến những hệ thống đơn giản nhưng tối ưu và
              chuyên nghiệp. Tôi là một người nghiêm túc với công việc, hòa đồng
              và có tinh thần đồng đội cao.
            </p>
            <p className="text-justify">
              Châm ngôn:{' '}
              <span className="italic">
                {"When I take on a job, I make sure it\'s done."}
              </span>
            </p>
          </div>
          <SkillLink category="Front-end">
            <>
              {' Có kinh nghiệm làm việc với '}
              <span className="font-bold">
                ReactJS (NextJS, Hook, Redux Toolkit), Bootstrap, Antd
                ,TailwindCSS, Axios và các công nghệ khác.
              </span>
            </>
          </SkillLink>
          <SkillLink category="Back-end">
            <>
              {' Có hiểu biết về '}
              <span className="font-bold">
                NodeJS (ExpressJS), MongoDB, MySQL, Redis và các công nghệ khác.
              </span>
            </>
          </SkillLink>
        </div>

        {/* Contacts + Resume */}
        <div className="xs:flex-row xs:gap-0 mt-2 flex w-full flex-col items-center justify-between gap-6">
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
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </Board>
  )
}
