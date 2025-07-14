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
import { JSX } from 'react'

const workflows = [
  'Testing & Debugging',
  'Git, Github, BitBucket for Teamwork',
  'Git Flow & Trunk-based strategies',
  'Responsive Web & App Development',
  'Agile/Scrum methodology',
  'Can use English for Work!',
]

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
    icon: <Express className="h-12 w-12" />,
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
  return (
    <Board title="Skills">
      <section>
        <p className="text-lg font-bold">Programming Languages:</p>
        <div className="xs:grid-cols-5 mt-3 grid w-full grid-cols-3 gap-y-4">
          {techUsed.map((techs) => (
            <TechIcons key={techs.techName} {...techs} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-lg font-bold">Workflows:</p>
        <ul className="mt-1 pl-4">
          {workflows.map((description, index) => (
            <li key={index} className="custom-tick-marker">
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Board>
  )
}
