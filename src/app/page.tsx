import WeddingLandingPage from '@/components/WeddingLandingPage'
import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

export default function LandingPage() {
  return (
    <main className={clsx(inter.className, 'bg-red-500')}>
      <WeddingLandingPage />
    </main>
  )
}
