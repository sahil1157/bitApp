import React from 'react'
import { TfiLayoutGrid4 } from 'react-icons/tfi'
import { PiSmileySadDuotone } from 'react-icons/pi'
import PageTop from '../Component/PageTop'

const MyStaking = () => {
  return (
    <>

      {/* <div className='flex flex-col '>
    <div className='h-screen bg-slate-700 text-white px-40 py-10 flex flex-row space-x-2'>
      <TfiLayoutGrid4 size={30}/> 
      <h1 className='font-bold text-2xl'>ALL STAKING</h1>
    </div>
    


    </div> */}

      <div className=' bg-sky-950 h-[100%] lg:h-screen flex flex-col'>

        <div className='  text-white flex flex-row lg:flex-row py-14 space-x-2 px-8'>
          <TfiLayoutGrid4 size={30} />
          <h1 className='text-2xl font-sans'>ALL STAKING</h1>
        </div>
        <div className='grid grid-auto-fit gap-8 md:justify-evenly place-items-center'>
          <div className='box-content bg-yellow-400 text-white w-56 md:w-64 lg:w-96 rounded h-40 text-center '>
            <h3 className='text-center py-3 font-bold uppercase'>Closed WithDrawal</h3>

            <hr className='m-3' />
            <h3 className='font-bold text-3xl'>0</h3>
            <h2 className='font-bold text-2xl'>METABT</h2>
          </div>
          {/* 2nd box */}
          <div className='box-content   bg-yellow-400 text-white w-56 md:w-64 lg:w-96 rounded h-40 text-center '>
            <h3 className='text-center py-3 font-bold uppercase'>Active STAKING</h3>

            <hr className='m-3' />
            <h3 className='font-bold text-3xl'>0</h3>
            <h2 className='font-bold text-2xl'>METABT</h2>
          </div>
          {/* end of 2nd box */}

          {/* starting of 3rd box */}
          <div className='box-content   bg-yellow-400 text-white md:w-64 w-56 lg:w-96 rounded h-40 text-center '>
            <h3 className='text-center py-3 font-bold'>ALL STAKING</h3>

            <hr className='m-3' />
            <h3 className='font-bold text-3xl'>0</h3>
            <h2 className='font-bold text-2xl'>METABT</h2>
          </div>
          {/* End of 3rd box */}
        </div>
        <div className='px-12' >
          <div className='py-10 '>
            <p className='text-white font-sans text-2xl'>Active Plans</p>
          </div>
          <div className='flex flex-row gap-8 pb-1'>
            <button className='box-border w-20 rounded-full bg-yellow-400 text-black'>
              <h3 className='font-bold text-sm text-center py-2'>Running</h3>
            </button>
            <button className='box-border w-20 rounded-full hover:bg-yellow-400 hover:text-black bg-slate-800 text-slate-400'>
              <h3 className='font-bold text-sm text-center py-2'>Pending</h3>
            </button>
            <button className='box-border w-20 rounded-full bg-slate-800 text-slate-400 hover:bg-yellow-400 hover:text-black'>
              <h3 className='font-bold text-sm text-center py-2'>Reject</h3>
            </button>
          </div>
          <div className='py-4'>
            <div className=' py-2 justify-center box-content w-full  bg-white'>
              <div className='flex flex-row justify-center py-1 gap-2'>
                <PiSmileySadDuotone className='rounded-full text-slate-500' size={30} />
                <h2 className='font-medium text-slate-600 text-2xl'>NOT FOUND</h2>
              </div>
            </div>

            {/* <button className='w-full bg-white h-20'>data found</button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default MyStaking
