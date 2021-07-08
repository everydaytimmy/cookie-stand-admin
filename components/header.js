import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between px-8 py-6 mx-auto bg-green-500">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
      <nav className="flex ml-96">
        <Link href="/overview">
          <a className="px-3 py-3 bg-gray-400 rounded-lg">Overview</a>
        </Link>
      </nav>
    </header>
  )
}