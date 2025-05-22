import clsx from 'clsx'

interface IProps {
  title: string
}

export default function RouteTitle({ title }: IProps) {
  const HeadDivider = ({ className }: { className?: string }) => (
    <div
      className={clsx(
        'border-border dark:border-dark-border hidden h-5 flex-1 sm:block',
        'rounded-tl-md border-t',
        className
      )}
    />
  )

  return (
    <div className="flex w-full items-end justify-center gap-4">
      <HeadDivider />
      <h1 className="text text-4xl font-bold">{title}</h1>
      <HeadDivider className="rounded-tr-md" />
    </div>
  )
}
