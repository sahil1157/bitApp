import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import LowerBoxes from './LowerBoxes'

const BodyComp = () => {
  return (
    <>

      {/* dashboard icons */}
      <div className='bg-slate-800 sm:text-center min-h-screen px-3   '>
        <div className='text-white flex flex-cols px-[10%] py-[3%]'>
          <BiSolidDashboard size={35} />
          <h2 className='text-2xl'>Dashboard</h2>

        </div>

        {/* end of dash board items */}


        <div className='px-[10%] text-xl text-slate-400 space-y-5 text-left '>
          <h3>Main Balance</h3>
          <p className='text-4xl text-yellow-200 font-bold '>12,232 METABT</p>
          {/* box sizing */}
          <div className=' grid grid-cols-1 md:w-auto md:grid-cols-2 lg:flex gap-8'>
            <div className='box border-2 h-44 w-72 border-slate-800 rounded text-center bg-yellow-400 text-white'>
              <p className='text-lg font-bold text-white pt-4 '>Todays Staking Reward</p>
              <hr className='m-4' />
              <p className='font-bold'>0.00</p>
              <h2 className='font-bold'>METABT</h2>
            </div>
            <div className='box border-2 h-44 w-72 border-slate-800 rounded text-center bg-yellow-400 text-white'>
              <p className='text-lg font-bold text-white pt-4 '>Todays Affiliate Reward</p>
              <hr className='m-4' />
              <p className='font-bold'>0</p>
              <h2 className='font-bold'>METABT</h2>
            </div>
            <div className='box border-2 h-44 w-72 \ rounded text-center bg-slate-700 border-slate-700 text-white'>
              <p className='text-lg font-bold text-white pt-4 '>Total Staking Reward</p>
              <hr className='m-4' />
              <p className='font-bold'>0</p>
              <h2 className='font-bold'>METABT</h2>
            </div>
            <div className='box border-2 h-44 w-72 bg-slate-700 border-slate-700 rounded text-center text-white'>
              <p className='text-lg font-bold text-white pt-4 '>Total Affiliate Reward</p>
              <hr className='m-4' />
              <p className='font-bold'>0</p>
              <h2 className='font-bold'>METABT</h2>
              {/* end of 4 boxes */}
            </div>
          </div>
          {/* starting of 3 boxes */}
          <LowerBoxes />
        </div>
      </div>




    </>


  )
}

export default BodyComp
