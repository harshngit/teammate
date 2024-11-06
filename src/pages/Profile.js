import React from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import ProfileArea from '../components/Profile/ProfileArea'
import { useSelector } from 'react-redux'


const Profile = () => {
    const { error, loading, isAuthenticated,users,userProfile } = useSelector(
        (state) => state.user
      );
  return (
    <div>
        <Topbar />
        <div className='grid grid-cols-5 bg-gray-100 grid-flow-col' >
            <Sidebar />
            <ProfileArea userProfile={userProfile} />
        </div>
    </div>
  )
}

export default Profile