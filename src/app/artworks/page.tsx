'use client'
import { Sidebar } from '../../components/Sidebar'
import React, { useState, useEffect } from 'react'
import { MobileSidebar } from '../components/Mobile-sidebar'
import { createstroke } from '../actions/api/createstroke'
import { getstrokedata } from '../actions/api/getstrokedata'

type Props = {}
type Stroke = {
  strokeno: string;
  createdAt: Date;
  updatedAt: Date;
}

const Page = (props: Props) => {
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [strokeno, setStrokeno] = useState('');
  console.log('stroke is running on artwork')

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
   }
  }catch (error) {
     console.error('Error:', error);
   }
        
 };

 useEffect(() => {
  const fetchStroke = async () => {
    const fetchedStrokes = await getstrokedata();
    const sortedStroke = [...fetchedStrokes].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    setStrokes(sortedStroke);
    console.log('useEffect is running!')
  };
  fetchStroke();
},[]);
 console.log(strokes);

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
    <div className='grid grid-cols-2 grid-rows-2 h-full'>
    <div className=' flex flex-col border-8 border-gray-200 rounded-sm  m-1 '>
      <div className='w-full h-12 flex flex-col mt-1'>
        <div className='w-full h-6 p-0 text-sm flex flex-row sm:h-6'>
          <div><label className='mx-2'>STROKE NO</label>
          <select className='md:w-24 mx-2 sm:w-12'>
            {strokes.map( stroke => (
              <option key={stroke.strokeno} value={stroke.strokeno}>{stroke.strokeno}</option>
            ))}
          </select>
          </div>
          <div><label>CONT.NO</label><select className='md:w-24 ml-2 sm:w-12'></select></div>
        </div>
        <div className='w-full h-6 p-0 text-sm'>
          <label className='mx-2'>ART NO</label><select className='md:w-80  ml-2 sm:w-48'></select>
        </div>
      </div>
      <div className='w-full h-full flex flex-col'>
        <div className='bg-sky-700 col text-white sm:h-6'><p className='ml-2'>FLM DATA</p></div>
        <div className='flex justify-center items-center h-full text-6xl'><p>FZ</p></div>
      </div>
    </div>
    <div className='row-span-2 flex flex-col border-8 border-gray-200 rounded-sm m-1'>
      <div className='w-full bg-sky-700 col text-white h-6 flex justify-between text-sm'>
        <label className='mx-1'><input type="radio" className='mx-1'/>TWIN</label>
        <label className='mx-1'><input type="radio" className='mx-1'/>BOOKLET</label>
        <label className='mx-1'><input type="radio" className='mx-1'/>LOOPFOLD</label>
      </div>
      <div className='w-full h-full flex justify-center items-center  text-6xl text-white'><p className='text-center'>ARTWORK PREVIEW</p></div>
      <div className='w-full bg-sky-700 h-14 flex flex-row justify-center'>
        <div className='text-xs text-center flex flex-col  m-1 items-start overflow-hidden '>
          <div>COLOR</div>
          <div><select className='md:w-24'></select></div>
          <div><input type='checkbox'/><label>TEXT OUTLINE</label></div>
        </div>
        <div className='hover:bg-sky-500 text-xs text-center flex items-center p-1 text-white m-1 border border-white'>PREVIEW ARTWORK</div>
        <div className='hover:bg-sky-500 text-xs text-center flex items-center p-1 text-white m-1 border border-white'>ALL SIZES</div>
        <div className='hover:bg-sky-500 text-xs text-center flex items-center p-1 text-white m-1 border border-white'>UPLOAD</div>
        <div className='hover:bg-sky-500 text-xs  flex items-center p-1 m-1 border justify-center border-white md:w-16 font-medium'>OPEN</div>
      </div>
    </div>
    <div className=' flex flex-col border-8 border-gray-200 rounded-sm m-1 '>
      <div className='w-full h-full flex flex-col'>
        <div className='bg-sky-700 col text-white sm:h-6'><p className='ml-2'>PDF LAYOUTS GALLERY</p></div>
        <div className='flex justify-center items-center h-full text-6xl'><p>M&S</p></div>
      </div>
      <div className='w-full h-6 bg-sky-700 col text-white flex justify-between text-sm'>
        <label><input type="radio" className='m-1'/>UK</label>
        <label><input type="radio" className='m-1'/>INTERNATIONAL</label>
        <label><input type="radio" className='m-1'/>AIO</label>
      </div>
      <div className='w-full bg-sky-700 col text-white border-2  border-slate-100 text-center hover:bg-sky-500'><p>PROCESS ARTWORK</p></div>
    </div>
    </div>
   
  </main></div>
  )
}

export default Page