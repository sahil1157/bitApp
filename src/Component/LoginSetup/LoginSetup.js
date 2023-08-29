import React, { useState } from 'react'
import loginImage from '../Gallery/login-background.png'
import login from '../Gallery/login.png'

import { FaBitcoin } from 'react-icons/fa6'
import { PiUserSquareThin } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import darkBlue from '../Gallery/dark blue.jpg'
const LoginSetup = () => {

    const [userName, setuserName] = useState({})
    const [pass, setPass] = useState({})
    const navigate = useNavigate()
    let handleClick = (e) => {
        setuserName({ ...userName, [e.target.name]: e.target.value })
        setPass({ ...pass, [e.target.name]: e.target.value })
        console.log(userName)
    }

    const handleClicked = (e) => {
        e.preventDefault()
        navigate('/intro')
        // setuserName(e.target.value)
        if (validate()) { }
        // alert('username and password has been successfully created')
    }

    const validate = () => {
        let result = true
        if (userName === '' || userName === null) {
            result = false
            console.warn("Please Enter your Username")
        }
        if (pass === '' || pass === null) {
            result = false
            console.warn("Please Enter your Password")
        }
        return result;


    }

    return (
        <>
            <div className=' h-[110vh] relative'>
                <img src={login} alt="hey" className=' h-full w-full bg-contain bg-fixed' />
                {/* <div style={{backgroundImage:('../Gallery/login-background.png')}}> */}
                <div>

                    <div className=' p-5  absolute text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        <FaBitcoin className='text-yellow-400 bg-yellow rounded bg-fixed h-16 w-36 lg:w-96 lg:h-40 md:h-28 md:w-64' />
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold text-center'>BTSMART</h1>
                            <p className='text-xs'>A Decentralized Staking Platform</p>
                        </div>
                    </div>
                </div>
                <div className=' absolute gap-8  text-white top-2/3 left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col pt-10'>
                    <div className=' flex flex-row gap-3 pt-9 '>
                        <button className='bg-yellow-400 rounded-full text-black w-16 h-10'>Login</button>
                        <button className='hover:bg-yellow-400 bg-gray-500 text-gray-400 text-center hover:text-black rounded-full w-32 h-10'>CreateAccount</button>
                    </div>
                    <br />


                    {/* input */}
                    <div className='text-white'>
                        <div>
                            <h1 className='text-sm'>You can sign in to your account using email or username</h1>
                            <br />

                            <form onSubmit={handleClicked} className=''>
                                <h1 className=''>Username or Email</h1>
                                <input onChange={handleClick} name='username' placeholder='Enter your userID' className=' md:w-[100%] p-3 text-black w-[100%] lg:w-[130%] h-12 rounded-md' type="text" />

                                <div className='pt-4'>
                                    <h1 className=''>Forgot</h1>

                                    <input onChange={handleClick} className='p-3 text-black w-[100%] lg:w-[130%] h-12 rounded-md' type="text" name='password' placeholder='username' />
                                </div>
                            </form>
                            <div className='pt-3'>
                                <button onClick={handleClicked} type='submit' className=' text-black h-12 text-bold w-[100%] lg:w-[130%] rounded-md bg-yellow-400 text-center font-bold font-sans '>Login Account</button>
                            </div>
                        </div>
                    </div>
                    {/* input */}
                </div>

            </div>
        </>
    )
}

export default LoginSetup
