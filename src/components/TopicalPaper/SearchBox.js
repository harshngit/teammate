import { Select, Option, Input, Radio } from '@material-tailwind/react';
import React, { useState } from 'react'
import { CiGlobe, CiSearch } from "react-icons/ci";
import { TbBooks } from 'react-icons/tb';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
const Searchbox = ({ selectedPapers, setSelectedPapers, selectedYears, setSelectedYears, selectedSeasons, setSelectedSeasons,
	selectedZone, setSelectedZone, papers, years, seasons, zones, curriculum, setCurriculum, subject, paper1, setSubject, fetchcurriculum, paperscheckpoint, Years, zone0, season2, season, Yearsfull, zoneFour, papersFour, season3, zonefull, paper3, year, paperExtra, unit, papersOther, years2020, year2022, paperextra, selectedTopic, topic, setSelectedTopic, zone2, chaptersBiology, papersFive, zoneSix, chaptersLifeSciences, paperanother, year2019, chapterScience, year2017, chaptersAdvancedBiology, papersalevel, setLevel, level, chaptersBiologyAHL, zone03, chaptersBiologyKey, papersSet, chaptersBiologyExchange, paper3s, chaptersBiologyExtended, papersA, chaptersBiologyOrganization, chaptersBiologyOrganization2, biologyChapters, functionsChapters }) => {
	return (
		<div className="bg-[#acd0eee6] border-[2px] border-blue-600 ml-[70px] mr-[50px] p-4 rounded-lg">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Curriculum Select */}
				<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]' >
					<label htmlFor="curriculum">Curriculum</label>
					<select
						onChange={(e) => setCurriculum(e.target.value)}
						id="curriculum"
						name="curriculum"
						className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
					>
						<optgroup label="CIE" className="text-gray-900 font-semibold">
							<option value="">Curriculum</option>
							<option value="cieigcse">IGCSE</option>
							<option value="ciealevel">A-LEVEL</option>
						</optgroup>
						<optgroup label="Edexcel" className="text-gray-900 font-semibold">
							<option value="Edexceligcse">IGCSE</option>
							<option value="Edexceligcse(9-1)">IGCSE (9-1)</option>
							<option value="Edexcelalevel">A-LEVEL</option>
						</optgroup>
						<optgroup label="IB" className="text-gray-900 font-semibold">
							<option value="IBDIPLOMA">DIPLOMA</option>
						</optgroup>
						<optgroup label="OCR" className="text-gray-900 font-semibold">
							<option value="OCRGCSE (9-1)">GCSE (9-1)</option>
							<option value="OCRAS">AS</option>
							<option value="OCRA-level">A-LEVEL</option>
						</optgroup>
						<optgroup label="AQA" className="text-gray-900 font-semibold">
							<option value="AQAGCSE">GCSE</option>
							<option value="AQAAS">AS</option>
							<option value="AQAA-level">A-LEVEL</option>
						</optgroup>
						<optgroup label="MALAYSIA" className="text-gray-900 font-semibold">
							<option value="SPM">SPM</option>
						</optgroup>
					</select>
				</div>


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
					{curriculum === "cieigcse" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="0606">Additional Mathematics(0606)</option>
							<option value="0610">Biology(0610)</option>
							<option value="0620">Chemistry(0620)</option>
							<option value="0455">Economics(0455)</option>
							<option value="0500">English 1st Language(0500)</option>
							<option value="0510">English 2nd Language(0510)</option>
							<option value="0470">History(0470)</option>
							<option value="0417">ICT(0417)</option>
							<option value="0607">Mathematics International(0607)</option>
							<option value="0580">Mathematics(0580)</option>
							<option value="0625">Physics(0625)</option>
							<option value="0653">Science Combined(0653)</option>
							<option value="0654">Science Coordinate(0490)</option>
							<option value="0495">Sociology (0495)</option>
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
							<option value="9700">Biology(9700)</option>
							<option value="9701">Chemistry(9701)</option>
							<option value="9618">Computer Science (from 2021)(9618)</option>
							<option value="9608">Computer Science(9608)</option>
							<option value="9708">Economics(9708)</option>
							<option value="9231">Further Mathematics (9231)</option>
							<option value="9389">History (9389)</option>
							<option value="9709_mechanics">Mathematics Mechanics (9709)</option>
							<option value="9709_mechanics_1">Mathematics Mechanics 1 (9709)</option>
							<option value="9709_mechanics_2">Mathematics Mechanics 2 (9709)</option>
							<option value="9709_prob_stat_1">Mathematics Probability & Statistics 1 (9709)</option>
							<option value="9709_prob_stat_2">Mathematics Probability & Statistics 2 (9709)</option>
							<option value="9709_pure_1">Mathematics Pure Math 1 (9709)</option>
							<option value="9709_pure_2_3">Mathematics Pure Math 2,3 (9709)</option>
							<option value="9709_stat_1">Mathematics Statistics 1 (9709)</option>
							<option value="9709_stat_2">Mathematics Statistics 2 (9709)</option>
							<option value="9396">Physical Education (9396)</option>
							<option value="9702">Physics (9702)</option>
							<option value="9990">Psychology (from 2018) (9990)</option>
							<option value="9699">Sociology (9699)</option>

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
							<option value="4BI0">Biology (4BI0)</option>
							<option value="4CH0">Chemistry (4CH0)</option>
							<option value="4PM0">Further Pure Math (4PM0)</option>
							<option value="4MA0">Mathematics A (4MA0)</option>
							<option value="4MB0">Mathematics B (4MB0)</option>
							<option value="4PH0">Physics (4PH0)</option>

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
							<option value="4BI1">Biology 9-1 (4BI1)</option>
							<option value="4CH1">Chemistry 9-1 (4CH1)</option>
							<option value="4PM1">Further Pure Math 9-1 (4PM1)</option>
							<option value="4MA1">Mathematics A 9-1 (4MA1)</option>
							<option value="4MB1">Mathematics B 9-1 (4MB1)</option>
							<option value="4PH1">Physics 9-1 (4PH1)</option>
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
							<option value="WBI01">Biology (WBI01)</option>
							<option value="WBI11">Biology (WBI11)</option>
							<option value="WCH01">Chemistry (WCH01)</option>
							<option value="WCH11">Chemistry (WCH11)</option>
							<option value="WET01">English Literature (WET01)</option>
							<option value="WEN01">English (WEN01)</option>
							<option value="WFM01">Further Pure Mathematics (WFM01)</option>
							<option value="WGE01">Geography (WGE01)</option>
							<option value="WDM01">Mathematics D1 (WDM01)</option>
							<option value="WME01">Mathematics M1,M2,M3 (WME01)</option>
							<option value="WMA11">Mathematics Pure (WMA11)</option>
							<option value="WST01">Mathematics S1,S2,S3,S4 (WST01)</option>
							<option value="WMA01/WMA02">Maths Core (WMA01/WMA02)</option>
							<option value="WPH01">Physics (WPH01)</option>
							<option value="WPH11">Physics (WPH11)</option>
							<option value="WPS01">Psychology (WPS01)</option>
						</select>
					}
					{curriculum === "IBDIPLOMA" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="WBI01">Biology (WBI01)</option>
							<option value="WBI11">Biology (WBI11)</option>
							<option value="WCH01">Chemistry (WCH01)</option>
							<option value="WCH11">Chemistry (WCH11)</option>
							<option value="WET01">English Literature (WET01)</option>
							<option value="WEN01">English (WEN01)</option>
							<option value="WFM01">Further Pure Mathematics (WFM01)</option>
							<option value="WGE01">Geography (WGE01)</option>
							<option value="WDM01">Mathematics D1 (WDM01)</option>
							<option value="WME01">Mathematics M1,M2,M3 (WME01)</option>
							<option value="WMA11">Mathematics Pure (WMA11)</option>
							<option value="WST01">Mathematics S1,S2,S3,S4 (WST01)</option>
							<option value="WMA01/WMA02">Maths Core (WMA01/WMA02)</option>
							<option value="WPH01">Physics (WPH01)</option>
							<option value="WPH11">Physics (WPH11)</option>
							<option value="WPS01">Psychology (WPS01)</option>
						</select>
					}
					{curriculum === "OCRGCSE (9-1)" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="J247">Biology A (9-1) - Gateway Science Suite J247</option>
							<option value="J257">Biology B (9-1) - Twenty First Century Science Suite J257</option>
							<option value="J248">Chemistry A (9-1) - Gateway Science Suite J248</option>
							<option value="J258">Chemistry B (9-1) - Twenty First Century Science Suite J258</option>
							<option value="J560">Mathematics (9-1) J560</option>
							<option value="J249">Physics A (9-1) - Gateway Science Suite J249</option>
							<option value="J259">Physics B (9-1) - Twenty First Century Science Suite J259</option>
							<option value="J250">Science A, Combined (9-1) - Gateway Science Suite J250</option>
							<option value="J260">Science B, Combined (9-1) - Twenty First Century Science Suite J260</option>
						</select>
					}
					{curriculum === "OCRAS" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="H020">Biology A (H020)</option>
							<option value="H022">Biology B (Advancing Biology) (H022)</option>
							<option value="H032">Chemistry A (H032)</option>
							<option value="H033">Chemistry B (Salters) (H033)</option>
							<option value="H230">Mathematics A (H230)</option>
							<option value="H235">Mathematics A, Further (H235)</option>
							<option value="H630">Mathematics B (MEI) (H630)</option>
							<option value="H156">Physics A (H156)</option>
							<option value="H157">Physics B (Advancing Physics) (H157)</option>
						</select>
					}
					{curriculum === "OCRA-level" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="H420">Biology A (H420)</option>
							<option value="H422">Biology B (Advancing Biology) (H422)</option>
							<option value="H432">Chemistry A (H432)</option>
							<option value="H433">Chemistry B (Salters) (H433)</option>
							<option value="H240">Mathematics A (H240)</option>
							<option value="H245">Mathematics A, Further (H245)</option>
							<option value="H640">Mathematics B (MEI) (H640)</option>
							<option value="H556">Physics A (H556)</option>
							<option value="H557">Physics B (Advancing Physics) (H557)</option>
						</select>
					}
					{curriculum === "AQAGCSE" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="8461">Biology (8461)</option>
							<option value="8462">Chemistry (8462)</option>
							<option value="8465">Combined Science: Synergy (8465)</option>
							<option value="8464">Combined Science: Trilogy (8464)</option>
							<option value="8300">Mathematics (8300)</option>
							<option value="8463">Physics (8463)</option>
						</select>
					}
					{curriculum === "AQAAS" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="7401">Biology (7401)</option>
							<option value="7404">Chemistry (7404)</option>
							<option value="7366">Further Mathematics (7366)</option>
							<option value="7356">Mathematics (7356)</option>
							<option value="7407">Physics (7407)</option>
						</select>
					}
					{curriculum === "AQAA-level" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="7401">Biology (7401)</option>
							<option value="7404">Chemistry (7404)</option>
							<option value="7366">Further Mathematics (7366)</option>
							<option value="7356">Mathematics (7356)</option>
							<option value="7407">Physics (7407)</option>
						</select>
					}
					{curriculum === "SPM" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="3472">Additional Mathematics</option>
							<option value="4551">Biology</option>
							<option value="4541">Chemistry</option>
							<option value="1449">Mathematics</option>
							<option value="4531">Physics</option>
							<option value="1511">Science</option>
						</select>
					}
				</div>
				{curriculum === "IBDIPLOMA" &&
					<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]'>
						<label htmlFor="subject">Level</label>

						<select
							onChange={(e) => setLevel(e.target.value)}
							id="subject"
							name="Level"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="All">All</option>
							<option value="SL">SL</option>
							<option value="HL">HL</option>
						</select>


					</div>
				}
			</div>

			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
				{/* Topic Down */}
				<div className='card flex justify-content-center'>
					{!curriculum && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={topic}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={topic}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiology}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersLifeSciences}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chapterScience}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersAdvancedBiology}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "IBDIPLOMA" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyAHL}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRGCSE (9-1)" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyKey}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRAS" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyExchange}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRA-level" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyExtended}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAGCSE" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyOrganization}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAAS" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={chaptersBiologyOrganization2}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAA-level" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={biologyChapters}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedTopic} onChange={(e) => setSelectedTopic(e.value)} options={functionsChapters}
						placeholder="Topic" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>
				{/* Paper Down */}
				<div className='card flex justify-content-center'>
					{!curriculum && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersFive}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperanother}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperanother}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersalevel}
						placeholder="Unit" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "IBDIPLOMA" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paperscheckpoint}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRGCSE (9-1)" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersSet}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRAS" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRA-level" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paper3s}
						placeholder="Paper" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAGCSE" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papersA}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAAS" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAA-level" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={paper3s}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}

				</div>
				{/* Year Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>

					<div className='card flex justify-content-center'>
						{!curriculum && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}

						{curriculum === "cieigcse" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ciealevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexceligcse" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2019}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Edexcelalevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "IBDIPLOMA" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "OCRGCSE (9-1)" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "OCRAS" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "OCRA-level" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "AQAGCSE" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "AQAAS" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "AQAA-level" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "SPM" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={year2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}

					</div>
				</div>

				{/* Season Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>

					{!curriculum && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexcelalevel" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "IBDIPLOMA" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRGCSE (9-1)" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRAS" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRA-level" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAGCSE" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAAS" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAA-level" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={season}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)}
						placeholder="Season" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>


				{/* Zone Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>
					{!curriculum && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zones}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zones}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zoneSix}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Edexceligcse(9-1)" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "IBDIPLOMA" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone03}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRGCSE (9-1)" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRAS" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "OCRA-level" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAGCSE" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAAS" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "AQAA-level" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone0}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>


				<div className="">
					<button onClick={fetchcurriculum} className="bg-blue-500 w-[100%]  text-white lg:px-[100px] px-[93px] py-3 lg:rounded-r-md rounded-b-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
						<CiSearch className='text-3xl' />
					</button>
				</div>
			</div>

		</div>
	)
}

export default Searchbox