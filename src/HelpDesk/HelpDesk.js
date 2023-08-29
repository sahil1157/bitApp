import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BiHelpCircle } from 'react-icons/bi'
import HD2 from './HD2'
import Attachments from './Attachments'

const HelpDesk = () => {
  return (
    <>
      <div style={{ paddingInline: '10%' }} className='bg-sky-950 pt-5 max-h-fit'>
        <div className='flex gap-2 text-white '>
          <span><BiHelpCircle size={40} className='' /></span>
          <h1 className=' text-2xl font-sans'>HELP DESK</h1>
        </div>

        {/* button */}
        <div className='pt-9'>
          <div className='lg:flex grid grid-cols md:flex md:flex-row lg:flex-row gap-4  '>
            <button className='bg-yellow-400 h-9 w-32 text-black text-xs font-bold rounded-full '>New Ticket Request</button>
            <button className='bg-gray-500 text-xs font-bold h-9 w-32 text-gray-300 hover:bg-yellow-400 hover:text-black rounded-full  '>Ticket Request</button>
          </div>
        </div>
        {/* button */}

        <HD2/>
        <Attachments/>
      </div>
    </>
  )
}

export default HelpDesk
