import React from 'react'
import '../css/Awards.css'
import fishOhio from '../images/awardWinningFishOhio.jpg';
import fishGeorgia from '../images/awardWinningFishGeorgia.jpg';

const Awards = () => {
  return (
    <div>
      <h1>Awards</h1>
      <img src={fishOhio} className='awardImages' alt='Award winning fish from Ohio State Taxidermy Show'/>
      <img src={fishGeorgia} className='awardImages' alt='Award winning fish from Georgia State Taxidermy Show' />
    </div>
    
  )
}

export default Awards;