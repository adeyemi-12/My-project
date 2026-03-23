import React from 'react';
import './Properties.css';
import apartmentList from './Data/Index';
import { Link } from 'react-router-dom';

function Properties() {
  return (
    <div className="properties-container">
      <p className='hd'>Avaliable apartments</p>
      <div className="properties-header">
      </div>

      <div className="properties-grid">
        {apartmentList.map((apartment) => (
          <div key={apartment.id} className="apartment-card">
            <div className="card-image">
              <img src={apartment.image} alt={apartment.title} />
              <span className="rent-tag">For Rent</span>
            </div>

            <div className="card-info">
              <p className="loc-text">📍 {apartment.location}</p>
              <h3>{apartment.title}</h3>

              <div className="amenities-row">
                <span>{apartment.beds} Bed</span>
                <span>{apartment.baths} Bath</span>
                <span>{apartment.sqft} sqft</span>
              </div>

              <div className="card-price-row">
                <p className="price-tag">${apartment.price}<span>/mo</span></p>
                <div className="low">
                  <Link replace to={`/apartments/${apartment.id}`}> 
  <button>View Details</button>
</Link>
                  <Link className='book-btn'> Book Now</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Properties;