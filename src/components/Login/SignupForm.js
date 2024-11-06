import React from 'react'
import { InformationCircleIcon, EyeIcon, EyeSlashIcon, PhoneIcon } from '@heroicons/react/24/outline';
import MainLogo from "../../asset/mainLogo.png"
import GoogleIcon from "../../asset/google.png"
import "./Login.css"
import { Link } from 'react-router-dom';
const SignupForm = ({ emailErrorMessage, emailError, email, setEmail, password, setPassword, name, setName, showPassword, setShowPassword, handleRegister, confirmPassword, setConfirmPassword, showConfirmPassword, setShowConfirmPassword, setDesignation }) => {
  return (
    <div className='bg-white relative overflow-y-scroll'>
      <div className='bg-white  px-12  pt-6 w-full' >
        <img className='w-[100px]' src={MainLogo} />
        <div className='mt-[5%]'>
          <h3 className='font-[GilroyBold] text-[1.5rem]' >Sign Up</h3>
          <p className='font-[GilroyMedium] my-2 text-gray-400'>Enter your details to create a free account.</p>
          <div className='mt-8 flex gap-1 flex-col w-full' >
            <p className='text-[.8rem]'>Name</p>
            <input className='py-2 text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />

          </div>
          <div className='my-4 flex gap-1 flex-col w-full' >
            <p className='text-[.8rem]'>Email adress</p>
            <input onError={emailError ? true : false} type='email' className='py-2 text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
            {emailErrorMessage.length !== 0 && <p className='font-[InterRegular]  text-[.8rem] text-red-600' >{emailErrorMessage}</p>}
          </div>
          <div className='my-4 flex  gap-1 flex-col w-full' >
            <p className='text-[.8rem]'>Designation</p>
            <select className='py-2 minimal select-wrapper text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]' onChange={(e) => setDesignation(e.target.value)} placeholder='Enter your Email' >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>

          </div>
          <div className="relative my-4 flex gap-1 flex-col w-full ">
            <div className='flex items-center justify-between'>
              <p className='font-[GilroyMedium] text-[.8rem] '>Password</p>

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
          <div className="relative my-4 flex gap-1 flex-col w-full ">
            <div className='flex items-center justify-between'>
              <p className='font-[GilroyMedium] text-[.8rem] '>Confirm Password</p>

            </div>
            <input

              className='py-2 text-[.9rem] px-4 focus:bg-white outline-none  border-[1px] bg-gray-100 placeholder:text-gray-500 border-gray-300 rounded-[5px]'
              value={confirmPassword}
              placeholder='Enter your Password'
              onChange={(e) => { setConfirmPassword(e.target.value) }}
              type={showPassword ? "text" : "password"}


            />
            <button
              disabled={!confirmPassword}
              onClick={() => setShowConfirmPassword(!showPassword)}
              className="!absolute  right-2 top-10 "
            >
              {showPassword ? <EyeIcon className='w-[15px]  text-blue-500' /> : <EyeSlashIcon className='w-[15px] text-blue-500' />}
            </button>

          </div>
          <div className='my-4'>
            <button onClick={handleRegister} className='w-full font-[GilroyMedium] rounded-md bg-[#16325B]  outline-none my-2 shadow-lg  py-3 text-white ' >Login</button>
            <button onClick={handleRegister} className='w-full flex items-center justify-center gap-4 font-[GilroyMedium] rounded-md bg-white my-2  shadow-lg border-[1px] border-gray-200 outline-none  py-3 ' > <img src={GoogleIcon} className="w-[25px]" /> Login With Google</button>
          </div>

        </div>

      </div>
      <div className='  w-full  text-[1rem] text-center ' >
        <p className='cursor-pointer'>Already a User? <Link to="/login" ><span className='text-[#275aa8]'>Sign in</span></Link> </p>
      </div>
    </div>
  )
}

export default SignupForm