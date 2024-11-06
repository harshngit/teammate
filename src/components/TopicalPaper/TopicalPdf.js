import React from 'react'
import FilternameTopical from './FilternameTopical'
import FilterTopicalPdf from './FilterTopicalPdf'

const TopicalPdf = ({ curriculumList, setSinglePaper, singlePaper }) => {
	console.log(singlePaper)
	return (
		<div className='grid grid-cols-1 lg:grid-cols-5'>
			<div className='col-span-2'>
				<FilternameTopical curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
			</div>
			<div className='col-span-3'>
				<FilterTopicalPdf singlePaper={singlePaper} />
			</div>
		</div>
	)
}

export default TopicalPdf