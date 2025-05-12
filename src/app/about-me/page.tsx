import Link from 'next/link'

export default function AboutMe() {
  return (
    <div>
      <Link className="underline" href={'/'}>
        go home
      </Link>
      <h1 className="text-3xl font-bold underline">About Me</h1>
    </div>
  )
}
