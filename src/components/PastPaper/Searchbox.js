import { Select, Option } from '@material-tailwind/react';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MultiSelect } from 'primereact/multiselect';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const Searchbox = ({ selectedPapers, setSelectedPapers, selectedYears, setSelectedYears, selectedSeasons, setSelectedSeasons,
	selectedZone, setSelectedZone, papers, years, seasons, zones, curriculum, setCurriculum, subject, paper1, setSubject, fetchcurriculum, paperscheckpoint, Years, zone0, season2, season, Yearsfull, zoneFour, papersFour, season3, zonefull, paper3, year, paperExtra, unit, papersOther, years2020, year2022, paperextra }) => {
	return (
		<div className="bg-[#acd0eee6] border-[2px] border-blue-600  ml-[70px] mr-[50px] p-4 rounded-lg">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Curriculum Select */}
				<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]' >
					<label htmlFor="curriculum">Curriculum</label>
					<select
						id="curriculum"
						onChange={(e) => setCurriculum(e.target.value)}
						name="curriculum"
						className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
					>
						<optgroup label="CIE" className="text-gray-900 font-semibold">
							<option value="">Curriculum</option>
							<option value="Checkpoint">Checkpoint</option>
							<option value="cieigcse">IGCSE</option>
							<option value="cieolevel">O-LEVEL</option>
							<option value="ciealevel">A-LEVEL</option>
							<option value="ciepreu">PRE-U</option>
						</optgroup>
						<optgroup label="Edexcel" className="text-gray-900 font-semibold">
							<option value="Edexceligcse">IGCSE</option>
							<option value="Edexceligcse(9-1)">IGCSE (9-1)</option>
							<option value="Edexcelalevel">A-LEVEL</option>
						</optgroup>
						<optgroup label="OCR" className="text-gray-900 font-semibold">
							<option value="ocrgsce9-1">GCSE (9-1)</option>
							<option value="ocras">AS</option>
							<option value="ocralevel">A-LEVEL</option>
						</optgroup>
						<optgroup label="AQA" className="text-gray-900 font-semibold">
							<option value="aqagsce">GCSE</option>
							<option value="aqaas">AS</option>
							<option value="aqaalevel">A-LEVEL</option>
						</optgroup>
						{/* More options here... */}
					</select>
				</div>

				{/* Subject Select */}
				<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]'>
					<label htmlFor="subject">Subject</label>
					{!curriculum &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="Subject">Subject</option>
						</select>
					}
					{curriculum === "Checkpoint" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="1110">ENGLISH 2ND LANGUAGE</option>
							<option value="1111">ENGLISH</option>
							<option value="1112">MATHEMATICS</option>
							<option value="1113">SCIENCE</option>
						</select>
					}
					{curriculum === "cieigcse" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="Subject">Subject</option>
							<option value="0985">Accounting 9-1(0985)</option>
							<option value="0452">Accounting(0452)</option>
							<option value="0606">Additional Mathematics(0606)</option>
							<option value="0512">Afrikaans 1st Language(0512)</option>
							<option value="0548">Afrikaans 2nd Language(0548)</option>
							<option value="0600">Agriculture(0600)</option>
							<option value="0409">American History (US)(0409)</option>
							<option value="7184">Arabic - First Language 9-1(7184)</option>
							<option value="0508">Arabic - First Language(0508)</option>
							<option value="0544">Arabic(0544)</option>
							<option value="0400">Art & Design(0400)</option>
							<option value="0415">Art and Design (US)(0415)</option>
							<option value="0989">Art and Design 9-1(0989)</option>
							<option value="0538">Bahasa Indonesia(0538)</option>
							<option value="0449">Bangladesh Studies(0449)</option>
							<option value="0438">Biology (US)(0438)</option>
							<option value="0970">Biology 9-1(0970)</option>
							<option value="0610">Biology(0610)</option>
							<option value="0986">Business Studies 9-1(0986)</option>
							<option value="0450">Business Studies(0450)</option>
							<option value="0439">Chemistry (US)(0439)</option>
							<option value="0971">Chemistry 9-1(0971)</option>
							<option value="0620">Chemistry(0620)</option>
							<option value="0637">Child Development(0637)</option>
							<option value="0509">Chinese - First Language(0509)</option>
							<option value="0523">Chinese - Second Language(0523)</option>
							<option value="0547">Chinese Mandarin(0547)</option>
							<option value="0984">Computer Science 9-1(0984)</option>
							<option value="0478">Computer Science(0478)</option>
							<option value="0420">Computer Studies(0420)</option>
							<option value="0514">Czech 1st Language(0514)</option>
							<option value="0445">Design & Technology(0445)</option>
							<option value="0979">Design and Technology 9-1(0979)</option>
							<option value="0453">Development Studies(0453)</option>
							<option value="0428">Drama (US)(0428)</option>
							<option value="0994">Drama 9-1(0994)</option>
							<option value="0411">Drama(0411)</option>
							<option value="0503">Dutch 1st Language(0503)</option>
							<option value="0515">Dutch(0515)</option>
							<option value="0987">Economics 9-1(0987)</option>
							<option value="0455">Economics(0455)</option>
							<option value="0990">English - First Language 9-1(0990)</option>
							<option value="0627">English - First Language 9–1(0627)</option>
							<option value="0477">English - Literature 9–1(0477)</option>
							<option value="0475">English - Literature in English(0475)</option>
							<option value="0992">English - Literature in English 9-1(0992)</option>
							<option value="0511">English - Second Language (count-in oral)(0511)</option>
							<option value="0993">English - Second Language (Speaking Endorsement) 9-1(0993)</option>
							<option value="0991">English - Second Language 9-1(0991)</option>
							<option value="0522">English 1st Language (UK)(0522)</option>
							<option value="0524">English 1st Language (US)(0524)</option>
							<option value="0500">English 1st Language(0500)</option>
							<option value="0510">English 2nd Language(0510)</option>
							<option value="0427">English Literature (US)(0427)</option>
							<option value="0486">English Literature(0486)</option>
							<option value="0454">Enterprise(0454)</option>
							<option value="0680">Environmental Management(0680)</option>
							<option value="0648">Food & Nutrition(0648)</option>
							<option value="0685">French - Foreign Language (UK)(0685)</option>
							<option value="0528">French (US)(0528)</option>
							<option value="7156">French 9-1(7156)</option>
							<option value="0501">French First Language(0501)</option>
							<option value="0520">French Foreign Language(0520)</option>
							<option value="0976">Geography 9-1(0976)</option>
							<option value="0460">Geography(0460)</option>
							<option value="0525">German - Foreign Language(0525)</option>
							<option value="0505">German 1st Language(0505)</option>
							<option value="7159">German 9-1(7159)</option>
							<option value="0677">German(0677)</option>
							<option value="0457">Global Perspectives(0457)</option>
							<option value="0543">Greek(0543)</option>
							<option value="0549">Hindi 2nd Language(0549)</option>
							<option value="0416">History (US)(0416)</option>
							<option value="0977">History 9-1(0977)</option>
							<option value="0470">History(0470)</option>
							<option value="0417">ICT(0417)</option>
							<option value="0447">India Studies(0447)</option>
							<option value="0545">Indonesian(0545)</option>
							<option value="0983">Information and Communication Technology 9-1(0983)</option>
							<option value="0531">IsiZulu 2nd Language(0531)</option>
							<option value="0493">Islamiyat(0493)</option>
							<option value="7164">Italian 9-1(7164)</option>
							<option value="0535">Italian(0535)</option>
							<option value="0507">Japanese 1st Language(0507)</option>
							<option value="0519">Japanese(0519)</option>
							<option value="0532">Kazakh 2nd Language(0532)</option>
							<option value="0521">Korean 1st Language(0521)</option>
							<option value="0480">Latin(0480)</option>
							<option value="0696">Malay 1st Language(0696)</option>
							<option value="0546">Malay Language(0546)</option>
							<option value="0697">Marine Science(0697)</option>
							<option value="0444">Mathematics (US)(0444)</option>
							<option value="0626">Mathematics 9-1(0626)</option>
							<option value="0980">Mathematics 9-1(0980)</option>
							<option value="0607">Mathematics International(0607)</option>
							<option value="0580">Mathematics(0580)</option>
							<option value="0581">Mathematics(0581)</option>
							<option value="0978">Music 9-1(0978)</option>
							<option value="0410">Music(0410)</option>
							<option value="0448">Pakistan Studies(0448)</option>
							<option value="0995">Physical Education 9-1(0995)</option>
							<option value="0413">Physical Education(0413)</option>
							<option value="0652">Physical Science(0652)</option>
							<option value="0443">Physics (US)(0443)</option>
							<option value="0972">Physics 9-1(0972)</option>
							<option value="0625">Physics(0625)</option>
							<option value="0504">Portuguese 1st Language(0504)</option>
							<option value="0540">Portuguese(0540)</option>
							<option value="0490">Religious Studies(0490)</option>
							<option value="0516">Russian 1st Language(0516)</option>
							<option value="0499">Sanskrit(0499)</option>
							{/* More options here... */}
						</select>
					}
					{curriculum === "cieolevel" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="7707">Accounting(7707)</option>
							<option value="4037">Additional Mathematics(4037)</option>
							<option value="5038">Agriculture(5038)</option>
							<option value="3180">Arabic(3180)</option>
							<option value="6090">Art & Design(6090)</option>
							<option value="7094">Bangladesh Studies(7094)</option>
							<option value="3204">Bengali(3204)</option>
							<option value="5090">Biology(5090)</option>
							<option value="7115">Business Studies(7115)</option>
							<option value="5070">Chemistry(5070)</option>
							<option value="5129">Combined Science(5129)</option>
							<option value="7100">Commerce(7100)</option>
							<option value="7101">Commercial Studies(7101)</option>
							<option value="2210">Computer Science(2210)</option>
							<option value="7010">Computer Studies(7010)</option>
							<option value="7048">Design And Communication(7048)</option>
							<option value="2281">Economics (2281)</option>
							<option value="1123">English Language (1123)</option>
							<option value="2010">English Literature (2010)</option>
							<option value="5014">Environmental Management (5014)</option>
							<option value="6130">Fashion And Textiles (6130)</option>
							<option value="6065">Food And Nutrition (6065)</option>
							<option value="3015">French (3015)</option>
							<option value="2217">Geography (2217)</option>
							<option value="3025">German (3025)</option>
							<option value="2069">Global Perspectives (2069)</option>
							<option value="2055">Hinduism (2055)</option>
							<option value="2134">History (Modern World Affairs) (2134)</option>
							<option value="2147">History (2147)</option>
							<option value="2158">History (2158)</option>
							<option value="2056">Islamic Religion And Culture (2056)</option>
							<option value="2068">Islamic Studies (2068)</option>
							<option value="7048">Design And Communication (7048)</option>
							<option value="2058">Islamiyat (2058)</option>
							<option value="5180">Marine Science (5180)</option>
							<option value="4024">Mathematics (Syllabus D) (4024)</option>
							<option value="3202">Nepali (3202)</option>
							<option value="2059">Pakistan Studies (2059)</option>
							<option value="5054">Physics (5054)</option>
							<option value="7110">Principles Of Accounts (7110)</option>
							<option value="2048">Religious Studies (2048)</option>
							<option value="3158">Setswana (3158)</option>
							<option value="3205">Sinhala (3205)</option>
							<option value="2251">Sociology (2251)</option>
							<option value="3035">Spanish (3035)</option>
							<option value="4040">Statistics (4040)</option>
							<option value="3162">Swahili (3162)</option>
							<option value="3226">Tamil (3226)</option>
							<option value="7096">Travel And Tourism (7096)</option>
							<option value="3247">Urdu 1st Language (3247)</option>
							<option value="3248">Urdu 2nd Language (3248)</option>
						</select>
					}
					{curriculum === "ciealevel" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="9706">Accounting (9706)</option>
							<option value="8779">Afrikaans 1st Language (AS Level only) (8779)</option>
							<option value="8679">Afrikaans Language (AS Level only) (8679)</option>
							<option value="9679">Afrikaans (9679)</option>
							<option value="9713">Applied ICT (9713)</option>
							<option value="8680">Arabic Language (AS Level only) (8680)</option>
							<option value="9680">Arabic (9680)</option>
							<option value="9479">Art & Design (from 2019) (9479)</option>
							<option value="9704">Art & Design (9704)</option>
							<option value="9700">Biology (9700)</option>
							<option value="9707">Business Studies (9707)</option>
							<option value="9609">Business (9609)</option>
							<option value="9701">Chemistry (9701)</option>
							<option value="8681">Chinese Language (AS Level only) (8681)</option>
							<option value="9715">Chinese (9715)</option>
							<option value="9274">Classical Studies (9274)</option>
							<option value="9618">Computer Science (from 2021) (9618)</option>
							<option value="9608">Computer Science (9608)</option>
							<option value="9691">Computing (9691)</option>
							<option value="9705">Design & Technology (9705)</option>
							<option value="9631">Design & Textiles (9631)</option>
							<option value="9481">Digital Media & Design (9481)</option>
							<option value="8041">Divinity (AS Level only) (8041)</option>
							<option value="9011">Divinity (9011)</option>
							<option value="9482">Drama (9482)</option>
							<option value="9708">Economics (9708)</option>
							<option value="8021">English General Paper (8021)</option>
							<option value="8695">English Language & Literature (8695)</option>
							<option value="9093">English Language 2 (9093)</option>
							<option value="8693">English Language (8693)</option>
							<option value="9695">English Literature (9695)</option>
							<option value="8291">Environmental Management (8291)</option>
							<option value="8682">French Language (AS Level only) (8682)</option>
							<option value="8670">French Literature (AS Level only) (8670)</option>
							<option value="9716">French (9716)</option>
							<option value="9231">Further Mathematics (9231)</option>
							<option value="8001">General Paper (AS Level only) (8001)</option>
							<option value="8004">General Paper (AS Level only) (8004)</option>
							<option value="9696">Geography (9696)</option>
							<option value="8683">German Language (AS Level only) (8683)</option>
							<option value="9717">German (9717)</option>
							<option value="9239">Global Perspectives & Research (9239)</option>
							<option value="8987">Global Perspectives (8987)</option>
							<option value="8687">Hindi Language (AS Level only) (8687)</option>
							<option value="8675">Hindi Literature (AS Level only) (8675)</option>
							<option value="9687">Hindi (9687)</option>
							<option value="8058">Hinduism (AS Level only) (8058)</option>
							<option value="9014">Hinduism (9014)</option>
							<option value="9487">Hinduism (9487)</option>
							<option value="9697">History 2 (9697)</option>
							<option value="9389">History (9389)</option>
							<option value="9489">History (9489)</option>
							<option value="9626">Information Technology (9626)</option>
							<option value="8053">Islamic Studies (AS Level only) (8053)</option>
							<option value="9013">Islamic Studies (9013)</option>
							<option value="9488">Islamic Studies (9488)</option>
							<option value="8281">Japanese Language (AS Level only) (8281)</option>
							<option value="9084">LAW (9084)</option>
							<option value="9688">Marathi (9688)</option>
							<option value="9693">Marine Science (9693)</option>
							<option value="9280">Mathematics (US) (9280)</option>
							<option value="9709">Mathematics Mechanics (9709)</option>
							<option value="9709">Mathematics Mechanics 1 (9709)</option>
							<option value="9709">Mathematics Mechanics 2 (9709)</option>
							<option value="9709">Mathematics Probability & Statistics 1 (9709)</option>
							<option value="9709">Mathematics Probability & Statistics 2 (9709)</option>
							<option value="9709">Mathematics Pure Math 1 (9709)</option>
							<option value="9709">Mathematics Pure Math 2,3 (9709)</option>
							<option value="9709">Mathematics Statistics 1 (9709)</option>
							<option value="9709">Mathematics Statistics 2 (9709)</option>
							<option value="9607">Media Studies (9607)</option>
							<option value="8663">Music (AS Level only) (8663)</option>
							<option value="9483">Music (9483)</option>
							<option value="9703">Music (9703)</option>
							<option value="8024">Nepal Studies (AS Level only) (8024)</option>
							<option value="9396">Physical Education (9396)</option>
							<option value="8780">Physical Science (8780)</option>
							<option value="9702">Physics (9702)</option>
							<option value="9718">Portuguese (A Level only) (9718)</option>
							<option value="8684">Portuguese Language (AS Level only) (8684)</option>
							<option value="8672">Portuguese Literature (AS Level only) (8672)</option>
							<option value="9990">Psychology (from 2018) (9990)</option>
							<option value="9698">Psychology (9698)</option>
							<option value="9699">Sociology (9699)</option>
							<option value="9719">Spanish (A Level only) (9719)</option>
							<option value="8665">Spanish 1st Language (AS Level only) (8665)</option>
							<option value="8685">Spanish Language (AS Level only) (8685)</option>
							<option value="8673">Spanish Literature (AS Level only) (8673)</option>
							<option value="9689">Tamil (9689)</option>
							<option value="8690">Telugu Language (AS Level only) (8690)</option>
							<option value="9690">Telugu (9690)</option>
							<option value="9694">Thinking Skill (9694)</option>
							<option value="9395">Travel & Tourism (9395)</option>
							<option value="8686">Urdu Language (AS Level only) (8686)</option>
							<option value="9686">Urdu Pakistan (9686)</option>
							<option value="9676">Urdu (9676)</option>
						</select>
					}
					{curriculum === "ciepreu" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="9837">Art and Design (9837)</option>
							<option value="9799">Art History (9799)</option>
							<option value="9790">Biology (9790)</option>
							<option value="9771">Business and Management (9771)</option>
							<option value="9791">Chemistry (9791)</option>
							<option value="9787">Classical Greek (9787)</option>
							<option value="9786">Classical Heritage (9786)</option>
							<option value="9770">Comparative Government and Politics (9770)</option>
							<option value="9801">Drama and Theatre (9801)</option>
							<option value="9772">Economics (9772)</option>
							<option value="9765">English - Literature in English (9765)</option>
							<option value="1342">French (Short Course) (1342)</option>
							<option value="9779">French (9779)</option>
							<option value="1348">Further Mathematics (Short Course) (1348)</option>
							<option value="9795">Further Mathematics (9795)</option>
							<option value="9768">Geography (9768)</option>
							<option value="1343">German (Short Course) (1343)</option>
							<option value="9780">German (9780)</option>
							<option value="1340">Global Perspectives (Short Course) (UK) (1340)</option>
							<option value="9766">Global Perspectives (9766)</option>
							<option value="9777">Global Perspectives (9777)</option>
							<option value="9769">History (9769)</option>
							<option value="1346">Italian (Short Course) (1346)</option>
							<option value="9783">Italian (9783)</option>
							<option value="9788">Latin (9788)</option>
							<option value="1341">Mandarin Chinese (Short Course) (1341)</option>
							<option value="9778">Mandarin Chinese (9778)</option>
							<option value="1347">Mathematics (Statistics With Pure Mathematics) (1347)</option>
							<option value="9794">Mathematics (9794)</option>
							<option value="9800">Music (9800)</option>
							<option value="9774">Philosophy and Theology (9774)</option>
							<option value="9792">Physics (9792)</option>
							<option value="9773">Psychology (9773)</option>
							<option value="1345">Russian (Short Course) (1345)</option>
							<option value="9782">Russian (9782)</option>
							<option value="1344">Spanish (Short Course) (1344)</option>
							<option value="9781">Spanish (9781)</option>
						</select>
					}
					{curriculum === "Edexceligcse" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="4AC0">Accounting (4AC0)</option>
							<option value="4AR0">Arabic First Language (4AR0)</option>
							<option value="Art & Design">Art & Design</option>
							<option value="4BI0">Biology (4BI0)</option>
							<option value="4BS0">Business Studies (4BS0)</option>
							<option value="4CH0">Chemistry (4CH0)</option>
							<option value="4CN0">Chinese (4CN0)</option>
							<option value="4CA0">Classical Arabic (4CA0)</option>
							<option value="4CM0">Commerce (4CM0)</option>
							<option value="4EC0">Economics (4EC0)</option>
							<option value="4ES0">English 2nd Language (4ES0)</option>
							<option value="4EA0">English A (4EA0)</option>
							<option value="4EB0">English B (4EB0)</option>
							<option value="4ET0">English Literature (4ET0)</option>
							<option value="4FR0">French (4FR0)</option>
							<option value="4PM0">Further Pure Math (4PM0)</option>
							<option value="4GE0">Geography (4GE0)</option>
							<option value="4GN0">German (4GN0)</option>
							<option value="4GL0">Global Citizenship (4GL0)</option>
							<option value="4HI0">History (4HI0)</option>
							<option value="4HB0">Human Biology (4HB0)</option>
							<option value="4IT0">ICT (4IT0)</option>
							<option value="4IS0">Islamiyat (4IS0)</option>
							<option value="4MA0">Mathematics A (4MA0)</option>
							<option value="4MB0">Mathematics B (4MB0)</option>
							<option value="4PH0">Physics (4PH0)</option>
							<option value="4SC0">Science (Double Award) (4SC0)</option>
							<option value="4SP0">Spanish (4SP0)</option>

						</select>
					}
					{curriculum === "Edexceligcse(9-1)" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="4AC1">Accounting 9-1 (4AC1)</option>
							<option value="4AA1">Arabic 9-1 (4AA1)</option>
							<option value="4BI1">Biology 9-1 (4BI1)</option>
							<option value="4BS1">Business 9-1 (4BS1)</option>
							<option value="4CH1">Chemistry 9-1 (4CH1)</option>
							<option value="4CN1">Chinese 9-1 (4CN1)</option>
							<option value="4CM1">Commerce 9-1 (4CM1)</option>
							<option value="4EC1">Economics 9-1 (4EC1)</option>
							<option value="4ES1">English 2nd Language 9-1 (4ES1)</option>
							<option value="4EA1">English A 9-1 (4EA1)</option>
							<option value="4EB1">English B 9-1 (4EB1)</option>
							<option value="4ET1">English Literature 9-1 (4ET1)</option>
							<option value="4FR1">French 9-1 (4FR1)</option>
							<option value="4PM1">Further Pure Math 9-1 (4PM1)</option>
							<option value="4GE1">Geography 9-1 (4GE1)</option>
							<option value="4GN1">German 9-1 (4GN1)</option>
							<option value="4GL1">Global Citizenship 9-1 (4GL1)</option>
							<option value="4HI1">History 9-1 (4HI1)</option>
							<option value="4HB1">Human Biology 9-1 (4HB1)</option>
							<option value="4IT1">ICT 9-1 (4IT1)</option>
							<option value="4MA1">Mathematics A 9-1 (4MA1)</option>
							<option value="4MB1">Mathematics B 9-1 (4MB1)</option>
							<option value="4PH1">Physics 9-1 (4PH1)</option>
							<option value="4SD0">Science (Double Award) 9-1 (4SD0)</option>
							<option value="4SP1">Spanish 9-1 (4SP1)</option>
						</select>
					}
					{curriculum === "Edexcelalevel" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="WAC0">Accounting (Modular Syllabus) (WAC0)</option>
							<option value="WAC1">Accounting (WAC1)</option>
							<option value="WIT0">Applied ICT (WIT0)</option>
							<option value="WAA02">Arabic (WAA02)</option>
							<option value="WBI01">Biology (WBI01)</option>
							<option value="WBI11">Biology (WBI11)</option>
							<option value="WBS01">Business Studies (WBS01)</option>
							<option value="WBS11">Business (WBS11)</option>
							<option value="WCH01">Chemistry (WCH01)</option>
							<option value="WCH11">Chemistry (WCH11)</option>
							<option value="WEC01">Economics (WEC01)</option>
							<option value="WEC11">Economics (WEC11)</option>
							<option value="WET01">English Literature (WET01)</option>
							<option value="WEN01">English (WEN01)</option>
							<option value="WFR0">French (WFR0)</option>
							<option value="WFM01">Further Pure Mathematics (WFM01)</option>
							<option value="WGE01">Geography (WGE01)</option>
							<option value="WGN0">German (WGN0)</option>
							<option value="WGK0">Greek (WGK0)</option>
							<option value="WHI01">History (WHI01)</option>
							<option value="WIT11">Information Technology (WIT11)</option>
							<option value="YLA1">Law (YLA1)</option>
							<option value="WDM01">Mathematics D1 (WDM01)</option>
							<option value="WDM11">Mathematics D1 (WDM11)</option>
							<option value="WME01">Mathematics M1, M2, M3 (WME01)</option>
							<option value="WMA11">Mathematics Pure (WMA11)</option>
							<option value="WST01">Mathematics S1, S2, S3, S4 (WST01)</option>
							<option value="WMA01/WMA02">Maths Core (WMA01/WMA02)</option>
							<option value="WPH01">Physics (WPH01)</option>
							<option value="WPH11">Physics (WPH11)</option>
							<option value="WPS01">Psychology (WPS01)</option>
							<option value="WSP0">Spanish (WSP0)</option>
						</select>
					}
					{curriculum === "ocrgsce9-1" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="J198">Ancient History (9-1) (J198)</option>
							<option value="J170">Art and Design (9-1) J170</option>
							<option value="J171">Art and Design (9-1) J171</option>
							<option value="J172">Art and Design (9-1) J172</option>
							<option value="J173">Art and Design (9-1) J173</option>
							<option value="J174">Art and Design (9-1) J174</option>
							<option value="J175">Art and Design (9-1) J175</option>
							<option value="J176">Art and Design (9-1) J176</option>
							<option value="J247">Biology A (9-1) - Gateway Science Suite (J247)</option>
							<option value="J257">Biology B (9-1) - Twenty First Century Science Suite (J257)</option>
							<option value="J204">Business (9-1) (J204)</option>
							<option value="J248">Chemistry A (9-1) - Gateway Science Suite (J248)</option>
							<option value="J258">Chemistry B (9-1) - Twenty First Century Science Suite (J258)</option>
							<option value="J270">Citizenship Studies (9-1) (J270)</option>
							<option value="J199">Classical Civilisation (9-1) (J199)</option>
							<option value="J292">Classical Greek (9-1) (J292)</option>
							<option value="J276">Computer Science (9-1) (2016) (J276)</option>
							<option value="J277">Computer Science (9-1) (J277)</option>
							<option value="J310">Design and Technology (9-1) (J310)</option>
							<option value="J316">Drama (9-1) (J316)</option>
							<option value="J205">Economics (9-1) (J205)</option>
							<option value="J351">English Language (9-1) (J351)</option>
							<option value="J352">English Literature (9-1) (J352)</option>
							<option value="J309">Food Preparation and Nutrition (9-1) (J309)</option>
							<option value="J383">Geography A (Geographical Themes) (9-1) (J383)</option>
							<option value="J384">Geography B (Geography for Enquiring Minds) (9-1) (J384)</option>
							<option value="J410">History A (Explaining the Modern World) (9-1) (J410)</option>
							<option value="J411">History B (Schools History Project) (9-1) (J411)</option>
							<option value="J282">Latin (9-1) (J282)</option>
							<option value="J560">Mathematics (9-1) (J560)</option>
							<option value="J560">Mathematics (J560)</option>
							<option value="J200">Media Studies (9-1) (J200)</option>
							<option value="J536">Music (9-1) (J536)</option>
							<option value="J587">Physical Education (9-1) (J587)</option>
							<option value="J249">Physics A (9-1) - Gateway Science Suite (J249)</option>
							<option value="J259">Physics B (9-1) - Twenty First Century Science Suite (J259)</option>
							<option value="J203">Psychology (9-1) (J203)</option>
							<option value="J625">Religious Studies (9-1) (J625)</option>
							<option value="J125">Religious Studies (9-1) (J125)</option>
							<option value="J250">Science A, Combined (9-1) - Gateway Science Suite (J250)</option>
							<option value="J260">Science B, Combined (9-1) - Twenty First Century Science Suite (J260)</option>
						</select>
					}
					{curriculum === "ocras" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="H007">Ancient History (H007)</option>
							<option value="H200">Art and Design (H200)</option>
							<option value="H020">Biology A (H020)</option>
							<option value="H022">Biology B (Advancing Biology) (H022)</option>
							<option value="H031">Business (H031)</option>
							<option value="H032">Chemistry A (H032)</option>
							<option value="H033">Chemistry B (Salters) (H033)</option>
							<option value="H008">Classical Civilisation (H008)</option>
							<option value="H044">Classical Greek (H044)</option>
							<option value="H046">Computer Science (H046)</option>
							<option value="H004">Design and Technology (H004)</option>
							<option value="H059">Drama and Theatre (H059)</option>
							<option value="H060">Economics (H060)</option>
							<option value="H070">English Language (H070)</option>
							<option value="H074">English Language and Literature (EMC) (H074)</option>
							<option value="H072">English Literature (H072)</option>
							<option value="H010">Film Studies (H010)</option>
							<option value="H081">Geography (H081)</option>
							<option value="H014">Geology (H014)</option>
							<option value="H105">History A (H105)</option>
							<option value="H043">Latin (H043)</option>
							<option value="H015">Law (H015)</option>
							<option value="H230">Mathematics A (H230)</option>
							<option value="H235">Mathematics A, Further (H235)</option>
							<option value="H630">Mathematics B (MEI) (H630)</option>
							<option value="H635">Mathematics B (MEI), Further (H635)</option>
							<option value="H009">Media Studies (H009)</option>
							<option value="H143">Music (H143)</option>
							<option value="H155">Physical Education (H155)</option>
							<option value="H156">Physics A (H156)</option>
							<option value="H157">Physics B (Advancing Physics) (H157)</option>
							<option value="H167">Psychology (H167)</option>
							<option value="H173">Religious Studies (H173)</option>
							<option value="H180">Sociology (H180)</option>
						</select>
					}
					{curriculum === "ocralevel" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="H407">Ancient History (H407)</option>
							<option value="H600">Art and Design (H600)</option>
							<option value="H420">Biology A (H420)</option>
							<option value="H422">Biology B (Advancing Biology) (H422)</option>
							<option value="H431">Business (H431)</option>
							<option value="H432">Chemistry A (H432)</option>
							<option value="H433">Chemistry B (Salters) (H433)</option>
							<option value="H408">Classical Civilisation (H408)</option>
							<option value="H444">Classical Greek (H444)</option>
							<option value="H446">Computer Science (H446)</option>
							<option value="H404">Design and Technology (H404)</option>
							<option value="H405">Design and Technology (H405)</option>
							<option value="H406">Design and Technology (H406)</option>
							<option value="H459">Drama and Theatre (H459)</option>
							<option value="H460">Economics (2015) (H460)</option>
							<option value="H460">Economics (H460)</option>
							<option value="H470">English Language (H470)</option>
							<option value="H474">English Language and Literature (EMC) (H474)</option>
							<option value="H472">English Literature (H472)</option>
							<option value="H410">Film Studies (H410)</option>
							<option value="H481">Geography (H481)</option>
							<option value="H414">Geology (H414)</option>
							<option value="H505">History A (H505)</option>
							<option value="H443">Latin (H443)</option>
							<option value="H415">Law (H415)</option>
							<option value="H418">Law (H418)</option>
							<option value="H240">Mathematics A (H240)</option>
							<option value="H245">Mathematics A, Further (H245)</option>
							<option value="H640">Mathematics B (MEI) (H640)</option>
							<option value="H645">Mathematics B (MEI), Further (H645)</option>
							<option value="H409">Media Studies (H409)</option>
							<option value="H543">Music (H543)</option>
							<option value="H555">Physical Education (H555)</option>
							<option value="H556">Physics A (H556)</option>
							<option value="H557">Physics B (Advancing Physics) (H557)</option>
							<option value="H567">Psychology (H567)</option>
							<option value="H573">Religious Studies (H573)</option>
							<option value="H580">Sociology (H580)</option>
						</select>
					}
					{curriculum === "aqagsce" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="8201">Art and Design (8201; 8202; 8203; 8204; 8205; 8206)</option>
							<option value="8638">Bengali (8638)</option>
							<option value="8461">Biology (8461)</option>
							<option value="8132">Business (8132)</option>
							<option value="8462">Chemistry (8462)</option>
							<option value="8673">Chinese (Spoken Mandarin) (8673)</option>
							<option value="8100">Citizenship Studies (8100)</option>
							<option value="8465">Combined Science: Synergy (8465)</option>
							<option value="8464">Combined Science: Trilogy (8464)</option>
							<option value="8520">Computer Science (8520)</option>
							<option value="8525">Computer Science (8525)</option>
							<option value="8236">Dance (8236)</option>
							<option value="8552">Design and Technology (8552)</option>
							<option value="8261">Drama (8261)</option>
							<option value="8136">Economics (8136)</option>
							<option value="8852">Engineering (8852)</option>
							<option value="8700">English Language (8700)</option>
							<option value="8702">English Literature (8702)</option>
							<option value="8585">Food Preparation and Nutrition (8585)</option>
							<option value="8658">French (8658)</option>
							<option value="8035">Geography (8035)</option>
							<option value="8668">German (8668)</option>
							<option value="8145">History (8145)</option>
							<option value="8633">Italian (8633)</option>
							<option value="8300">Mathematics (8300)</option>
							<option value="8572">Media Studies (8572)</option>
							<option value="8678">Modern Hebrew (8678)</option>
							<option value="8271">Music (8271)</option>
							<option value="8683">Panjabi (8683)</option>
							<option value="8582">Physical Education (8582)</option>
							<option value="8463">Physics (8463)</option>
							<option value="8688">Polish (8688)</option>
							<option value="8182">Psychology (8182)</option>
							<option value="8062">Religious Studies A (8062)</option>
							<option value="8063">Religious Studies B (8063)</option>
							<option value="8061">Religious Studies: Short course (8061)</option>
							<option value="8192">Sociology (8192)</option>
							<option value="8698">Spanish (8698)</option>
							<option value="8382">Statistics (8382)</option>
							<option value="8648">Urdu (8648)</option>
						</select>
					}
					{curriculum === "aqaas" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="7126">Accounting (7126)</option>
							<option value="7241">Art and Design (7241 - 7246)</option>
							<option value="7401">Biology (7401)</option>
							<option value="7131">Business (7131)</option>
							<option value="7404">Chemistry (7404)</option>
							<option value="7516">Computer Science (7516)</option>
							<option value="7236">Dance (7236)</option>
							<option value="7561">Design and Technology: Fashion and Textiles (7561)</option>
							<option value="7551">Design and Technology: Product Design (7551)</option>
							<option value="7261">Drama and Theatre (7261)</option>
							<option value="7135">Economics (7135)</option>
							<option value="7701">English Language (7701)</option>
							<option value="7706">English Language and Literature (7706)</option>
							<option value="7711">English Literature A (7711)</option>
							<option value="7716">English Literature B (7716)</option>
							<option value="7446">Environmental Science (7446)</option>
							<option value="7651">French (7651)</option>
							<option value="7366">Further Mathematics (7366)</option>
							<option value="7036">Geography (7036)</option>
							<option value="7661">German (7661)</option>
							<option value="7041">History (7041)</option>
							<option value="7161">Law (7161)</option>
							<option value="7356">Mathematics (7356)</option>
							<option value="7571">Media Studies (7571)</option>
							<option value="7271">Music (7271)</option>
							<option value="7171">Philosophy (7171)</option>
							<option value="7581">Physical Education (7581)</option>
							<option value="7407">Physics (7407)</option>
							<option value="7151">Politics (7151)</option>
							<option value="7181">Psychology (7181)</option>
							<option value="7061">Religious Studies (7061)</option>
							<option value="7191">Sociology (7191)</option>
							<option value="7691">Spanish (7691)</option>
						</select>
					}
					{curriculum === "aqaalevel" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="7127">Accounting (7127)</option>
							<option value="7201">Art and Design (7201 - 7206)</option>
							<option value="7637">Bengali (Listening, Reading, Writing) (7637)</option>
							<option value="7677">Biblical Hebrew (7677)</option>
							<option value="7402">Biology (7402)</option>
							<option value="7132">Business (7132)</option>
							<option value="7405">Chemistry (7405)</option>
							<option value="7517">Computer Science (7517)</option>
							<option value="7237">Dance (7237)</option>
							<option value="7562">Design and Technology: Fashion and Textiles (7562)</option>
							<option value="7552">Design and Technology: Product Design (7552)</option>
							<option value="7262">Drama and Theatre (7262)</option>
							<option value="7136">Economics (7136)</option>
							<option value="7702">English Language (7702)</option>
							<option value="7707">English Language and Literature (7707)</option>
							<option value="7712">English Literature A (7712)</option>
							<option value="7717">English Literature B (7717)</option>
							<option value="7447">Environmental Science (7447)</option>
							<option value="7652">French (7652)</option>
							<option value="7367">Further Mathematics (7367)</option>
							<option value="7037">Geography (7037)</option>
							<option value="7662">German (7662)</option>
							<option value="7042">History (7042)</option>
							<option value="7162">Law (7162)</option>
							<option value="7357">Mathematics (7357)</option>
							<option value="7572">Media Studies (7572)</option>
							<option value="7672">Modern Hebrew (Listening, Reading, Writing) (7672)</option>
							<option value="7272">Music (7272)</option>
							<option value="7682">Panjabi (Listening, Reading, Writing) (7682)</option>
							<option value="7172">Philosophy (7172)</option>
							<option value="7582">Physical Education (7582)</option>
							<option value="7408">Physics (7408)</option>
							<option value="7687">Polish (Listening, Reading, Writing) (7687)</option>
							<option value="7152">Politics (7152)</option>
							<option value="7182">Psychology (7182)</option>
							<option value="7062">Religious Studies (7062)</option>
							<option value="7192">Sociology (7192)</option>
							<option value="7692">Spanish (7692)</option>
						</select>
					}
				</div>
			</div>

			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
				{/* Paper Dropdown */}
				<div className='card flex justify-content-center'>
					{!curriculum && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Checkpoint" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperscheckpoint}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieolevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersFour}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciepreu" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paper3}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paper1}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperExtra}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={unit}
						placeholder="Unit" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocrgsce9-1" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersOther}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocras" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocralevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperextra}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaas" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paper1}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqagsce" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaalevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>
				{/* Year Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>

					<div className='card flex justify-content-center'>
						{!curriculum && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Checkpoint" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={Years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "cieigcse" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={Yearsfull}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "cieolevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ciealevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={Yearsfull}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ciepreu" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexceligcse" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexcelalevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={Yearsfull}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ocrgsce9-1" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years2020}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ocras" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2022}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ocralevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2022}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "aqaas" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "aqagsce" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "aqaalevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					</div>
				</div>

				{/* Season Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>

					{!curriculum && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Checkpoint" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieolevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season3}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciepreu" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocrgsce9-1" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocras" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocralevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaas" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqagsce" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaalevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>


				{/* Zone Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>
					{!curriculum && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zones}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Checkpoint" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zones}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieolevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zoneFour} placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zonefull}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciepreu" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocrgsce9-1" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocras" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ocralevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaas" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqagsce" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "aqaalevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>
				<div className="">
					<button onClick={fetchcurriculum} className="bg-blue-500 lg:w-[100%]  text-white lg:px-[120px] px-[93px] py-3 lg:rounded-r-md rounded-b-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
						<CiSearch className='text-3xl' />
					</button>
				</div>
			</div>

		</div>
	);
};

export default Searchbox;
