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
import Question from './Question';
import Answer from './Answer';
import Extra from './Extra';
const Filterpdf = ({ singlePaper }) => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<div className="lg:ml-[10px] ml-[70px] lg:mt-0 lg:mr-12 mr-11 mt-2">
			<div className="bg-[#acd0eee6] border-[2px] border-blue-600  shadow-md rounded pt-2">
				<div className=' flex justify-center item-center lg:gap-5 '>
					<div className=' hover:bg-[#ccc] cursor-pointer p-2 h-full rounded-lg'>
						<FaArrowUpLong className='text-[#323a46]  text-xl ' />
						<p className='text-[#000] text-center text-[0.6rem]'>Previous</p>
					</div>
					<div className=' hover:bg-[#ccc] cursor-pointer  h-full p-2 rounded-lg'>
						<FaArrowDownLong className='text-[#323a46] text-xl ' />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Next</p>
					</div>
					<div
						onClick={() => setActiveTab(1)}
						className=' hover:bg-[#ccc] text-center cursor-pointer  h-full p-2 rounded-lg'>
						<FaQuestion className={`text-xl  focus:outline-none ${activeTab === 1
							? " text-red-500"
							: "hover:text-blue-500"
							}`} />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Question</p>
					</div>
					<div
						onClick={() => setActiveTab(2)}
						className=' hover:bg-[#ccc] text-center cursor-pointer  h-full p-2 rounded-lg'>
						<FaKey className={` text-xl  focus:outline-none ${activeTab === 2
							? " text-red-500"
							: "hover:text-blue-500"
							}`} />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Answer</p>
					</div>
					<div
						onClick={() => setActiveTab(3)}
						className=' hover:bg-[#ccc] text-center cursor-pointer  h-full p-2 rounded-lg'>
						<FaPlus className={` text-xl  focus:outline-none ${activeTab === 3
							? " text-red-500"
							: "hover:text-blue-500"
							}`} />
						<p className='text-[#000] text-center rounded-lg text-[0.6rem]'>Extra</p>
					</div>
				</div>

			</div>
			<div className="p-4 border-b-[2px] border-r-[2px] border-l-[2px] border-blue-600  ">
				{activeTab === 1 && <Question singlePaper={singlePaper} />}
				{activeTab === 2 && <Answer singlePaper={singlePaper} />}
				{activeTab === 3 && <Extra singlePaper={singlePaper} />}
			</div>
		</div>
	)
}

export default Filterpdf