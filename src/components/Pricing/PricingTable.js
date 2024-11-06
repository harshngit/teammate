import { Button } from '@material-tailwind/react';
import React from 'react'
import { GoDotFill } from "react-icons/go";
const PricingTable = () => {
	return (
		<div className='grid lg:grid-cols-3 grid-cols-1 ml-[70px] lg:mr-0 mr-5 gap-5'>
			<div className='border-[1px] border-blue-200   '>
				<div className='bg-blue-200'>
					<h1 className='text-center font-[GilroyMedium] p-5'> Base </h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center mt-5'>
					<p className='font-[GilroyMedium] text-[20px]'>1 Month Subscription </p>
					<h1 className='font-[GilroyMedium] text-center text-blue-300 text-[50px]'>299/-</h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-left mt-5 mb-3'>
					<p className='font-[GilroyMedium] text-center text-[20px]'>What's Include </p>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Topical Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>MCQ Past Paper</h1>
					</div>
				</div>
				<div className='flex justify-center items-center mb-2'>
					<Button className='bg-blue-700'>Subscribe</Button>
				</div>
			</div>
			<div className='border-[1px] border-blue-200   '>
				<div className='bg-blue-200'>
					<h1 className='text-center font-[GilroyMedium] p-5'> Ultimate </h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center mt-5'>
					<p className='font-[GilroyMedium] text-[20px]'>6 Month Subscription </p>
					<h1 className='font-[GilroyMedium] text-center text-blue-300 text-[50px]'>699/-</h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-left mt-5 mb-3'>
					<p className='font-[GilroyMedium] text-center text-[20px]'>What's Include </p>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Topical Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>MCQ Past Paper</h1>
					</div>
				</div>
				<div className='flex justify-center items-center mb-2'>
					<Button className='bg-blue-700'>Subscribe</Button>
				</div>
			</div>
			<div className='border-[1px] border-blue-200   '>
				<div className='bg-blue-200'>
					<h1 className='text-center font-[GilroyMedium] p-5'> Pro </h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center mt-5'>
					<p className='font-[GilroyMedium] text-[20px]'>12 Month Subscription </p>
					<h1 className='font-[GilroyMedium] text-center text-blue-300 text-[50px]'>999/-</h1>
				</div>
				<div className='flex flex-col gap-2 justify-center items-left mt-5 mb-3'>
					<p className='font-[GilroyMedium] text-center text-[20px]'>What's Include </p>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>Topical Past Paper</h1>
					</div>
					<div className='flex pl-2'>
						<GoDotFill size={30} className='text-blue-200 pt-2' />
						<h1 className='font-[GilroyMedium] pl-5 text-blue-300 text-[20px]'>MCQ Past Paper</h1>
					</div>
				</div>
				<div className='flex justify-center items-center mb-2'>
					<Button className='bg-blue-700'>Subscribe</Button>
				</div>
			</div>
		</div>
	)
}

export default PricingTable