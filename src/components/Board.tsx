import clsx from 'clsx'

interface IProps {
  children?: React.ReactNode
  className?: string
}

export default function Board({ children, className }: IProps) {
  return (
    <div
      className={clsx(
        'bg-foreground dark:bg-dark-foreground h-full w-full max-w-3xl rounded-xl px-4 py-5',
        'flex h-full w-full flex-col items-center gap-4',
        className
      )}
    >
      {children ?? <></>}
    </div>
  )
}
