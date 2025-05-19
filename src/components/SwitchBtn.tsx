import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'

interface ISwitchBtnProps {
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}

export default function SwitchBtn(props: ISwitchBtnProps) {
  const { enabled, setEnabled } = props
  return (
    <Switch
      title="Switch theme"
      checked={enabled}
      onChange={setEnabled}
      className={clsx(
        'group h-6.4 share-border-btns relative flex w-11 cursor-pointer rounded-full border p-1 ease-in-out',
        'bg-foreground/20 data-checked:bg-foreground/20',
        'focus:not-data-focus:outline-none',
        'data-focus:outline data-focus:outline-white'
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block size-4 rounded-full shadow-lg ring-0',
          'translate-x-0 transition duration-200 ease-in-out group-data-checked:translate-x-4.5'
        )}
      >
        {enabled ? (
          <Moon className="h-4 w-4 fill-slate-300 text-slate-400" />
        ) : (
          <Sun className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        )}
      </span>
    </Switch>
  )
}
