//import React, { useState } from 'react';
import Maloto from '../roomimages/Maloto.jpg';
import Chimwala from '../roomimages/Chimwala.jpg';
import Mandere from '../roomimages/Mandere.jpg';

const Booking= () => {

  const rooms = [
    {
      id: 1,
      Name: 'Bluetete ',
      categories:'girls',
      image: Maloto,
      price: 'From K45,000',
      distance: '700m'
    },
    {
      id: 2,
      Name: 'Maloto',
      categories:'boys',
      image: Chimwala,
      price: 'From K45,000',
      distance: '700m'
    },
    {
      id: 3,
      Name:'Jamu ',
      categories:'boys',
      image: Mandere,
      price: 'From K60,000',
      distance:'600m'
    }

  ];

  return (
  <div>
    <br/>
    <br/>
    
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
      {rooms.map((room) => (
        <div key={room.id} style={{ width: "250px", border: "1px solid black", borderRadius: "10px", padding: "10px" }}>
          <img src={room.image} alt="House" style={{width: "250px",height: "200px",boxshadow:"0px 4px 8px rgba(0,0,0)" }} />
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Hostel Name: {room.Name}</p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Rent: {room.price}</p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Distance : {room.distance}</p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>for {room.categories}</p>
          <button style={{ width: "100%", padding: "5px", backgroundColor: "#6cc24a", color: "white",cursor:"pointer",borderRadius: "20px"}}>
            Book Now
          </button>
        </div>))}
    </div>
    </div>
  );
};

export default Booking;