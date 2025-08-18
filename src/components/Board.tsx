import { twMerge } from 'tailwind-merge'
import RouteTitle from './RouteTitle'

interface IProps {
  children: React.ReactNode
  className?: string
  title: string
}

export default function Board({ children, className, title }: IProps) {
  return (
    <section
      className={twMerge(
        'bg-foreground dark:bg-dark-foreground h-full w-full max-w-3xl rounded-xl px-4 py-5',
        'flex h-full w-full flex-col items-center gap-4',
        'animate-fade-in',
        className
      )}
    >
      <RouteTitle title={title} />
      <div className="flex h-full min-h-[60vh] w-full flex-col justify-around gap-4 py-1">
        {children}
      </div>
    </section>
  )
}
