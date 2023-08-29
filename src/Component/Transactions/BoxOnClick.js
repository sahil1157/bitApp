import React, { useState } from 'react'

const BoxOnClick = () => {


    const [row, setRow] = useState([
        { name: 'PostBalance' },
        { detail: 'Details' },
    ])

    const [showBox, setShowBox] = useState(false)

    const ShowClickedBox = () => {
        setShowBox(!showBox)
    }


    const [sidekoRow, setSidekoRow] = useState([
        { name: ':523,33.00 MetaBT' },
        { details: ':HHH' }
    ])


    return (
        <>

            {showBox && (
                <div className='className=box-content h-16 bg-sky-950  w-full border-sky-950 border-b-black border-2 rounded-md'>
                    <div className=' flex justify-around pt-5'>
                        <div>
                            {row.map((items) => {
                                return (
                                    <div>
                                        <h1 className='text-gray-300 text-sm '>{items.name} {items.detail}</h1>

                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {
                                sidekoRow.map((items) => {
                                    return (
                                        <div className='text-gray-300 text-sm'>
                                            <h1 className=''>{items.name}</h1>
                                            <h1 className=''>{items.details}</h1>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BoxOnClick


