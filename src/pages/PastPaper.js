import React, { useEffect, useState } from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import Paper from '../components/PastPaper/Paper'
import Searchbox from '../components/PastPaper/Searchbox'
import PastPaperPdf from '../components/PastPaper/PastPaperPdf'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'
const PastPaper = () => {
	const [selectedPapers, setSelectedPapers] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedSeasons, setSelectedSeasons] = useState([]);
	const [selectedZone, setSelectedZone] = useState([]);
	const [curriculum, setCurriculum] = useState("")
	const [subject, setSubject] = useState("")
	const [curriculumList, setCurriculumList] = useState([])
	const [singlePaper, setSinglePaper] = useState({})
	const papers = ["paper1", "paper2"];
	const paper1 = ["paper1"];
	const paper3 = ["paper3"]
	const papersFour = ["paper1", "paper2", "paper3", "paper4"];
	const papersOther = ["paper1", "paper2", "paper11", "paper12", "paper21", "paper22"];
	const paperscheckpoint = ["paper1", "paper2", "paper3"];
	const paperextra = ["paper11", "paper12", "paper13", "paper21", "paper22", "paper23"]
	const years = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year2022 = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const years2020 = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year = ["2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const Years = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const Yearsfull = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const seasons = ["Summer", "Winter"];
	const season3 = ["Summer", "Winter", "Spring"];
	const season = ["Summer"];
	const season2 = ["Winter"]
	const zones = ["zone1", "zone2", "zone3"];
	const zoneFour = ["zone1", "zone2", "zone3", "zone4"];
	const zone0 = ["zone0"]
	const zone3 = ["zone3"]
	const unit = ["1", "2"]
	const zonefull = ["zone1", "zone2", "zone3", "zone4", "zone0"]
	const paperExtra = ["paper1", "paper1R", "paper2", "paper2R"]
	const fetchPastPaper = async () => {
		const q = (collection(db, "PastPaper"));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setCurriculumList((prev) => [...prev, {
				id: doc.id,
				...doc.data()
			}])
		})
	}

	useEffect(() => {
		fetchPastPaper()
	}, [])



	const fetchcurriculum = async () => {

		setCurriculumList([])

		const q = query(collection(db, "PastPaper"), (curriculum.length !== 0 && where("curriculum", "==", curriculum)), (subject.length !== 0 && where("subject", "==", subject)), (selectedPapers.length !== 0 && where("paper", "in", selectedPapers)), (selectedYears.length !== 0 && where("year", "in", selectedYears)), (selectedZone.length !== 0 && where("zone", "in", selectedZone)), (selectedSeasons.length !== 0 && where("season", "in", selectedSeasons)));

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
			<div className='flex lg:gap-6'>
				<Sidebar />
				<div className='flex flex-col lg:gap-2 pl-2'>
					<Paper />
					<Searchbox zonefull={zonefull} paperscheckpoint={paperscheckpoint} fetchcurriculum={fetchcurriculum} selectedPapers={selectedPapers} setSelectedPapers={setSelectedPapers} selectedYears={selectedYears} setSelectedYears={setSelectedYears} selectedSeasons={selectedSeasons} setSelectedSeasons={setSelectedSeasons} paper3={paper3} unit={unit}
						selectedZone={selectedZone} setSelectedZone={setSelectedZone} papers={papers} years={years} season={season} zone0={zone0} season2={season2} seasons={seasons} Yearsfull={Yearsfull} zones={zones} curriculum={curriculum} setCurriculum={setCurriculum} subject={subject} setSubject={setSubject} Years={Years} season3={season3} zoneFour={zoneFour} papersFour={papersFour} paper1={paper1} year={year} paperExtra={paperExtra} papersOther={papersOther} years2020={years2020} year2022={year2022} paperextra={paperextra} />
					<PastPaperPdf curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
				</div>
			</div>
		</div>
	)
}

export default PastPaper