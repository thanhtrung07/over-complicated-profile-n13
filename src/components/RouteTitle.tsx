import { twMerge } from 'tailwind-merge'

interface IProps {
  title: string
}

export default function RouteTitle({ title }: IProps) {
  const HeadDivider = ({ className }: { className?: string }) => (
    <div
      className={twMerge(
        'border-border dark:border-dark-border hidden h-5 flex-1 border-t-2 sm:block',
        className
      )}
    />
  )

  return (
    <header className="flex w-full items-end justify-center gap-4 pt-1">
      <HeadDivider className="rounded-tl-md border-t" />
      <h1 className="text text-4xl font-bold">{title}</h1>
      <HeadDivider className="rounded-tr-md border-t" />
    </header>
  )
}
