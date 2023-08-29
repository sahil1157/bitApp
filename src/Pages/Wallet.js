import React, { createContext, useState } from 'react';
import { BiWallet } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';
import { Multiselect } from 'multiselect-react-dropdown';
import WalletTop from '../Component/Wallet/WallerTop';
import PageTop from '../Component/PageTop';

const Wallet = ({title}) => {
  const data = [
    { wallets: 'select wallet to withdraw' },
    { wallets: 'Staking wallet' },
    { wallets: 'Affiliate wallet' },
    { wallets: 'principal wallet' },
  ];
  const dabba = [
    {
      Name: "Deposit Wallet",
      age: 20
    },
    {
      Name: "BTsmart Wallet",
      age: 20
    },
    {
      Name: "Staking wallet",
      age: 20
    },
    {
      Name: "Affiliate Wallet",
      age: 20
    },
    {
      Name: "Principal wallet",
      age: 20
    },
    {
      Name: "Old Reward Wallet",
      age: 20
    }

  ]

  const [Options, setOptions] = useState(data);

  const icon = <BiWallet className="text-white" size={32} />

  
 


  return (
    <>
      <div style={{ paddingInline: "10%" }} className='bg-slate-800 h-full w-[100%] '>

        <PageTop topic="Wallet" title = {title}  icon={icon} />
        <WalletTop dabba={dabba} />
        <div className=' py-5 uppercase w-[100%]'>
          <div className=' flex flex-col lg:flex-row lg:space-x-3 gap-3 lg:gap-8 md:gap-4'>
            <button className='w-28 rounded-full h-10 hover:bg-yellow-400 bg-slate-500 text-white hover:text-black'>WithDrawal</button>
            <button className='bg-yellow-400 rounded-full text-black w-28 h-10 '>Deposit</button>
          </div>
          {/* </div> */}

          <div className=' grid-auto-fit w-[100%]'>
            {/* ... */}
            {/* The rest of your code */}
            {/* ... */}
            <div className='  pt-6'>
              <h4 className='text-sm font-sans text-slate-300 '>METABT</h4>
              <div>
                <h5 className='font-bold text-slate-300 text-sm'>METHOD</h5>

                {/* <Multiselect
                  placeholder='Select Wallet To Withdraw'
                  type='text'
                  className='rounded-sm font-bold overflow-hidden fixed h-14 bg-white'
                  options={Options}
                  displayValue={'wallets'}
                /> */}
{/* select */}
<div className="flex flex-col ">
            <label className="text-xl font-bold text-gray-300" placeholder='select wallet to withdraw'></label>

            <select className="w-[100%] text-md font-bold text-gray-600 h-14 rounded-md p-4 font-sans">
              <option value="dog">Select Wallet to WithDraw</option>
              <option value="hamster">Stalking wallet</option>
              <option value="parrot">Affiliat Wallet</option>
              <option value="parrot">Principal Wallet</option>
              
            </select>
          </div>
{/* select */}

              </div>
            </div>
            <div>
              <h3 className='pt-4 text-white font-sans '>Amount</h3>
              <input
                className='rounded-sm w-full h-14 bg-white text-black p-3'
                type='text'
                placeholder='Enter Your Amount'
              />
            </div>
            <div>
              <h3 className='pt-4 text-white font-sans '>Bep20 Wallet Address *</h3>
              <input
                className=' p-3 rounded-sm w-full h-14 bg-white text-black'
                type='text'
                placeholder='Enter Your Wallet Address'
              />
            </div>
            <div className='pt-6'>
              <button className=' rounded-sm w-full h-14 bg-yellow-400 text-black text-2xl'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Wallet;
