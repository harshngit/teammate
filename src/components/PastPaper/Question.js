import React, { useEffect, useState } from 'react'

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Document, Page } from 'react-pdf';
// Import necessary styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const Question = ({ singlePaper }) => {
	console.log(singlePaper?.question)
	const [zoomScale, setZoomScale] = useState(1);
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;

			// Set zoom level based on screen width
			if (screenWidth <= 768) {
				// For mobile devices (screen width <= 768px), zoom out
				setZoomScale(0.2); // Adjust zoom-out level for mobile
			} else {
				// For larger screens, use default zoom
				setZoomScale(1);
			}
		};

		// Set zoom scale on initial load
		handleResize();

		// Update zoom scale on window resize
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div className='h-[450px] overflow-hidden lg:block hidden'>
				{/* {singlePaper?.question &&
					<Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
						<Viewer className="bg-black text-black" fileUrl={singlePaper?.question}
							plugins={[defaultLayoutPluginInstance]}
						// defaultScale={zoomScale}
						/>
					</Worker>} */}
				{singlePaper?.question &&
					<iframe
						src={singlePaper?.question}
						title="PDF Viewer"
						width="100%"
						height="100%"
						style={{ border: 'none' }}
					/>

				}
			</div>
			<div className='h-[450px] overflow-hidden lg:hidden block'>
				{singlePaper?.question &&
					<iframe
						src={singlePaper?.question}
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

export default Question