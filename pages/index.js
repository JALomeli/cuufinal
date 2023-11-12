
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import FooTer from '../components/FooTer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <NavBar/>
    <FooTer/>
    </main>
  )
}
