'use client'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import SwitchBtn from './SwitchBtn'

const linkLists = [
  { url: '/about-me', name: 'About Me' },
  { url: '/career', name: 'Career' },
  { url: '/skills', name: 'Skills' },
  { url: '/interests', name: 'Interests' },
  { url: '/the-end', name: 'The end 123' },
]

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false)
  const [enabled, setEnabled] = useState<boolean>(false)
  const [lang, setLang] = useState<'en' | 'vi'>('en')

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'))
  }

  return (
    <nav
      className={clsx(
        'fixed z-10 w-full bg-gray-800 px-8 py-4 text-white',
        'md:flex md:min-h-screen md:max-w-64 md:py-8',
        'md:flex-1 md:flex-col md:justify-between'
      )}
    >
      <div className="flex items-center justify-between bg-gray-800 py-3 text-white md:hidden">
        <h1 className="text-xl font-bold">Trung07</h1>
        <div className="flex items-center space-x-4">
          <SwitchBtn enabled={enabled} setEnabled={setEnabled} />
          <button onClick={toggleLang} className="w-6">
            {` ${lang} `}
          </button>
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div>
        <div className="mb-13 hidden md:block">
          <h1 className="text-xl font-bold">Trung07</h1>
        </div>

        <ul className={`space-y-4 ${open ? 'mt-4 block' : 'hidden'} md:block`}>
          {linkLists.map((link) => (
            <li key={link.url}>
              <Link
                onClick={() => setOpen(false)}
                href={link.url}
                className="block hover:text-blue-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-4">
        <SwitchBtn enabled={enabled} setEnabled={setEnabled} />

        <button onClick={toggleLang} className="w-6 bg-amber-500">
          {` ${lang} `}
        </button>
      </div>
    </nav>
  )
}
