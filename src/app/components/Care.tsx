import React from 'react'
import Userinputforcare from './Userinputforcare'
import Caredata from './Caredata'

type Props = {}

const Care = (props: Props) => {
  return (
    <table className="border-collapse border border-slate-500 text-xs bg-white font-mono">
      <thead className='sticky top-0 border bg-white z-10'>
        <tr>
          <th className='border border-black w-14'>Ref No</th>
          <th className='border border-black w-14'>Wash Symbol</th>
          <th className='border border-black w-28'>Fibre</th>
          <th className='border border-black w-14'>Zoodes</th>
          <th className='border border-black w-14'>COO</th>
          <th className='border border-black w-14'>Caretext</th>
          <th className='border border-black w-14'>MPART/FW</th>
        </tr>
      </thead>
      <tbody>
        <Caredata />
        <Userinputforcare />
      </tbody>
    </table>
  )
}

export default Care