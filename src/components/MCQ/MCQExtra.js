import React from 'react'
import extraimg from "../../asset/Extra.png"
const MCQExtra = () => {
	return (
		<div className='h-[450px] overflow-hidden'>
			<div className='flex justify-center flex-col items-center'>
				<img src={extraimg} alt="" />
				<h2 className='text-black text-2xl'>No Extra File Or Pdf</h2>
			</div>
		</div>
	)
}

export default MCQExtra