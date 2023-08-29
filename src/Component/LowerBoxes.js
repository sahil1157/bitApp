import React from 'react'
import EndBox from './EndBox'

const LowerBoxes = () => {
  return (
    <>
    <div className=' grid grid-cols-1   md:grid-cols-2 gap-8 lg:flex'>
    <div className='box bg-white border-2 w-80 lg:w-96 h-20 rounded text-black'>
       <div className='flex p-5 justify-between'>
        <p className='text-3xl font-bold'>$</p>

        <div className=''> <p className='text-sm'>Total</p>
      <p className='text-lg'>Deposits</p></div>

      <div className=''>
        <p>123</p>
        <h4>Metabt</h4>
      </div>

        </div>

     
    </div>

<div className='box bg-white border-2 w-80 lg:w-96 h-20 rounded text-black'>
<div className='flex p-5 space-x-4 justify-between'>
 <p className='text-3xl font-bold'>$</p>

 <div className=''> <p className='text-sm'>Total</p>
<p className='text-lg'>Reward</p></div>

<div className=''>
 <p>0</p>
 <h4>Metabt</h4>
</div>

 </div>


</div>
<div className='box bg-white border-2 w-80 lg:w-96 h-20 rounded text-black '>
<div className='flex p-5 space-x-4 justify-between'>
 <p className='text-3xl font-bold'>$</p>

 <div className=''> <p className='text-sm'>Total</p>
<p className='text-lg'>Deposit</p></div>

<div className=''>
 <p>3,000</p>
 <h4>Metabt</h4>
</div>

 </div>
</div>
</div>


<EndBox/>
</>
  )
}

export default LowerBoxes
