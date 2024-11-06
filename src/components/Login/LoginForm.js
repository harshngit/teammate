import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { InformationCircleIcon, EyeIcon, EyeSlashIcon, PhoneIcon } from '@heroicons/react/24/outline';
import MainLogo from "../../asset/mainLogo.png"
import GoogleIcon from "../../asset/google.png"
import { Link } from 'react-router-dom';


const LoginForm = ({ handleGoogleLogin, password, setPassword, email, setEmail, showPassword, setShowPassword, handleLogin }) => {
  return (
    <div className='bg-white px-12  py-8 w-full' >
      <img className='w-[100px]' src={MainLogo} />
      <div className='mt-[30%]'>
        <h3 className='font-[GilroyBold] text-[1.5rem]' >Sign In</h3>
        <p className='font-[GilroyMedium] my-2 text-gray-400'>Enter your email address and password to login</p>
        <div className='my-8 flex gap-2 flex-col w-full' >
          <p className='text-[.8rem]'>Email adress</p>
          <input className='py-2 text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />

        </div>

        <div className="relative flex gap-2 flex-col w-full ">
          <div className='flex items-center justify-between'>
            <p className='font-[GilroyMedium] text-[.8rem] '>Password</p>
            <p className='text-gray-600 text-[.8rem]'>Forgot Password?</p>
          </div>
          <input

            className='py-2 text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]'
            value={password}
            placeholder='Enter your Password'
            onChange={(e) => { setPassword(e.target.value) }}
            type={showPassword ? "text" : "password"}


          />
          <button
            disabled={!password}
            onClick={() => setShowPassword(!showPassword)}
            className="!absolute  right-2 top-10 "
          >
            {showPassword ? <EyeIcon className='w-[15px]  text-blue-500' /> : <EyeSlashIcon className='w-[15px] text-blue-500' />}
          </button>

        </div>
        <div className='mt-12'>
          <button onClick={handleLogin} className='w-full font-[GilroyMedium] rounded-md bg-[#16325B]  outline-none my-2 shadow-lg  py-3 text-white ' >Login</button>
          <button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-4 font-[GilroyMedium] rounded-md bg-white my-2  shadow-lg border-[1px] border-gray-200 outline-none  py-3 ' > <img src={GoogleIcon} className="w-[25px]" /> Login With Google</button>
        </div>
        <div className='  w-full  text-[1rem] text-center ' >
          <p className='cursor-pointer'>Don't Have a Account? <Link to="/create-user" ><span className='text-[#275aa8]'>Sign up</span></Link> </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm