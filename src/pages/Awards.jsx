import React from 'react'
import '../css/Awards.css'
import AwardsCard from '../components/AwardsCard';
import fishIndiana from '../images/awardWinningBluegillTaxidermyIndiana.jpg'
import bassIndiana from '../images/awardWinningFishIndiana.jpg';
import fishOhio from '../images/awardWinningFishOhio.jpg';
import fishGeorgia from '../images/awardWinningBluegillGeorgia.jpg';

const Awards = () => {
  return (
    <div className='awardsContainer'>
      <h1>Awards</h1>
        <AwardsCard image={fishIndiana} showName='Indiana State Show 2016' award="People's Choice - Best Fish" award2='Starfish Award - Best Replica Fish' award3="McKenzie Taxidermy Supply Taxidermist's Choice - Best Fish" award4='Polytranspar Award' />
        <AwardsCard image={fishOhio} showName='Ohio State Show 2016' award="People's Choice - Best Fish" award2="McKenzie Taxidermy Supply Taxidermist's Choice - Best Fish" category='fish' />
        <AwardsCard image={bassIndiana} showName='Indiana State Show 2017' award="McKenzie Taxidermy Supply Taxidermist's Choice - Best Fish" award2='Starfish Award - Best Replica Fish' category='fish' />
        <AwardsCard image={fishGeorgia} showName='Georgia State Show 2020' award="Best of Category - Reproduction Fish" category='fish' />
    </div>
    
  )
}

export default Awards;