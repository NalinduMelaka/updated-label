'use client'
import { useState } from 'react'
import { createstroke } from '../actions/api/createstroke'

import { complete } from "@/redux/features/data-slice"

type Props = {} 

const Strokein = (props: Props) => {
  const [strokeno, setStrokeno] = useState('');
  const [showtable1, setShowtable1] = useState(false);

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
    <>
      <input onChange={(e) => setStrokeno(e.target.value)} className='focus:border-blue-400 border text-black w-20 mx-2'/>
          <button className='border hover:bg-sky-700' onClick={handleInputChange} >SEARCH ORDER</button>
    </>
  )
}

export default Strokein