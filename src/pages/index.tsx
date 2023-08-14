import { Oswald } from 'next/font/google'
import Landing from './Landing'

const oswald = Oswald({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${oswald.className}`}
    >
      <Landing />
    </main>
  )
}
