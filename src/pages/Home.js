import React from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
const Home = () => {
	return (
		<div>
			<Topbar />
			<div className=''>
				<Sidebar />
				<div className='flex gap-3'>

				</div>
			</div>

		</div>
	)
}

export default Home