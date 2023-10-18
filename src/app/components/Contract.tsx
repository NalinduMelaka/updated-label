
import React, { useState } from 'react'
import Userinputforcon from './Userinputforcon';
import Contractdata from './Contractdata';

type Props = {
  strokeno: string;
}

const Contract = ({ strokeno }: Props)  => {
  const stroke = strokeno;
  
 
  return (
    <div>
      <table className="border-collapse border border-slate-500 text-xs bg-white relative font-mono">
        <thead className='sticky top-0 border  bg-white z-10 pt-0'>
        <tr>
          <th className='border border-black  w-14 '></th>
          <th className='border border-black  w-14 '>StrokeNO</th>
          <th className='border border-black  w-14 '>Contract No</th>
          <th className='border border-black  w-14 '>SEASON</th>
          <th className='border border-black  w-14 '>TDEPT</th>
          <th className='border border-black  w-14 '>PRODESC</th>
          <th className='border border-black  w-14 '>STROKE_DESC</th>
        </tr>
        </thead>
        <tbody>
          <Contractdata strokeno = {stroke}/>
          <Userinputforcon strokeno={stroke} />

     
        </tbody>
      </table>
    </div>
  )
}

export default Contract