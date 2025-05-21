export default function Board({
  children,
}: Readonly<{
  children?: React.ReactNode
}>) {
  return (
    <div className="bg-foreground dark:bg-dark-foreground h-full w-full rounded-xl p-4">
      {children ?? <></>}
    </div>
  )
}
