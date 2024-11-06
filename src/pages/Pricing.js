import React from 'react'
import Topbar from '../components/Layout/Topbar'
import { Sidebar } from '../components/Layout/Sidebar'
import PricingTop from '../components/Pricing/PricingTop'
import PricingTable from '../components/Pricing/PricingTable'

const Pricing = () => {
	return (
		<div>
			<Topbar />
			<div className='flex lg:gap-6'>
				<Sidebar />
				<div className='flex flex-col lg:gap-12 pl-2'>
					<PricingTop />
					<PricingTable />
				</div>
			</div>
		</div>
	)
}

export default Pricing