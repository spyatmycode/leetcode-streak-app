import React, { useState } from 'react'
import svg from '../assets/2842680.jpg'
import loader from '../assets/220 (2).gif'
import { FaUserCircle, FaLock, FaEnvelope } from 'react-icons/fa'
import { Slide } from 'react-awesome-reveal'
import { auth } from '../firebase/firebaseconfig'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router'


const Signin = ({ setCurrent }) => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()



    console.log("this is the user before sign in",user);

    const [formInput, setFormInput] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value })
    }

    const handleSubmit = async(e) => {

       
        e.preventDefault()

        let myToast =()=> toast.success("Successful")

        

        

        signInWithEmailAndPassword(auth,formInput.email, formInput.password)
        .then((userCredential)=>{
            console.log(userCredential.user);
            toast.success(`Login successful ! Welcome ${userCredential.user.displayName}` )
            console.log(user);
            navigate('/')
           
        }).catch((err)=>{
            console.log(err);

            toast.error(`Oops! ${err.code}`)
            
        })
        
    }

    

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
                        <form className='flex flex-col gap-20' onSubmit={(e) => handleSubmit(e)}>

                            <span className=' '>
                                <label className='text-lg font-semibold text-gray-500'>
                                    Email
                                </label>

                                <span className='flex items-center   !border-b-2 border-blue-600'>
                                    <FaUserCircle size={20} color='gray' />
                                    <input type="email" className='w-full p-3 outline-none' name='email' onChange={(e) => handleChange(e)} />
                                </span>
                            </span>
                            <span className=' '>
                                <label className='text-lg font-semibold text-gray-500'>
                                    Password
                                </label>

                                <span className='flex items-center   !border-b-2 border-blue-600'>
                                    <FaLock size={20} color='gray' />
                                    <input type="password" className='w-full p-3 outline-none' name='password' onChange={(e) => handleChange(e)} />
                                </span>
                            </span>



                            <button type="submit" className='bg-blue-950 lg:rounded-xl rounded-full p-4 text-white
                        hover:bg-gray-300 duration-700
                        hover:transition-all ease-out hover:duration-700 hover:text-blue-950
                        flex justify-center
                        '
                                onClick={() => setLoading(!loading)}
                            >
                                {/* Register */} {loading ? <img src={loader} width={'60px'} /> : "Sign In"}
                            </button>
                            <span>
                                Don't have an account? <span onClick={() => setCurrent(1)} className='text-blue-600 cursor-pointer 
                        '>Register here.</span>
                            </span>
                        </form>
                    </Slide>
                </div>
            </div>
        </>
    )
}
const Register = ({ setCurrent }) => {

    const [formInput, setFormInput] = useState({ username: "", password: "", email: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value })

    }

    const handleSubmit = async(e) => {
            e.preventDefault()
            createUserWithEmailAndPassword(auth, formInput.email,formInput.password)
            .then((userCredential) => {
                // Signed in 

                const user = userCredential.user;

                updateProfile(userCredential.user,{
                    displayName: formInput.username
                   })
    

              
                  console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                

                // ..
            })

           
        }
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
                            <form className='flex flex-col gap-10 w-full' onSubmit={(e) => handleSubmit(e)}>

                                <span className=' '>
                                    <label className='text-lg font-semibold text-gray-500'>
                                        Email
                                    </label>

                                    <span className='flex items-center   !border-b-2 border-blue-600'>
                                        <FaEnvelope size={20} color='gray' required />
                                        <input type="email" className='w-full p-3 outline-none' name='email' onChange={(e) => handleChange(e)} />
                                    </span>
                                </span>
                                <span className=' '>
                                    <label className='text-lg font-semibold text-gray-500'>
                                        Leetcode Username
                                    </label>

                                    <span className='flex items-center   !border-b-2 border-blue-600'>
                                        <FaUserCircle size={20} color='gray' />
                                        <input type="text" className='w-full p-3 outline-none' name='username' required onChange={(e) => handleChange(e)} />
                                    </span>
                                </span>
                                <span className=' '>
                                    <label className='text-lg font-semibold text-gray-500'>
                                        Password
                                    </label>

                                    <span className='flex items-center   !border-b-2 border-blue-600'>
                                        <FaLock size={20} color='gray' />
                                        <input type="password" className='w-full p-3 outline-none' name='password' onChange={(e) => handleChange(e)} required />
                                    </span>
                                </span>



                                <button type="submit" className='bg-blue-950 lg:rounded-xl rounded-full p-4 text-white
                        hover:bg-gray-300 duration-700
                        hover:transition-all ease-out hover:duration-700 hover:text-blue-950
                        flex justify-center
                        '
                                    onClick={(e) => handleSubmit(e)}
                                >
                                    {/* Register */} {loading ? <img src={loader} width={'60px'} /> : "Register"}
                                </button>
                                <span>
                                    Do you already have an account ? <span onClick={() => setCurrent(0)} className='text-blue-600 cursor-pointer 
                        '>Sign in</span>
                                </span>
                            </form>
                        </Slide>
                    </div>
                </div>
            </>
        )
    }


    const Render = () => {
        const [current, setCurrent] = useState(0)
        return current === 0 ? <Signin setCurrent={setCurrent} /> : <Register setCurrent={setCurrent} />
    }

    export default Render