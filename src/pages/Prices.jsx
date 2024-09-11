import React from 'react';
// TABLES
import BirdsTable from "../prices/birdsTable.jsx";
import SmallGameTable from "../prices/smallGameTable.jsx";
import LargeGameTable from "../prices/largeGameTable.jsx";
import FishTable from "../prices/fishTable.jsx";
import RugsTable from "../prices/rugsTable.jsx";
// CSS
import '../css/Prices.css'

const Prices = () => {
  return (
    <div className='priceTables'>
      <div>
        <h1>Prices</h1>
      </div>
      <div className="priceBox1">
        <BirdsTable />
        <SmallGameTable />
      </div>
      <div className="priceBox2">
        <LargeGameTable />
        <div className="priceBox3">
          <FishTable />
          <RugsTable />
        </div>
      </div>
        {/* ADD DISCLAIMERS / MORE INFO */}
        <div className="disclaimers">
          <h5>PLEASE NOTE:</h5>
          <ul>
            <li>A 50%, non-refundable, deposit is due before we begin to work.</li>
            <li>Once the owner is notified of their mount completion, they will have 30 days to make arrangements for payment completion. Payment plans may be available upon request.</li>
            <li>Once payment has been made in full, it may then be picked up at Wildside Custom Taxidermy. If arrangements for payment have not been made after 30 days, there will be a storage fee of $50/month applied to your remaining balance. After 6 months without payment, the mount then becomes property of Wildside Custom Taxidermy.</li>
            <li>Other Mounts & Services Available Upon Request</li>
            <li>Prices Subject to Change</li>
          </ul>  
        </div>
    </div>
  )
}

export default Prices; 