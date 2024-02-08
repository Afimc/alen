import React from "react";
import { Offers } from '../Offers/Offers';
import './Cards.css';


const Cards = () => {
  return (
    <div className='mainCards'>
      <div className='search tc'>
        
      </div>
      <div className="Offers tc">
        {
          Offers.map((offer) => {
            return (
              <div key={offer.id} className="CardStyle dib br3 pa3 grow ">
                <img alt='sky'
                  src={offer.pic}
                  width={250} height={250}
                />
                <div className='tc'>
                  <h2>{offer.name}</h2>
                  <p>{offer.price}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}



export default Cards;