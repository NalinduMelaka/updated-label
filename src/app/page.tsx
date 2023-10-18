import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/Sidebar'
import Image from 'next/image'
import Maini from './components/Maini'
import { MyProvider } from './context/MyContext'


export default function Home() {
  return (
    <div className="h-screen relative">
    <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
      <Sidebar apiLimitCount={0} isPro={false} />
    </div>
    <main className="md:pl-72 pb-10">
      <MyProvider >
      
      <Maini />
      </MyProvider>
     
    </main>
  </div>
  )
}
