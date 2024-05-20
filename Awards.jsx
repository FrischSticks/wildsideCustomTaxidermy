import React from 'react'
import '../css/Awards.css'
import AwardsCard from '../components/AwardsCard';
import fishOhio from '../images/awardWinningFishOhio.jpg';
import fishGeorgia from '../images/awardWinningFishGeorgia.jpg';

const Awards = () => {
  return (
    <div className='awardsContainer'>
      <h1>Awards</h1>
        <AwardsCard image={fishOhio} showName='Ohio State Show 2016' award="Best of Show - 1st" award2="People's Choice - 1st" category='fish' />
        <AwardsCard image={fishGeorgia} showName='Georgia State Show 2016' award="Best of Show - 1st" award2="People's Choice - 1st"  award3="Taxidermist's Choice - 1st" award4="Best Habitat - 1st" category='fish' />
    </div>
    
  )
}

export default Awards;