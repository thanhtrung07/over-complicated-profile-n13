import clsx from 'clsx'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
  className?: string
}

const AsymCurveDivider = ({ className = '' }: IProps) => {
  return (
    <div className={twMerge('hidden h-[16px] md:flex', className)}>
      <div className="relative flex-1">
        <div
          className={clsx(
            'absolute top-[7px] left-0 h-[9px] w-full rounded-tl-lg',
            'border-border dark:border-dark-border border-t-2'
          )}
        />
      </div>
      <div className="relative flex-1">
        <div
          className={clsx(
            'absolute top-0 left-0 h-[9px] w-full rounded-br-lg',
            'border-border dark:border-dark-border border-b-2'
          )}
        ></div>
      </div>
    </div>
  )
}

export default memo(AsymCurveDivider)
