import React, { useState } from 'react'
import logo from '../../asset/mainLogo.png';
import { CiLogout } from "react-icons/ci";
// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCheckboxMultipleFill, RiPriceTagLine } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@material-tailwind/react';
import { logout } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const menuItems = [
  {
    icons: <CiFileOn size={30} />,
    label: 'Past Paper',
    page: "/"
  },
  {
    icons: <BsFiles size={30} />,
    label: 'Topical Past Paper',
    page: "/topicalpaper"
  },
  {
    icons: <RiCheckboxMultipleFill size={30} />,
    label: 'MCQ Past Paper',
    page: "/mcqpaper"
  },
  {
    icons: <RiPriceTagLine size={30} />,
    label: 'Pricing',
    page: "/pricing"
  },
]
export function Sidebar() {
  const { error, loading, isAuthenticated, users, userProfile } = useSelector(
    (state) => state.user
  );

  const [open, setOpen] = useState(false); // Sidebar initially closed
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav
      className={`shadow-md p-2 lg:h-dvh h-[200vh] fixed top-[65px] left-0 z-50 flex flex-col duration-500 bg-gradient-to-b from-cyan-500 to-blue-500 text-white ${open ? 'w-60' : 'w-16'
        }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Body */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <Link to={item.page} key={index}>
            <li
              className="px-3 py-2 my-2 hover:bg-blue-500 hover:border-2 hover:border-white rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
            >
              <div>{item.icons}</div>
              <p
                className={`${!open && 'w-0 translate-x-24'
                  } duration-500 overflow-hidden`}
              >
                {item.label}
              </p>
              <p
                className={`${open && 'hidden'
                  } absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
              >
                {item.label}
              </p>
            </li>
          </Link>
        ))}

        <li
          onClick={handleLogout}
          className="px-3 py-2 my-2 hover:bg-blue-500 hover:border-2 hover:border-white rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
        >
          <div>
            <CiLogout size={30} />
          </div>
          <p
            className={`${!open && 'w-0 translate-x-24'
              } duration-500 overflow-hidden`}
          >
            Logout
          </p>
          <p
            className={`${open && 'hidden'
              } absolute left-32 shadow-md rounded-md
                  w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
          >
            Logout
          </p>
        </li>
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          <FaUserCircle size={30} />
        </div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>{userProfile?.name}</p>
          <span className="text-xs">{userProfile?.email}</span>
        </div>
      </div>
    </nav>
  );
}
