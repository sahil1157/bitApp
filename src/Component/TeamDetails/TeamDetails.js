import React from 'react'
import Pool from './Pool'

const TeamDetails = () => {
  return (
    <div style={{ paddingInline: '5%' }} className='py-3 bg-sky-950 pt-7'>
      <div >
        <div className='' >
          <h1 className='text-3xl font-sans text-slate-300 '>My REFERALS</h1>
        </div>

        <div className='pt-6'>

          <div className='box-content border-sky-950 border-2 rounded-md h-44 lg:h-32 w-auto md:w-full lg:w-full bg-yellow-400 '>

            <p className='text-2xl text-black text-start pt-3 px-2 font-sans'>Refer & Enjoy Rewards</p>
            <h6 className='text-sm text-black px-2 font-sans'>You'll get rewards against your referral's activities. Level has been decided by the <b><i>BTCASH</i></b> authority. If you reach the level, you'll get rewards.</h6>

            <br />
            
            <div className='flex flex-row px-2 gap-4'>
              <div>
                <form action="text">
                  <input type="text" name="" id="" placeholder='https://phpstack-972264-3513223.cloudwaysapps.com?reference=VUETEST'/>
                </form>
                </div>
                <div><h1 className=''>copy</h1></div>
              
            </div>
          </div>
        </div>

        <div className='flex flex-row  text-black font-sans text-center gap-5 p-3 font-bold '>
          <button className='bg-yellow-400 rounded-full w-20 h-8'>Referrals</button>
          <button className='bg-slate-600 text-slate-700 rounded-full w-20 h-8 hover:text-black hover:bg-yellow-400'>TreeView</button>
        </div>
        
      </div>
      <Pool/>
      
    </div>
    

  )
}

export default TeamDetails
