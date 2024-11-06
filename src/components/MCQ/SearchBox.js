import { Select, Option } from '@material-tailwind/react';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
const Searchbox = ({ selectedPapers, setSelectedPapers, selectedYears, setSelectedYears, selectedSeasons, setSelectedSeasons,
	selectedZone, setSelectedZone, papers, years, seasons, zones, curriculum, setCurriculum, subject, setSubject, fetchcurriculum, years2017, zone2 }) => {

	return (
		<div className="bg-blue-200 ml-[70px] mr-[50px] p-4 rounded-lg">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{/* Curriculum Select */}
				<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]' >
					<label htmlFor="curriculum">Curriculum</label>
					<select
						id="curriculum"
						name="curriculum"
						onChange={(e) => setCurriculum(e.target.value)}
						className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
					>
						<optgroup label="CIE" className="text-gray-900 font-semibold">
							<option value="">Curriculum</option>
							<option value="cieigcse">IGCSE</option>
							<option value="ciealevel">A-LEVEL</option>
						</optgroup>
						<optgroup label="IB" className="text-gray-900 font-semibold">
							<option value="Diploma">Diploma</option>
						</optgroup>
						<optgroup label="MALAYSIA" className="text-gray-900 font-semibold">
							<option value="SPM">SPM</option>
						</optgroup>

						{/* More options here... */}
					</select>
				</div>

				{/* Subject Select */}
				<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]'>
					<label htmlFor="subject">Subject</label>
					{curriculum === "cieigcse" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="0452">Accounting (0452)</option>
							<option value="0610">Biology (0610)</option>
							<option value="0620">Chemistry (0620)</option>
							<option value="0455">Economics (0455)</option>
							<option value="0652">Physical Science (0652)</option>
							<option value="0625">Physics (0625)</option>
							<option value="0653">Science Combined (0653)</option>
							<option value="0654">Science Coordinate (0654)</option>
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
							<option value="9700">Biology (9700)</option>
							<option value="9701">Chemistry (9701)</option>
							<option value="9708">Economics (9708)</option>
							<option value="9702">Physics (9702)</option>
						</select>
					}
					{curriculum === "Diploma" &&
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="0606">Select Your Subject</option>
							<option value="Biology">Biology</option>
							<option value="Chemistry">Chemistry</option>
							<option value="Design Technology">Design Technology</option>
							<option value="Physics">Physics</option>
							<option value="Sports, Exercise & Health Science">Sports, Exercise & Health Science</option>
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
							<option value="4551">Biology (4551)</option>
							<option value="4541">Chemistry (4541)</option>
							<option value="4531">Physics (4531)</option>
							<option value="1511">Science (1511)</option>
						</select>
					}

				</div>
				{curriculum === "Diploma" &&
					<div className='flex items-center gap-3 hover:bg-gray-300 py-2 px-4 rounded-lg focus:border-[1px] focus:border-[#ccc]'>
						<label htmlFor="subject">level</label>
						<select
							onChange={(e) => setSubject(e.target.value)}
							id="subject"
							name="subject"
							className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent"
						>
							<option value="All">All</option>
							<option value="HL">HL</option>
							<option value="SL">SL</option>
						</select>
					</div>}
			</div>

			<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
				<div className='card flex justify-content-center'>
					{!curriculum && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "cieigcse" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "ciealevel" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Diploma" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedPapers} onChange={(e) => setSelectedPapers(e.value)} options={papers}
						placeholder="Papers" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>
				{/* Year Dropdown */}
				<div className='border-r-[1px] border-[#ccc]  bg-white'>
					<div className='card flex justify-content-center'>
						{!curriculum && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "cieigcse" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "ciealevel" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "Diploma" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years2017}
							placeholder="Years" maxSelectedLabels={15} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
						{curriculum === "SPM" && <MultiSelect value={selectedYears} onChange={(e) => setSelectedYears(e.value)} options={years}
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
					{curriculum === "Diploma" && <MultiSelect value={selectedSeasons} onChange={(e) => setSelectedSeasons(e.value)} options={seasons}
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
					{curriculum === "ciealevel" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zones}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "Diploma" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)} options={zone2}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
					{curriculum === "SPM" && <MultiSelect value={selectedZone} onChange={(e) => setSelectedZone(e.value)}
						placeholder="Zone" maxSelectedLabels={2} className="w-full md:w-20rem bg-[white] py-2 pl-2 focus:outline-none" />}
				</div>
				<div className="">
					<button onClick={fetchcurriculum} className="bg-blue-500 lg:w-[100%]  text-white lg:px-[120px] px-[93px] py-3 lg:rounded-r-md rounded-b-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
						<CiSearch className='text-3xl' />
					</button>
				</div>
			</div>

		</div>
	)
}

export default Searchbox