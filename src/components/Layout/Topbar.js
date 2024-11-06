import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from "../../asset/mainLogo.png"
const Topbar = () => {
  const { error, loading, isAuthenticated, users, userProfile } = useSelector(
    (state) => state.user
  );
  const activeClass = "border-[#122259] py-2 border-b-[5px]"
  const dispatch = useDispatch()
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const handleLogout = () => {
    dispatch(logout())
  }
  const [open, setOpen] = useState(false)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>

      <div className='fixed w-full z-50'>
        <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
        <div className="bg-white">
          <div className="flex-col flex">
            <div className="w-full border-b-2 border-gray-200">
              <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
                <div>
                  <img className='w-[100px] h-[50px]' src={logo} alt="Logo" />
                </div>
                <div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
                  <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                  </p>
                  <input placeholder="Type to search" type="search" className="border border-gray-300 focus:ring-indigo-600
              focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
                </div>
                <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                  <div className="relative">

                  </div>
                  <div className="justify-center gap-5 items-center flex relative">
                    {users?.photoURL ? <img src={users?.profile_image} /> : <FaUserCircle className='text-black hidden lg:block text-[0.8rem] lg:text-[30px] ' />}
                    <p className="font-semibold uppercase text-sm">{userProfile?.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar