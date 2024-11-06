import React from 'react'
import FilterNameMCQ from './FilterNameMCQ'
import FilterMCQpdf from './FilterMCQpdf'

const MCQPdf = ({ curriculumList, setSinglePaper, singlePaper }) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-5'>
			<div className='col-span-2'>
				<FilterNameMCQ curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
			</div>
			<div className='col-span-3'>
				<FilterMCQpdf etSinglePaper={setSinglePaper} singlePaper={singlePaper} />
			</div>
		</div>
	)
}

export default MCQPdf