import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // =========================
  // FETCH HOTEL
  // =========================
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/hotels/${id}`);

        const data = await response.json();

        console.log("Hotel Data:", data);

        if (data.success) {
          setHotel(data.hotel);
          setSelectedImage(data.hotel.image);
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-gray-600">Loading hotel...</p>
        </div>
      </div>
    );
  }

  // =========================
  // HOTEL NOT FOUND
  // =========================
  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏨</div>

          <h1 className="text-3xl font-bold text-gray-800">Hotel Not Found</h1>

          <p className="text-gray-500 mt-2">We couldn't find this hotel.</p>
        </div>
      </div>
    );
  }

  // =========================
  // GALLERY
  // =========================

  const hotelImages = [
    hotel.image,
    hotel.image2 || hotel.image,
    hotel.image3 || hotel.image,
    hotel.image4 || hotel.image,
  ];

  // =========================
  // ROOMS
  // =========================

  const rooms = hotel.rooms || [
    {
      name: "Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
      price: hotel.price,
      guests: 2,
      beds: "1 King Bed",
      description:
        "Comfortable and modern room with everything you need for a relaxing stay.",
      amenities: ["Free WiFi", "Air Conditioning", "TV", "Room Service"],
    },

    {
      name: "Premium Room",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      price: Number(hotel.price) + 800,
      guests: 3,
      beds: "1 King Bed + Sofa",
      description:
        "Spacious premium room with stylish interiors and additional comfort.",
      amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Fridge"],
    },

    {
      name: "Family Suite",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      price: Number(hotel.price) + 1500,
      guests: 4,
      beds: "2 King Beds",
      description:
        "Large family suite designed for families and groups looking for extra space.",
      amenities: ["Free WiFi", "Breakfast", "Air Conditioning", "Room Service"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* =====================================
            HOTEL TITLE
        ===================================== */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {hotel.name}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">📍 {hotel.location}</p>

            <div className="flex items-center gap-3 mt-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded-md font-semibold">
                4.8 ⭐
              </span>

              <span className="text-gray-500">Excellent · 245 reviews</span>
            </div>
          </div>

          <button className="border border-gray-300 bg-white px-5 py-2.5 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            ❤️ Save
          </button>
        </div>

        {/* =====================================
            IMAGE GALLERY
        ===================================== */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10">
          {/* MAIN IMAGE */}

          <div className="md:col-span-2 md:row-span-2">
            <img
              src={selectedImage}
              alt={hotel.name}
              className="w-full `h-75` `md:h-125 object-cover rounded-xl"
            />
          </div>

          {/* OTHER IMAGES */}

          {hotelImages.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hotel.name} ${index + 2}`}
              onClick={() => setSelectedImage(image)}
              className="w-full h-[160px] md:h-[240px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* =====================================
            ABOUT HOTEL
        ===================================== */}

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About this hotel
          </h2>

          <p className="text-gray-600 leading-7 mt-4 text-lg">
            {hotel.description ||
              "Enjoy a comfortable and relaxing stay at this beautiful hotel. The hotel offers modern rooms, excellent facilities and convenient access to nearby attractions."}
          </p>
        </div>

        {/* =====================================
            HOTEL AMENITIES
        ===================================== */}

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Hotel Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border rounded-xl p-5">
              <div className="text-3xl">📶</div>
              <h3 className="font-semibold mt-3">Free WiFi</h3>
              <p className="text-sm text-gray-500 mt-1">High-speed internet</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🍽️</div>
              <h3 className="font-semibold mt-3">Restaurant</h3>
              <p className="text-sm text-gray-500 mt-1">Delicious meals</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🏊</div>
              <h3 className="font-semibold mt-3">Swimming Pool</h3>
              <p className="text-sm text-gray-500 mt-1">Outdoor pool</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🚗</div>
              <h3 className="font-semibold mt-3">Free Parking</h3>
              <p className="text-sm text-gray-500 mt-1">Parking available</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">❄️</div>
              <h3 className="font-semibold mt-3">Air Conditioning</h3>
              <p className="text-sm text-gray-500 mt-1">Available in rooms</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🛎️</div>
              <h3 className="font-semibold mt-3">Room Service</h3>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🛡️</div>
              <h3 className="font-semibold mt-3">Security</h3>
              <p className="text-sm text-gray-500 mt-1">24/7 security</p>
            </div>

            <div className="border rounded-xl p-5">
              <div className="text-3xl">🧹</div>
              <h3 className="font-semibold mt-3">Housekeeping</h3>
              <p className="text-sm text-gray-500 mt-1">Daily cleaning</p>
            </div>
          </div>
        </div>

        {/* =====================================
            ROOMS
        ===================================== */}

        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Choose your room
            </h2>

            <p className="text-gray-500 mt-2">
              Select a room that suits your needs.
            </p>
          </div>

          <div className="space-y-6">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* ROOM IMAGE */}

                  <div>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* ROOM DETAILS */}

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{room.name}</h3>

                    <div className="flex flex-wrap gap-4 mt-4 text-gray-500">
                      <span>👥 {room.guests} Guests</span>

                      <span>🛏️ {room.beds}</span>
                    </div>

                    <p className="text-gray-600 mt-4 leading-6">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {room.amenities?.map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                        >
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PRICE */}

                  <div className="border-t md:border-t-0 md:border-l p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-500">Price per night</p>

                      <p className="text-3xl font-bold text-green-600 mt-1">
                        ₹{room.price}
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        + taxes and fees
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            hotel,
                            room,
                          },
                        })
                      }
                      className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition mt-6 cursor-pointer"
                    >
                      Select Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            REVIEWS
        ===================================== */}

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Guest Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {/* RATING */}

            <div className="text-center md:border-r">
              <p className="text-5xl font-bold">4.8</p>

              <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-500 mt-2">245 reviews</p>
            </div>

            {/* REVIEW 1 */}

            <div className="md:col-span-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">Rahul Sharma</h3>

                <span className="text-green-600">5 ⭐</span>
              </div>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Amazing hotel with clean rooms and friendly staff. The location
                was excellent.
              </p>
            </div>

            {/* REVIEW 2 */}

            <div className="md:col-span-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">Priya Patel</h3>

                <span className="text-green-600">4.8 ⭐</span>
              </div>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Very comfortable stay. The room was spacious and the service was
                excellent.
              </p>
            </div>

            {/* REVIEW 3 */}

            <div className="md:col-span-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">Amit Shah</h3>

                <span className="text-green-600">5 ⭐</span>
              </div>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                Great experience. Would definitely stay here again.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            HOTEL POLICIES
        ===================================== */}

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Hotel Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg">🕐 Check-in</h3>

              <p className="text-gray-500 mt-2">From 12:00 PM</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">🕐 Check-out</h3>

              <p className="text-gray-500 mt-2">Until 11:00 AM</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">👨‍👩‍👧 Children</h3>

              <p className="text-gray-500 mt-2">Children are welcome</p>
            </div>
          </div>
        </div>

        {/* =====================================
            BOOKING CTA
        ===================================== */}

        <div className="bg-blue-600 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to book your stay?
            </h2>

            <p className="text-blue-100 mt-2">
              Choose your room and enjoy a comfortable stay.
            </p>
          </div>

          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
};
export default HotelDetails;
