import React from 'react'
import Filtername from './Filtername'
import Filterpdf from './Filterpdf'

const PastPaperPdf = ({ curriculumList, setSinglePaper, singlePaper }) => {
	console.log(singlePaper)
	return (
		<div className='grid grid-cols-1 lg:grid-cols-6'>
			<div className='col-span-2 '>
				<Filtername curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
			</div>
			<div className='col-span-4'>
				<Filterpdf singlePaper={singlePaper} />
			</div>
		</div>
	)
}

export default PastPaperPdf