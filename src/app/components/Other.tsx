import React from 'react'
import Userinputforother from './Userinputforother'
import Otherdata from './Otherdata'

type Props = {}

const Other = (props: Props) => {
  return (
    <table className="border-collapse border border-slate-500 text-xs bg-white font-mono">
      <thead className='sticky top-0 border bg-white z-10'>
        <tr>
          <th className='border border-black  w-14'>Ref No</th>
          <th className='border border-black  w-44'>LABEL_TYPE</th>
        </tr>
      </thead>
      <tbody>
          <Otherdata />
          <Userinputforother />
      </tbody>
    </table>
  )
}

export default Other