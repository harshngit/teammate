import React from 'react'
import extraimg from "../../asset/Extra.png"
const Extra = ({ singlePaper }) => {
	return (
		<>
			<div className='h-[450px] overflow-hidden'>
				<div className='flex justify-center flex-col items-center'>
					<img src={extraimg} alt="" />
					<h2 className='text-black text-2xl'>No Extra File Or Pdf</h2>
				</div>
			</div>
			<div className='h-[450px] overflow-hidden lg:block hidden'>
				{singlePaper?.extra &&
					<iframe
						src={singlePaper?.extra}
						title="PDF Viewer"
						width="100%"
						height="100%"
						style={{ border: 'none' }}
					/>

				}
			</div>
		</>
	)
}

export default Extra