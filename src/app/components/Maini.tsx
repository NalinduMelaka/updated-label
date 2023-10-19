'use client'
import Image from 'next/image'
import { useState } from 'react'

import { createstroke } from '../actions/api/createstroke'
import Contract from '../components/Contract';
import Strokein from './Strokein';
import Care from './Care';
import Other from './Other';
import Quantity from './Quantity'
import { useMyContext } from '../context/MyContext';
import { MobileSidebar } from '@/app/components/Mobile-sidebar';

export default function Maini() {
  const { state1, state2, setState1, setState2, setState3, setState4} = useMyContext();
  const [strokeno, setStrokeno] = useState('');
  const [showtable1, setShowtable1 ] = useState(false);
  console.log('stroke is running on maini')

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
     if(result === "Successfully created new strokeno"){
        setShowtable1(true);
     }
   }
  }catch (error) {
     console.error('Error:', error);
   }
        
 };


 

  return (
    <div className='h-full bg-blue-200 '> 
      <div className='flex flex-col'>
        <div className='flex bg-sky-700 h-11 justify-between text-slate-100 text-sm'>
        <MobileSidebar apiLimitCount={0} isPro={false} />
        <div className='border m-1 p-1 '>
          <label>STROKE NO</label>
          <input placeholder='  Search ...' onChange={(e) => {e.preventDefault()
                                  setStrokeno(e.target.value)
                                  setState1('')
                                  setState2(0);
                                  setState3(0);
                                  setState4(0);}} className='focus:border-blue-400 border text-black w-25 mx-2 hover:opacity-95'/>
          <button className='border hover:bg-sky-400 rounded' onClick={handleInputChange} >SEARCH ORDER</button>
          </div>
        </div>
        
        <div className='flex  h-28 border-8 bg-slate-200  border-white rounded-sm m-1 overflow-auto'>
            <div className='  ml-8 '>{showtable1 && <Contract strokeno={strokeno} />}</div>
        </div>
        <div className='flex bg-slate-200 h-24 border-8 border-white rounded-sm m-1  overflow-auto'>
           <div className=' ml-8 my-2'>{showtable1 && <Care/>}</div>
        </div>
        <div className='flex overflow-auto h-24 border-8 border-white rounded-sm m-1 bg-slate-200'>
             <div className='ml-8 my-2'>{showtable1 && <Other/>}</div>
        </div>
        <div className='flex bg-slate-200 h-56 border-8 border-white rounded-sm m-1 overflow-auto'>
              <div className='ml-8 my-2'>{showtable1 && <Quantity/>}</div>
        </div>

        <div className='fixed bottom-0 w-full '>
            <div className='flex flex-row justify-center bg-blue-300 text-slate-100 text-sm md:pr-72'>
            <button className='bg-sky-600 m-1 p-1 border-2 hover:bg-sky-400 border-white rounded'>PROCESS PROOF SHEET</button>
            <button className='bg-sky-600 m-1 p-1 border-2 hover:bg-sky-400 border-white rounded'>REQUEST ARTWORK</button>
            </div>
        </div>
      </div>
    </div>
  )
}


