import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import icons from '../Component/Gallery/icons.jpg'

const Profile = () => {


  const [text, setText] = useState({})

  


  const handleClick =(e)=>{
    setText({...text , [e.target.name] : e.target.value})
    console.log(text)

    



  }


  const handleSubmit =(e)=>{
    e.preventDefault()
    alert('Your id and password has been sucessfully registered')
    setText(e.target.value)
    console.log(text)

  }
  return (
    <>
         <div className=' bg-sky-950 h-screen'>
      <div className=' text-white text-3xl flex flex-row py-12 md:justify-start px-6 md:px-20 lg:px-48 font-bold space-x-2'>
        <CgProfile size={35} className='' />
        <h2>Profile</h2>
        </div>

        <div className=' grid grid-cols-1 place-items-center '>
           <img style={{width:'70px', height:'70px'}} src={icons} className='rounded-full' alt="" />
           <h4 className='text-white font-sans'>Viral Wlink</h4>
           <h5 className='text-white'>viralwink.online@gmail.com | 917596940202</h5>

           <div className=' flex flex-col md:flex-row  lg:flex-row gap-8 pt-5 '>

           <div className='box-border rounded-full p-2 bg-yellow-400 text-black '>
            <h3 className='text-center font-bold'>Update Profile</h3>
           </div>
           <div className='box-border rounded-full bg-yellow-400 text-black w-60 flex flex-col text-center '>
            <p className='text-sm text-center'>Registered wallet address</p>
            <p className='text-xs font-bold'>03047534534h534jh534534h534h5j</p>
           </div>
           </div>
{/* input boxes */}
{/* <div className='pt-8'>
<div class="relative mb-3 flex flex-col justify-center gap-8 " >
  <input
    type="text"
    className="peer block min-h-[auto] w-96 rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput2"
    placeholder="Form control lg" />
  <label
    for="exampleFormControlInput2 "
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >2FA
  </label>
</div>
<div class="relative mb-3 " >
  <input
    type="text"
    className="peer block min-h-[auto] w-96 rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-slate-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput2"
    placeholder="Form control lg" />
  <label
    for="exampleFormControlInput2"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >ChangePassword
  </label>
</div>
</div> */}
      </div>
      <div className=''>
<form className='flex flex-col place-items-center pt-8 gap-6' onSubmit={handleSubmit}>
  <label className=''>
  <input onChange={handleClick} className='bg-slate-400 placeholder-slate-300 text-white w-96 h-10 rounded' type="text" name='product1' placeholder='2FA'  />
      </label>

  <input onChange={handleClick} className='bg-slate-400 placeholder-slate-300 text-white w-96 h-10 rounded' type="text" name='product2' placeholder='ChangePassword' />

  <button type='submit' className='rounded-full bg-yellow-400 text-black font-bold text-center w-36 h-10' onClick={handleSubmit}>submit</button>
</form>

</div>
      </div>
      
    </>
  )
}

export default Profile
