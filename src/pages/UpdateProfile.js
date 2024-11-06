import React from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import UpdateProfileForm from '../components/Profile/UpdateProfileForm'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
  const { error, loading, isAuthenticated,users,userProfile } = useSelector(
    (state) => state.user
  );
  return (
      <div>
        <Topbar />
        <div className='grid grid-cols-5 bg-gray-100 grid-flow-col' >
            <Sidebar />
            <UpdateProfileForm />
        </div>
    </div>
  )
}

export default UpdateProfile