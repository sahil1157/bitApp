import React, { useState } from 'react'
import BoxOnClick from './BoxOnClick'

const ArrayForTransactions = () => {

    const [left, setLeft] = useState([
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },
        {
            date: 'may11 @12:30',
            deposit: 'Balance add Deposit wallet',
            hash: 'KWAGD99N673B',
        },

    ])

    const [right, setRight] = useState([
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },
        {
            amount: '200.00 metaBT',
            Balance: 'Balance:5323.00',
            metaBT: 'MetaBT'
        },

    ])
    const handleClick =()=>{
        console.log('this part has been clicked')
    }
    return (
        <>

            <div className=''>
                <div className='pt-5 flex flex-row justify-between cursor-pointer' onClick = {handleClick}>
                    <div className=''>
                        {
                            left.map((index) => {
                                return (
                                    <div className=' pt-4'>
                                        <div className=' text-sm '>
                                            <p className='text-slate-500'>{index.date}</p>
                                            <p className='font-bold text-slate-300 '>{index.deposit}</p>
                                            <p className='font-bold text-yellow-400'>{index.hash}</p>
                                            {/* <br /> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr />

                    <div className=''>

                        {
                            right.map((index) => {
                                return (
                                    <div className='pt-4'>
                                        <div className='text-sm text-slate-500  '>
                                            <p className='text-red-500'>{index.amount}</p>
                                            <p>{index.Balance}</p>
                                            <p>{index.metaBT}</p>

                                        </div>
                                        {/* <br /> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default ArrayForTransactions

