import React, { useEffect, useState } from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import MCQ from '../components/MCQ/MCQ'
import Searchbox from '../components/MCQ/SearchBox'
import MCQPdf from '../components/MCQ/MCQPdf'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'
const MCQPaper = () => {

	const [curriculumList, setCurriculumList] = useState([])

	const [selectedPapers, setSelectedPapers] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedSeasons, setSelectedSeasons] = useState([]);
	const [selectedZone, setSelectedZone] = useState([]);
	const [curriculum, setCurriculum] = useState("")
	const [subject, setSubject] = useState("")
	const [singlePaper, setSinglePaper] = useState({})
	const papers = ["paper1"];

	const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const years2017 = ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const seasons = ["Summer", "Winter"];
	const zones = ["zone1", "zone2", "zone3"];
	const zone2 = ["zone0", "zone1", "zone2"]
	const fetchMCQ = async () => {
		const q = (collection(db, "MCQPaper"));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setCurriculumList((prev) => [...prev, {
				id: doc.id,
				...doc.data()
			}])
		})
	}
	useEffect(() => {
		fetchMCQ()
	}, [])

	const fetchcurriculum = async () => {

		setCurriculumList([])
		console.log(selectedPapers)
		console.log(selectedYears)
		console.log(selectedSeasons)
		console.log(selectedZone)
		const q = query(collection(db, "MCQPaper"), where("curriculum", "==", curriculum), where("subject", "==", subject), where("paper", "in", selectedPapers), where("year", "in", selectedYears), where("zone", "in", selectedZone), where("season", "in", selectedSeasons));

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setCurriculumList((prev) => [...prev, {
				id: doc.id,
				...doc.data()
			}])
		})
	}

	console.log(curriculumList)




	console.log(curriculum)
	console.log(subject)



	return (
		<div>
			<Topbar />
			<div className=''>
				<Sidebar />
				<div className='flex flex-col lg:gap-12 pl-2'>
					<MCQ />
					<Searchbox years2017={years2017} zone2={zone2} fetchcurriculum={fetchcurriculum} selectedPapers={selectedPapers} setSelectedPapers={setSelectedPapers} selectedYears={selectedYears} setSelectedYears={setSelectedYears} selectedSeasons={selectedSeasons} setSelectedSeasons={setSelectedSeasons}
						selectedZone={selectedZone} setSelectedZone={setSelectedZone} papers={papers} years={years} seasons={seasons} zones={zones} curriculum={curriculum} setCurriculum={setCurriculum} subject={subject} setSubject={setSubject} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
					<MCQPdf curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
				</div>
			</div>
		</div>
	)
}

export default MCQPaper