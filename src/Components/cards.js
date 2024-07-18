import React from "react";

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <div className="card-details">
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
