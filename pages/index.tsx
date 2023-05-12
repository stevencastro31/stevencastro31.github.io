import Image from 'next/image'
import { JetBrains_Mono } from 'next/font/google'
import Header from '../components/header'
import Body from '../components/body'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}
