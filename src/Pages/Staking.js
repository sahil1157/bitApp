import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'

const Staking = () => {
  return (
    <>
      <div className='bg-sky-950 h-screen px-11 md:px-20 lg:32 '>
        <div className='text-white flex flex-row  py-11 gap-2 '>
          <FaLayerGroup size={35} />
          <div className='grid grid-cols-1'>
            <h1 className='font-sans text-3xl'>StakingPlan </h1>
            <h4 className='text-yellow-300'>My Staking</h4>
          </div>
        </div>
        <div className=' grid grid-cols-1 place-items-center lg:grid-cols-2 md:px-24 gap-8'>
          <div className='grid grid-cols-1 md:flex-col gap-8 md:gap-10'>
            <div className=' grid grid-cols-1 box border-2 w-fit lg:w-96  h-40'>
              <div className=' flex flex-row justify-between p-5 '>
                <div>
                  <h5 className='box border-2 bg-yellow-300 text-black rounded-full w-32 text-center font-bold'>Flexible</h5>
                  <p className='text-sans text-lg text-slate-300 pl-4'>24HOURS</p>
                </div>
                <div>
                  <h1 className='text-slate-300 font-sans text-4xl'>0.3000%</h1>
                  <div />
                </div>
              </div>

              <div className='flex flex-row justify-center p-1'>
                <button className='bg-slate-700 w-96 text-yellow-400 font-bold py-2 px-4 border border-yellow-300 rounded'>Stake</button>
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className='grid grid-cols-1 gap-8'>
            <div className=' grid grid-cols-1 box border-2 w-fit lg:w-96 h-40'>
              <div className=' flex flex-row justify-between p-5'>
                <div>
                  <h5 className='box border-2 bg-yellow-300 text-black rounded-full w-32 text-center font-bold'>Flexible</h5>
                  <p className='text-sans text-lg text-slate-300 pl-4'>24HOURS</p>
                </div>
                <div>
                  <h1 className='text-slate-300 font-sans text-4xl'>0.3000%</h1>
                  <div />
                </div>
              </div>
              <div className='flex flex-row justify-center p-1'>
                <button className='bg-slate-700 w-96 text-yellow-400 font-bold py-2 px-4 border border-yellow-300 rounded'>Stake</button>
              </div>
            </div>
          </div>
          {/* completion of 2nd box */}
          {/* starting of 3rd box */}
          <div className='grid grid-cols-1 gap-8'>
            <div className=' grid grid-cols-1 box border-2 w-fit lg:w-96'>
              <div className=' flex flex-row justify-between p-5'>
                <div>
                  <h5 className='box border-2 bg-yellow-300 text-black rounded-full w-32 text-center font-bold'>Flexible</h5>
                  <p className='text-sans text-lg text-slate-300 pl-4'>24HOURS</p>
                </div>
                <div>
                  <h1 className='text-slate-300 font-sans text-4xl'>0.3000%</h1>
                  <div />
                </div>
              </div>
              <div className='flex flex-row justify-center p-1'>
                <button className='bg-slate-700 w-96 text-yellow-400 font-bold py-2 px-4 border border-yellow-300 rounded'>Stake</button>
              </div>
            </div>
          </div>
          {/* Completion of 3rd box */}

          {/* starting of 4th box */}
          <div className='grid grid-cols-1 gap-8'>
            <div className=' grid grid-cols-1 box border-2 w-fit lg:w-96'>
              <div className=' flex flex-row justify-between p-5'>
                <div>
                  <h5 className='box border-2 bg-yellow-300 text-black rounded-full w-32 text-center font-bold'>Flexible</h5>
                  <p className='text-sans text-lg text-slate-300 pl-4'>24HOURS</p>
                </div>
                <div>
                  <h1 className='text-slate-300 font-sans text-4xl'>0.3000%</h1>
                  <div />
                </div>
              </div>

              <div className='flex flex-row justify-center p-1'>
                <button className='bg-slate-700 w-96 text-yellow-400 font-bold py-2 px-4 border border-yellow-300 rounded'>Stake</button>
              </div>
            </div>
          </div>
          {/* completion of 4th box */}
        </div>


      </div>

    </>
  )
}

export default Staking
