import React from 'react'
import fishOhio from '../images/awardWinningFishOhio.jpg';
import fishGeorgia from '../images/awardWinningFishGeorgia.jpg';

const Awards = () => {
  return (
    <div>
      <h1>Awards</h1>
      <img src={fishOhio} alt='Award winning fish from Ohio State Taxidermy Show' />
      <img src={fishGeorgia} alt='Award winning fish from Georgia State Taxidermy Show' />
    </div>
    
  )
}

export default Awards;