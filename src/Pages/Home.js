import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './Dashboard'
import Profile from './Profile'
import Staking from './Staking'
import MyStaking from './MyStaking'
import Wallet from './Wallet'
import Transactions from '../Component/Transactions/Transactions'
import TeamDetails from '../Component/TeamDetails/TeamDetails'
import BalanceTransfer from './BalanceTransfer'
import MidComponents from '../Component/MidComponent'
import HelpDesk from '../HelpDesk/HelpDesk'
import LoginSetup from '../Component/LoginSetup/LoginSetup'

const Home = () => {
  return (
    <>


      <Routes>

        {/* <Route path='/' element={<DashBoard/>}/> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/staking' element={<Staking />} />
        <Route path='/mystaking' element={<MyStaking />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/balancetransafer' element={<BalanceTransfer />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/teamdetails' element={<TeamDetails />} />
        <Route path='intro' element={<MidComponents />} />
        <Route path='balancetransfer' element={<BalanceTransfer />} />
        <Route path='helpdesk' element={<HelpDesk />} />
        <Route path='/' element={<LoginSetup />} />

        {/* <Route path='loginsetup' element={<LoginSetup />} /> */}

      </Routes>
    </>

  )


}

export default Home
