import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about-me" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">This is a sample Next.js application.</p>
      <p className="text-lg">It uses Tailwind CSS for styling.</p>
      <p className="text-lg">Enjoy coding!</p>
    </div>
  );
}
