// import React, { useState } from 'react'
// import { FaRegBell } from 'react-icons/fa6'
// import { FaBars } from 'react-icons/fa6'
// import {FaBitcoin} from 'react-icons/fa'
// import {GrClose} from 'react-icons/gr'


// const HeaderFile = () => {
//   const [Sidebar , SetSidebar] = useState(false)

// f
//   const ShowSidebar = ()=> {
//     SetSidebar(!Sidebar)
//   }

//   return (
//     <>
//     <div className='bg-yellow-300 h-14 w-100% flex justify-between pt-4 cursor-pointer px-6 '>




//    <FaBars className='h-7 w-7' onClick={ShowSidebar}/>
//     <FaBitcoin className='h-14 w-14 mt-3 text-yellow-400' />
//     <FaRegBell className='h-7 w-7'  />


//   </div>  
//   {/* hamburger opening */}

//   {/* {!nav ? <GrClose/> : '' } */}


//   <div div className='fixed left-0 top-0 w-[25%] h-full border-r bg-gray-700 border-r-gray-600 hidden'>

//   <div className='pl-40 pt-5'>
//   <GrClose size={25} className='cursor-pointer'/>
//  </div>

//     <ul className='pt-24 p-4 navbar' >
//       <NavLink to=''  className='p-4'>DashBoard</NavLink to='' >
//       <NavLink to=''  className='p-4' >Profile</NavLink to='' >
//       <NavLink to=''  className='p-4'>Staking</NavLink to='' >
//       <NavLink to=''  className='p-4'>MyStaking</NavLink to='' >
//       <NavLink to=''  className='p-4'>Wallet</NavLink to='' >
//       <NavLink to=''  className='p-4'>Transactions</NavLink to='' >
//       <NavLink to=''  className='p-4'>Team Details</NavLink to='' >
//       <NavLink to=''  className='p-4'>Help Desk</NavLink to='' >
//     </ul>
//   </div>




//     </>
//   )
// }

// export default HeaderFile


import React, { useState } from 'react'
import { FaRegBell } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa6'
import { FaBitcoin } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import BodyComp from './BodyComp'
import LowerBoxes from './LowerBoxes'
import { NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginSetup from './LoginSetup/LoginSetup'


const HeaderFile = () => {
  const [Sidebar, SetSidebar] = useState(false)


  const ShowSidebar = () => {
    SetSidebar(!Sidebar)
  }

  return (
    <>
      <div className='bg-yellow-300 h-14 w-100% flex justify-between pt-4 px-6 '>




        <FaBars className='h-7 w-7 cursor-pointer ' onClick={ShowSidebar} />
        <FaBitcoin className='h-14 w-14 mt-3 text-yellow-400' />
        <FaRegBell className='h-7 w-7 cursor-pointer' />


      </div>
      {/* hamburger opening */}

      {/* {!nav ? <GrClose/> : '' } */}


      <div style={{ zIndex: 10 }} className={`fixed ${Sidebar ? 'block' : 'hidden ease-in-out duration-500'}  left-0 top-0 w-[300px]  h-full border-r bg-gray-700 border-r-gray-600 `}>

        <div className='pl-60 pt-5'>
          <GrClose size={25} className='cursor-pointer' onClick={ShowSidebar} />
        </div>

        <div className=''>

          <ul className='pt-11 p-4 text-white transition-all duration-100 delay-100 grid grid-cols-1 ' >
            <NavLink to='/intro' className='p-3'>DashBoard</NavLink>
            <NavLink to='/profile' className='p-3' >Profile</NavLink >
            <NavLink to='/staking' className='p-3'>Staking</NavLink  >
            <NavLink to='/mystaking' className='p-3'>MyStaking</NavLink >
            <NavLink to='/wallet' className='p-3'>Wallet</NavLink>
            <NavLink to='/balancetransfer' className='p-3'>BalanceTransfer</NavLink>
            <NavLink to='/transactions' className='p-3'>Transactions</NavLink>
            <NavLink to='/teamdetails' className='p-3'>Team Details</NavLink>
            <NavLink to='/helpdesk' className='p-3'>Help Desk</NavLink>
            {/* <NavLink to='/' className='p-3'>LoginSetUp</NavLink> */}
          </ul>

        </div>
      </div>


      {/* <BodyComp/> */}





    </>
  )
}

export default HeaderFile
