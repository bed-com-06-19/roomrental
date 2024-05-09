//import React, { useState } from 'react';
import Maloto from '../roomimages/Maloto.jpg';
import Chimwala from '../roomimages/Chimwala.jpg';
import Mandere from '../roomimages/Mandere.jpg';

const Booking= () => {

  const rooms = [
    {
      id: 1,
      Name: 'Bluecomplex girls hostels',
      image: Maloto,
      price: 'From K45,000',
      distance: '700m'
    },
    {
      id: 2,
      Name: 'Maloto boys hostels',
      image: Chimwala,
      price: 'From K45,000',
      distance: '700m'
    },
    {
      id: 3,
      Name: 'Chimwala girls hostels',
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
          <img src={room.image} alt="House" style={{width: "250px",height: "200px" }} />
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Hostel Name: {room.Name}</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Price: {room.price}</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Distance from campus: {room.distance}</p>
          <button style={{ width: "100%", padding: "5px", backgroundColor: "blue", color: "white",cursor:"pointer" }}>
            Book Now
          </button>
        </div>))}
    </div>
    </div>
  );
};

export default Booking;
