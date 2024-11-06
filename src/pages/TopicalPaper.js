import React, { useEffect, useState } from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import Searchbox from '../components/TopicalPaper/SearchBox'
import TPaper from '../components/TopicalPaper/TPaper'
import TopicalPdf from '../components/TopicalPaper/TopicalPdf'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase.config'
const TopicalPaper = () => {
	const [curriculumList, setCurriculumList] = useState([])

	const [curriculum, setCurriculum] = useState("")
	const [subject, setSubject] = useState("")
	const [level, setLevel] = useState("")
	const [selectedPapers, setSelectedPapers] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedSeasons, setSelectedSeasons] = useState([]);
	const [selectedZone, setSelectedZone] = useState([]);
	const [selectedTopic, setSelectedTopic] = useState([])
	const [singlePaper, setSinglePaper] = useState({})
	const papers = ["paper1", "paper2"];
	const paper3s = ["paper1", "paper2", "paper3"];
	const paper1 = ["paper1"];
	const paper3 = ["paper3"];
	const paperanother = ["paper1B", "paper1BR", "paper2B", "paper2BR"];
	const papersFive = ["paper1", "paper2", "paper3", "paper4", "paper5"];
	const papersFour = ["paper1", "paper2", "paper3", "paper4"];
	const papersOther = ["paper1", "paper2", "paper11", "paper12", "paper21", "paper22"];
	const chaptersBiologyExchange = [
		"Biological molecules",
		"Cells",
		"Organisms Exchange Substances With Their Environment",
		"Genetic Information, Variation and Relationships Between Organisms"
	];
	const biologyChapters = [
		"Cells",
		"Organisms Exchange Substances With Their Environment",
		"Genetic Information, Variation and Relationships Between Organisms",
		"Energy Transfers in and Between Organisms",
		"Organisms Respond to Changes in Their Internal and External Environments",
		"Genetics, Populations, Evolution and Ecosystems",
		"The Control of Gene Expression"
	];

	const paperscheckpoint = ["paper1", "paper2", "paper3"];
	const papersalevel = [
		"paper1",
		"paper1(IAL)",
		"paper1R",
		"paper2",
		"paper2(IAL)",
		"paper2R",
		"paper3",
		"paper3(IAL)",
		"paper4",
		"paper4(IAL)",
		"paper4R",
		"paper5",
		"paper5(IAL)",
		"paper5R",
		"paper6"
	];
	const papersSet = [
		"paper1F",
		"paper1H",
		"paper2F",
		"paper2H"
	];
	const paperextra = ["paper11", "paper12", "paper13", "paper21", "paper22", "paper23"]
	const years = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year2022 = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year2019 = ["2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year2017 = ["2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const years2020 = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const year = ["2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const Years = ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const Yearsfull = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];
	const seasons = ["Summer", "Winter"];
	const season3 = ["Summer", "Winter", "Spring"];
	const season = ["Summer"];
	const season2 = ["Winter"]
	const zone2 = ["zone1", "zone2"]
	const zones = ["zone1", "zone2", "zone3"];
	const zone03 = ["zone0", "zone1", "zone2"];
	const zoneFour = ["zone1", "zone2", "zone3", "zone4"];
	const zoneSix = ["zone1", "zone2", "zone3", "zone4", "zone5", "zone6"];
	const zone0 = ["zone0"]
	const zone3 = ["zone3"]
	const unit = ["1", "2"]
	const zonefull = ["zone1", "zone2", "zone3", "zone4", "zone0"]
	const paperExtra = ["paper1", "paper1R", "paper2", "paper2R"]
	const chaptersBiologyKey = [
		"Cell Biology",
		"Organisation",
		"Infection and Response",
		"Bioenergetics",
		"Homeostasis and Response",
		"Inheritance, Variation and Evolution",
		"Ecology",
		"Key ideas"
	];
	const topic = [
		"SETS",
		"INTERSECTION POINTS",
		"SURDS, INDICES, LOG",
		"FACTOR THEOREM",
		"MATRICES",
		"COORDINATE GEOMETRY",
		"LINEAR LAW",
		"FUNCTIONS, MODOLUS",
		"TRIGONOMETRY",
		"CIRCULAR MEASURE",
		"PERMUTATION AND COMBINATION",
		"BINOMIAL THEOREM",
		"DIFFERENTIATION",
		"INTEGRATION",
		"KINEMATICS",
		"VECTORS",
		"RELATIVE VELOCITY",
		"SEQUENCES AND SERIES"
	];
	const chaptersBiology = [
		"CELL STRUCTURE",
		"BIOLOGICAL MOLECULES",
		"ENZYMES",
		"CELL MEMBRANES AND TRANSPORT",
		"THE MITOTIC CELL CYCLE",
		"NUCLEIC ACIDS AND PROTEIN",
		"TRANSPORT IN PLANTS",
		"TRANSPORT IN MAMMALS",
		"GAS EXCHANGE AND SMOKING",
		"INFECTIOUS DISEASE",
		"IMMUNITY",
		"ENERGY AND RESPIRATION",
		"PHOTOSYNTHESIS",
		"HOMEOSTASIS",
		"CONTROL AND CO-ORDINATION",
		"INHERITED CHANGE",
		"SELECTION AND EVOLUTION",
		"BIODIVERSITY, CLASSIFICATION AND CONSERVATION",
		"GENETIC TECHNOLOGY"
	];
	const chaptersLifeSciences = [
		"LIFE PROCESSES",
		"THE VARIETY OF LIVING ORGANISMS",
		"BREATHING AND GAS EXCHANGE",
		"FOOD AND DIGESTION",
		"BLOOD AND CIRCULATION",
		"COORDINATION",
		"CHEMICAL COORDINATION",
		"HOMEOSTASIS AND EXCRETION",
		"REPRODUCTION IN HUMANS",
		"PLANTS AND FOOD",
		"TRANSPORT IN PLANTS",
		"CHEMICAL COORDINATION IN PLANTS",
		"REPRODUCTION IN PLANTS",
		"ECOSYSTEMS",
		"HUMAN INFLUENCES ON THE ENVIRONMENT",
		"CHROMOSOMES, GENES AND DNA",
		"CELL DIVISION",
		"GENES AND INHERITANCE",
		"NATURAL SELECTION AND EVOLUTION",
		"SELECTIVE BREEDING",
		"USING MICROORGANISMS",
		"GENETIC MODIFICATION"
	];
	const chapterScience = [
		"The Nature and Variety of Living Organisms",
		"Structure and Functions in Living Organisms",
		"Reproduction and Inheritance",
		"Ecology and The Environment",
		"Use of Biological Resources"

	]
	const chaptersAdvancedBiology = [
		"Molecules, Transport and Health",
		"Membranes, Proteins, DNA and Gene Expression",
		"Cell Structure, Reproduction and Development",
		"Plant Structure and Function, Biodiversity and Conservation",
		"Energy Flow, Ecosystems and the Environment",
		"Microbiology, Immunity and Forensics",
		"Respiration, Muscles and the Internal Environment",
		"Coordination, Response and Gene Technology"
	];
	const chaptersBiologyAHL = [
		"CELL BIOLOGY",
		"MOLECULAR BIOLOGY",
		"GENETICS",
		"ECOLOGY",
		"EVOLUTION & BIODIVERSITY",
		"HUMAN PHYSIOLOGY",
		"NUCLEIC ACIDS (AHL)",
		"METABOLISM, CELL RESPIRATION & PHOTOSYNTHESIS (AHL)",
		"PLANT BIOLOGY (AHL)",
		"GENETICS & EVOLUTION (AHL)",
		"ANIMAL PHYSIOLOGY (AHL)",
		"DATA ANALYSIS",
		"DATABASE"
	];
	const chaptersBiologyExtended = [
		"Biological Molecules",
		"Cells",
		"Organisms Exchange Substances With Their Environment",
		"Genetic Information, Variation and Relationships Between Organisms",
		"Energy Transfers in and Between Organisms",
		"Organisms Respond to Changes in Their Internal and External Environments",
		"Genetics, Populations, Evolution and Ecosystems",
		"The Control of Gene Expression"
	];
	const chaptersBiologyOrganization = [
		"Cell Biology",
		"Organisation",
		"Infection and Response",
		"Bioenergetics",
		"Homeostasis and Response",
		"Inheritance, Variation and Evolution",
		"Ecology",
		"Key ideas"
	];
	const papersA = [
		"paper1F",
		"paper1H",
		"paper2F",
		"paper2H"
	];
	const chaptersBiologyOrganization2 = [
		"Cells",
		"Organisms Exchange Substances With Their Environment",
		"Genetic Information, Variation and Relationships Between Organisms"
	];
	const functionsChapters = [
		"function",
		"Quadratics",
		"Simultaneous Equations",
		"Indices and Logarithms",
		"Coordinates Geometry",
		"Statistics and Probabilities",
		"Circle Measures",
		"Differentiation",
		"Trigonometry",
		"Progressions",
		"Linear Law",
		"Integration",
		"Vectors",
		"Permutations and Combinations",
		"Motion Along a Straight Line",
		"Linear Programming"
	];


	const fetchMCQ = async () => {
		const q = (collection(db, "TopicalPaper"));
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
		const q = query(collection(db, "TopicalPaper"), where("curriculum", "==", curriculum), where("subject", "==", subject), where("paper", "in", selectedPapers), where("year", "in", selectedYears), where("zone", "in", selectedZone), where("season", "in", selectedSeasons));

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
					<TPaper />
					<Searchbox biologyChapters={biologyChapters} chaptersBiologyOrganization2={chaptersBiologyOrganization2} papersA={papersA} chaptersBiologyOrganization={chaptersBiologyOrganization} chaptersBiologyExtended={chaptersBiologyExtended} paper3s={paper3s} chaptersBiologyExchange={chaptersBiologyExchange} papersSet={papersSet} chaptersBiologyKey={chaptersBiologyKey} zone03={zone03} chaptersBiologyAHL={chaptersBiologyAHL} level={level}
						setLevel={setLevel} zonefull={zonefull} paperscheckpoint={paperscheckpoint} fetchcurriculum={fetchcurriculum} selectedPapers={selectedPapers} setSelectedPapers={setSelectedPapers} selectedYears={selectedYears} setSelectedYears={setSelectedYears} selectedSeasons={selectedSeasons} setSelectedSeasons={setSelectedSeasons} paper3={paper3} unit={unit}
						selectedZone={selectedZone} setSelectedZone={setSelectedZone} papers={papers} years={years} season={season} zone0={zone0} season2={season2} seasons={seasons} Yearsfull={Yearsfull} zones={zones} curriculum={curriculum} setCurriculum={setCurriculum} subject={subject} setSubject={setSubject} Years={Years} season3={season3} zoneFour={zoneFour} papersFour={papersFour} paper1={paper1} year={year} paperExtra={paperExtra} papersOther={papersOther} years2020={years2020} year2022={year2022} paperextra={paperextra} selectedTopic={selectedTopic} topic={topic} setSelectedTopic={setSelectedTopic} zone2={zone2} chaptersBiology={chaptersBiology} papersFive={papersFive} zoneSix={zoneSix} chaptersLifeSciences={chaptersLifeSciences} paperanother={paperanother} year2019={year2019} chapterScience={chapterScience} year2017={year2017} chaptersAdvancedBiology={chaptersAdvancedBiology} papersalevel={papersalevel} />
					<TopicalPdf curriculumList={curriculumList} setSinglePaper={setSinglePaper} singlePaper={singlePaper} />
				</div>
			</div>
		</div>
	)
}

export default TopicalPaper