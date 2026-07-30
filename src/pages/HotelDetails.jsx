import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/hotels/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data.hotel);
          setHotel(data.hotel);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!hotel) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-[500px] object-cover rounded-xl shadow-lg"
      />

      <h1 className="text-5xl font-bold mt-8">{hotel.name}</h1>

      <p className="text-xl text-gray-500 mt-2">
        📍 {hotel.location}
      </p>

      <p className="text-3xl text-green-600 font-bold mt-4">
        ₹{hotel.price} / Night
      </p>

      <div className="flex gap-2 mt-4 text-yellow-500 text-xl">
        ⭐⭐⭐⭐⭐
      </div>

      <h2 className="text-3xl font-semibold mt-10">
        About this Hotel
      </h2>

      <p className="mt-4 text-gray-700 leading-8 text-lg">
        {hotel.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="border rounded-lg p-4 text-center">📶 Free WiFi</div>
        <div className="border rounded-lg p-4 text-center">🍽 Free Breakfast</div>
        <div className="border rounded-lg p-4 text-center">🏊 Swimming Pool</div>
        <div className="border rounded-lg p-4 text-center">🚗 Parking</div>
      </div>

      <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
        Book Now
      </button>
    </div>
  );
};

export default HotelDetails;