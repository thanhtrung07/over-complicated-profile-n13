import { twMerge } from 'tailwind-merge'
import RouteTitle from './RouteTitle'
import { memo } from 'react'

interface IProps {
  children: React.ReactNode
  className?: string
  title: string
}

const Board = ({ children, className = '', title }: IProps) => {
  return (
    <section
      className={twMerge(
        'bg-foreground dark:bg-dark-foreground h-full w-full max-w-3xl rounded-xl px-4 py-5',
        'flex h-full w-full flex-col items-center gap-4',
        'shadow-copy-light dark:border-dark-border shadow-lg/20 dark:border dark:shadow-none',
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

export default memo(Board)
