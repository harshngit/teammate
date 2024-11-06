import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { FaKey, FaPlus, FaQuestion } from 'react-icons/fa';
import MCQquestion from './MCQquestion'
import MCQAnswer from './MCQAnswer'
import MCQExtra from './MCQExtra'
const FilterMCQpdf = ({ singlePaper }) => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<div className="lg:ml-[10px] ml-[70px] lg:mt-0 lg:mr-12 mr-11 mt-2">
			<div className="bg-blue-200 shadow-md rounded pt-2">
				<div className=' flex justify-center item-center lg:gap-5 mb-5'>
					<div className=' hover:bg-[#ccc] cursor-pointer p-2 h-full rounded-lg'>
						<FaArrowUpLong className='text-blue-800  text-3xl ' />
						<p className='text-[#000] text-center text-[0.6rem]'>Previous</p>
					</div>
					<div className=' hover:bg-[#ccc] cursor-pointer  h-full p-2 rounded-lg'>
						<FaArrowDownLong className='text-blue-800 text-3xl ' />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Next</p>
					</div>
					<div
						onClick={() => setActiveTab(1)}
						className=' hover:bg-[#ccc] cursor-pointer  h-full p-2 rounded-lg'>
						<FaQuestion className={` text-3xl text-blue-800 focus:outline-none ${activeTab === 1
							? " text-red-500"
							: "hover:text-blue-500"
							}`} />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Question</p>
					</div>

				</div>

			</div>
			<div className="p-4 ">
				{activeTab === 1 && <MCQquestion singlePaper={singlePaper} />}
			</div>
		</div>
	)
}

export default FilterMCQpdf