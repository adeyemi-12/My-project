import React from 'react';
import { useParams, Link } from 'react-router-dom';
import apartmentList from '../Data/Index'; // Path to your list

const Detail = () => {
  const { id } = useParams();
  
  // Use Number(id) to match the numeric IDs in your apartmentList
  const apartment = apartmentList.find(item => item.id === Number(id));

  // If the data is still missing, this will show you why in the console
  console.log("Searching for ID:", id, "Found:", apartment);

  if (!apartment) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Apartment not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
       <img src={apartment.image} alt={apartment.title} />
       <h1>{apartment.title}</h1>
      <p>{apartment.location}</p>
      <p>{apartment.price}</p>
       
    </div>
  );
};

export default Detail;