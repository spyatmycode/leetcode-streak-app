import React from 'react'
import svg from '../assets/2842680.jpg'
import { FaUserCircle, FaLock, FaEnvelope } from 'react-icons/fa'
import { Slide } from 'react-awesome-reveal'

const Signin = () => {
    return (
        <>
            <div className='bg-[#FAFBFD] flex  h-screen justify-center items-center gap-60'>
                <div className='hidden lg:block'>
                    <Slide>
                    <img src={svg} alt="svg" width={'500px'} />
                    </Slide>
                </div>
                <div className='flex flex-col h-full justify-center gap-10 lg:gap-28 lg:w-[450px]'>
                    <Slide direction='right'>
                    <h2 className='text-4xl text-center md:text-5xl font-normal text-gray-700 '>
                        Welcome
                    </h2>
                    <form className='flex flex-col gap-20'>

                        <span className=' '>
                            <label>
                                Enter Username
                            </label>

                            <span className='flex items-center   !border-b-2 border-blue-600'>
                            <FaUserCircle size={20} color='gray' />
                            <input type="text" className='w-full p-3 outline-none' name='username'/>
                            </span>
                        </span>
                        <span className=' '>
                            <label>
                                Enter Password
                            </label>

                            <span className='flex items-center   !border-b-2 border-blue-600'>
                            <FaLock size={20} color='gray' />
                            <input type="password" className='w-full p-3 outline-none' name='password' />
                            </span>
                        </span>

                        

                        <button type="submit" className='bg-blue-950 lg:rounded-xl rounded-full p-4 text-white
                        hover:bg-gray-300 duration-700
                        hover:transition-all ease-out hover:duration-700 hover:text-blue-950'>
                            Submit
                        </button>
                    </form>
                    </Slide>
                </div>
            </div>
        </>
    )
}
const Register = () => {
    return (
        <>
            <div className='bg-[#FAFBFD] flex  h-screen justify-center items-center gap-60'>
                <div className='hidden lg:block'>
                    <Slide>
                    <img src={svg} alt="svg" width={'500px'} />
                    </Slide>
                </div>
                <div className='flex flex-col h-full justify-center gap-10 lg:gap-28 lg:w-[400px]'>
                    <Slide direction='right'>
                    <h2 className='text-4xl text-center md:text-5xl font-normal text-gray-700'>
                        Register
                    </h2>
                    <form className='flex flex-col gap-10 w-full'>

                        <span className=' '>
                            <label>
                                Enter Email
                            </label>

                            <span className='flex items-center   !border-b-2 border-blue-600'>
                            <FaEnvelope size={20} color='gray' required/>
                            <input type="email" className='w-full p-3 outline-none' name='username'/>
                            </span>
                        </span>
                        <span className=' '>
                            <label>
                                Enter Username
                            </label>

                            <span className='flex items-center   !border-b-2 border-blue-600'>
                            <FaUserCircle size={20} color='gray' />
                            <input type="text" className='w-full p-3 outline-none' name='username'required/>
                            </span>
                        </span>
                        <span className=' '>
                            <label>
                                Enter Password
                            </label>

                            <span className='flex items-center   !border-b-2 border-blue-600'>
                            <FaLock size={20} color='gray' />
                            <input type="password" className='w-full p-3 outline-none' name='password' required/>
                            </span>
                        </span>

                        

                        <button type="submit" className='bg-blue-950 lg:rounded-xl rounded-full p-4 text-white
                        hover:bg-gray-300 duration-700
                        hover:transition-all ease-out hover:duration-700 hover:text-blue-950
                        '>
                            Register
                        </button>
                    </form>
                    </Slide>
                </div>
            </div>
        </>
    )
}


const Render =()=>{
    return <Register/>
}

export default Render