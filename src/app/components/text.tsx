import React from 'react'

type Props = {}

const text = (props: Props) => {
  return (
    <div className='h-full'> 
     {/* 
      <div className='flex flex-row justify-between bg-cyan-600 text-slate-100  content-center'>
        <div className='flex flex-row items-center justify-between'>
        <MobileSidebar apiLimitCount={0} isPro={false} />
          <div className='border m-1 p-3'>
          <label>STROKE NO</label>
          <input onChange={(e) => {e.preventDefault()
                                  setStrokeno(e.target.value)}} className='focus:border-blue-400 border text-black w-20 mx-2'/>
          <button className='border hover:bg-sky-700' onClick={handleInputChange} >SEARCH ORDER</button>
          </div>
         <div>
          <div className='flex flex-col'>RUN MODE</div>
          <div className='border'><input type='radio' id='1'/><label>AUTO</label><input type='radio' /><label>MANUAL</label></div>
         </div>
          </div>
      </div>

    <div className='lg:grid grid-cols-1 grid-rows-1 lg:h-[500px]'>
      <div className='col-span-1 bg-blue-300'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Contract strokeno={strokeno} />}</div>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Care/>}</div>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Other/>}</div>
          <div className='basis-3/6 bg-slate-200 overflow-auto'>{showtable1 && <Quantity/>}</div>
        </div>
      </div>
    </div>
      <div className='flex flex-row justify-center bg-blue-300'>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>PROCESS PROOF SHEET</button>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>UNKNOWN</button>
      </div>
      */}
    </div>
 
  )
}

export default text