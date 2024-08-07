import React from 'react';

const Card = ({ stay }) => {
  return (
    <div className="card">
      
      <img src={stay.photo} alt={stay.title} />
     
     
      <div className="card-info">
        {stay.superHost && <span className="superhost">SUPER HOST</span>}
        <span className="type">{stay.type}</span>
        {stay.beds && <span className="beds">{stay.beds} beds</span>}
        <span className="rating">
        <img src="estrellita.png" alt="buscar" className="fas fa-search" />
          {stay.rating}
          </span>
        
      </div>
      <h2>{stay.title}</h2>
    </div>
  );
};

export default Card;
