import React from 'react'
import { GrDescend } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
const FilternameTopical = ({ curriculumList, setSinglePaper, singlePaper }) => {

	return (
		<div className="ml-[70px] lg:mt-0 lg:mr-0 mr-11 mt-2">
			<div className="bg-blue-200 shadow-md rounded pt-2">
				<div className=' flex justify-center item-center gap-5 mb-5'>
					<div className=' hover:bg-[#ccc] cursor-pointer p-2 h-full rounded-lg'>
						<GrDescend className='text-blue-800 text-3xl ' />
						<p className='text-[#000] text-[0.7rem]'>Desc</p>
					</div>
					<div className=' h-full p-2 rounded-lg'>
						<FaFilter className='text-blue-800 text-3xl ' />
						<p className='text-[#000] bg-[#ccc] text-center rounded-lg text-[0.7rem]'>{curriculumList.length}</p>
					</div>
					<div className='h-full p-2 rounded-lg'>
						<FaEye className='text-blue-800  text-3xl ' />
						<p className='text-[#000] bg-[#ccc] rounded-lg text-center text-[0.7rem]'>{curriculumList.length}</p>
					</div>
				</div>
				<ul className="space-y-2 h-[500px] bg-[#fff] overflow-y-scroll">
					{curriculumList?.map((item, index) => (
						<li onClick={() => setSinglePaper(item)} key={index} className="rounded-md p-2 hover:bg-gray-300">
							{item?.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FilternameTopical