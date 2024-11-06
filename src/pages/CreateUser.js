import React, { useEffect, useState } from 'react'
import SignupForm from '../components/Login/SignupForm'
import MainLoginImage from "../asset/login.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUp, signUpUsingEmail } from '../actions/userActions'
import { db } from '../firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth, db, storage } from '../firebase.config'
// import { doc, setDoc } from 'firebase/firestore'
// import { useNavigate } from 'react-router-dom'
// import { getDownloadURL, uploadBytesResumable,  ref as storageRef } from 'firebase/storage'
// import * as XLSX from 'xlsx';
const CreateUser = () => {
  const navigate = useNavigate("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [designation, setDesignation] = useState("")
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated, users, userProfile } = useSelector(
    (state) => state.user
  );
  const handleRegister = async () => {

    const userRef = collection(db, "users");
    const emailQuery = query(userRef, where("email", "==", email));
    const getEmailInfo = await getDocs(emailQuery);

    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (name === "") {
      alert("Enter Your Name")
    }
    else if (email.length !== 0 && getEmailInfo.docs.length !== 0) {

      alert("Email Already Present")
      setEmailError(true)
      setEmailErrorMessage("Email is Already Present")
    }
    else if (email.length === 0 || emailRegex.test(email) === false) {


    } else if (password.length === 0) {
      alert("Enter Valid Password")
    }
    else {
      const data = {
        name: name,
        email: email,
        password: password,
        designation: designation,
      }
      dispatch(signUpUsingEmail(data))
      if (!error) {
        setName('')
        setEmail('')
        setPassword('')
      }
    }

  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])

  return (
    <div className='grid grid-cols-3 bg-gradient-to-t from-[#16325B] to-[#227B94] grid-flow-col h-[100vh] ' >
      <SignupForm emailErrorMessage={emailErrorMessage} emailError={emailError} email={email} handleRegister={handleRegister} designation={designation} setDesignation={setDesignation} setEmail={setEmail} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} name={name} setName={setName} password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
      <div className='col-span-2 flex items-center justify-center' >
        <img className='w-[70%]' src={MainLoginImage} />
      </div>
    </div>
  )
}

export default CreateUser