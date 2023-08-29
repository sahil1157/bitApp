import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import ArrayForTransactions from './ArrayForTransactions'

const  THistory = () => {

  const [display, setDisplay] = useState(false)
  const showMenu =()=>{
    setDisplay (!display)
  }

  const [remark, setRemark] = useState(false)

  const showRemark =()=>{
    setRemark (!remark)
  }

  
  return (
    <>
    <div className=''>
      <h1 className='font-bold text-2xl text-slate-400 '>My Transaction History</h1>

      <form action="text">
        <input  type="search" className='placeholder:text-sm text-slate-400 mt-7 bg-sky-950 border-slate-500 border-2 rounded-md placeholder: p-2 focus:outline-none justify-start w-full h-14' placeholder='Transaction Number' />

        {/* <BsSearch className='pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3'/> */}
          

      </form>

     <div className='flex flex-row gap-5'>
      {/* <div className='pt-5'> */}
      <div className='pt-5'>
        <button className='  relative text-slate-400 flex items-center rounded-md h-10 w-36 bg-sky-950 justify-center'>
        
        <p className='px-4'>Wallet</p>

        <div>
        <span className=' b-l w-5 h-5'><AiFillCaretDown onClick={showMenu}/></span>


        <div className={` absolute ${ display ? 'block top-full'  : 'hidden ease-in-out duration-500'} top-full w-max bg-white shadow-md mt-1 rounded`}>
          <ul className='text-left border rounded overflow-hidden'>
            <li className='px-4 py-1 hover:bg-gray-500 hover:text-white  border-b'> DepositWallet</li>
            <li className='px-4 py-1 hover:bg-gray-500 hover:text-white border-b'> Staking Wallet</li>
            <li className='px-4 py-1 hover:bg-gray-500 hover:text-white border-b'> Affiliate Wallet</li>
            <li className='px-4 py-1 hover:bg-gray-500 hover:text-white border-b'> Principle Wallet</li>
            {/* <li className='px-4 py-1 hover:bg-gray-100 '> Deposit</li> */}
          </ul>
        </div>

        </div>
        {/* </div> */}
        
        </button>
        </div>


      {/* remark */}

      
      <div className='pt-5 '>
        <button className='relative text-slate-400 flex items-center rounded-md h-10 w-36 bg-sky-950 justify-center'>
        
        <p className='px-4'>Remark</p>

        <div>
        <span className=' b-l w-5 h-5'><AiFillCaretDown onClick={showRemark}/></span>


        <div className={` absolute ${ remark ? 'block overflow-auto'  : 'hidden ease-in-out duration-500'} top-full w-max bg-white shadow-md mt-1 rounded`}>
          <ul className='text-left border rounded '>
            <li className='px-4 py-1 hover:text-white  hover:bg-gray-500 border-b'> Affiliaye reward</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Balance add</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Capital Reward</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Deposit Wallet</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Interest</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Invest</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Level not fulfilled</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Withdraw</li>
            <li className='px-4 py-1 hover:text-white hover:bg-gray-500 border-b'> Withdraw Reject</li>
            <li className='px-4 py-1 hover:bg-gray-100 '> Deposit</li>
          </ul>
        </div>


{/*  */}

{/*  */}



        </div>
        
        </button>
        </div>

      {/* remark */}
        
        
        </div>
        {/* </div> */}
        <hr  className='h-full border-gray-400'/>
      

      <div>
        <ArrayForTransactions/>
        
      </div>


    
    </div>
    </>
  )
}

export default THistory
