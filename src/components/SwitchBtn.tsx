import { Switch } from '@headlessui/react'
import clsx from 'clsx'

interface ISwitchBtnProps {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}

export default function SwitchBtn(props: ISwitchBtnProps) {
  const { enabled, setEnabled } = props
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        'group relative flex h-7 w-14 cursor-pointer rounded-full p-1 ease-in-out',
        'bg-white/10',
        'focus:not-data-focus:outline-none',
        'data-checked:bg-white/10',
        'data-focus:outline data-focus:outline-white'
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg ring-0',
          'transition duration-200 ease-in-out',
          'translate-x-0 group-data-checked:translate-x-7'
        )}
      />
    </Switch>
  )
}
