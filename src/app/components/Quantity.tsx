import React from 'react'
import Userinputforquntity from './Userinputforquntity'
import Quntitydata from './Quntitydata'

type Props = {}

const Quantity = (props: Props) => {
  return (
    <table className="border-collapse border border-slate-500 text-xs bg-white font-mono">
      <thead className='sticky top-0 border bg-white z-10'>
        <tr>
          <th className='border border-black  w-10'></th>
          <th className='border border-black  w-20'>Color Code</th>
          <th className='border border-black  w-20'>Color Name</th>
          <th className='border border-black  w-20'>UPC No</th>
          <th className='border border-black  w-20'>Primary Size</th>
          <th className='border border-black  w-20'>Secondary Size</th>
          <th className='border border-black  w-20'>Selling Price</th>
          <th className='border border-black  w-20'>ORDER QTY</th>
        </tr>
      </thead>
      <tbody>
        <Quntitydata />
        <Userinputforquntity />
      </tbody>
    </table>
  )
}

export default Quantity