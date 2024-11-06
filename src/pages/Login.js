import React, { useState, useEffect } from 'react'
import LoginForm from '../components/Login/LoginForm'
import MainLoginImage from "../asset/login.png"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUsingEmail, signUpUsingGoogle } from '../actions/userActions'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { error, loading, isAuthenticated, users, userProfile } = useSelector(
    (state) => state.user
  );

  const handleGoogleLogin = async () => {

    dispatch(signUpUsingGoogle())
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = () => {
    if (email.length === 0) {
      alert("Enter Valid Email")
    }
    else if (password.length === 0) {
      alert("Enter Valid Password")
    }
    else {
      dispatch(loginUsingEmail(email, password))
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])
  return (
    <div className='grid  lg:grid-cols-3 lg:bg-gradient-to-t from-[#16325B] to-[#227B94] grid-flow-col h-[100vh] ' >
      <LoginForm handleGoogleLogin={handleGoogleLogin} handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
      <div className='col-span-2 hidden lg:flex items-center justify-center' >
        <img className='w-[70%]' src={MainLoginImage} />
      </div>
    </div>
  )
}

export default Login