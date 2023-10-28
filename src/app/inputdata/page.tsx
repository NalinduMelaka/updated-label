'use client'
import React, { useState } from 'react'
import { Sidebar } from '../../components/Sidebar'
import { MobileSidebar } from '../components/Mobile-sidebar'
import { createstroke } from '../actions/api/createstroke'

type Props = {}

const page = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [strokeno, setStrokeno] = useState('');

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
   }
  }catch (error) {
     console.error('Error:', error);
   }
        
 };
  
  return (
    <div className="h-screen relative"> 
    <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
    <Sidebar apiLimitCount={0} isPro={false} />
  </div>
  <main className="md:pl-72 bg-blue-200 h-full flex flex-col">
    <div className='bg-sky-700 col-span-2 h-11 flex justify-between text-slate-100 text-sm'>
      <MobileSidebar apiLimitCount={0} isPro={false} />
      <div className='border m-1 p-1 '>
          <label>STROKE NO</label>
          <input placeholder='  Search ...' onChange={(e) => {e.preventDefault()
                                  setStrokeno(e.target.value)
                                  }} className='focus:border-blue-400 border text-black w-25 mx-2 hover:opacity-95'/>
          <button className='border hover:bg-sky-400 rounded' onClick={handleInputChange} >SEARCH ORDER</button>
          </div>
    </div>
  </main></div>
  )
}

export default page