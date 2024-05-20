import React from 'react';
import '../css/awardsCard.css';

const Card = ({ image, showName, award, award2, award3, award4, category }) => {
  return (
    <div className="card">
      <img src={image} className='awardsImage' alt={`Award winning ${category} from ${showName}`} />
      <div className="cardContent">
        <h2 className="showName">{showName}</h2>
        <ul>
            <li className="award">{award}</li>
            {award2 && <li className="award">{award2}</li>} {/* Conditionally render the second award */}
            {award3 && <li className="award">{award3}</li>} {/* Conditionally render the third award */}
            {award4 && <li className="award">{award4}</li>} {/* Conditionally render the fourth award */}
        </ul>
      </div>
    </div>
  );
};

export default Card;