import React, { useState, useEffect } from 'react';
import RoomSearch from './room-search';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import RoomDetail from '../pages/room-detail'
import roomTypesData from '../datas/roomTypes.json'


const Rooms = () => {
// verileir saklamak için tanımlanan stateler 
const [roomTypes, setRoomTypes] = useState([]);
const [filteredRoomTypes, setFilteredRoomTypes] = useState([]);
const [searchError, setSearchError] = useState(false); 


//sayfa ilk yüklendiğinde 1 kere çalışır ve içerideki fonksiyonu doldurur.
useEffect(() => {
  setRoomTypes(roomTypesData);
}, []);

//arama fonksiyonu ve kontrolleri
const handleSearch = (filteredData) => {
  if (filteredData.length === 0) {
    setSearchError(true); 
  } else {
    setSearchError(false); 
  }
  //yine verileri güncelleme
  setFilteredRoomTypes(filteredData);
};

return (
  <div >
<RoomSearch roomTypes={roomTypes} setFilteredRoomTypes={handleSearch} />
<div className="room-list mt-12 mb-12">
  {searchError ? (
    <h1 className='no-room-found-message text-5xl font-bold'>Aranan oda tipi bulunamadı.</h1>
  ) : (
    <div className="grid  grid-cols-4 gap-4 mx-48">
      {filteredRoomTypes.length > 0 ? filteredRoomTypes.map((room, index) => (
        <NavLink to={`/roomdetail/${room.id}`} key={index} className=" max-w-64 p-1 bg-blue-100 border border-gray-200 rounded-lg shadow  hover:bg-blue-200">
          <img src={room.image_url} alt={room.type} className="w-full  mb-4" /> 
          <div className="p-2">
          <h5 className="mb-2 text-2xl font-mono tracking-tight text-gray-900 dark:text-white text-center">{room.type}</h5>
          <div className="flex justify-between mb-1 mx-1">
  <p className="font-extrabold text-gray-700 dark:text-gray-400 text-2xl">{room.price}</p>
  <p className="font-extrabold text-gray-700 dark:text-gray-400 text-2xl">{room.location}</p>
</div>
         </div>
        </NavLink>
      )) : (
        roomTypes.map((room, index) => (
          <NavLink to={`/roomdetail/${room.id}`} key={index}  className=" max-w-64  p-1 bg-blue-100 border border-gray-200 rounded-lg shadow hover:bg-blue-200">
             <img src={room.image_url} alt={room.type} className="w-full  mb-4" /> 
          <div className="p-2">
          <h5 className="mb-2 text-2xl font-mono tracking-tight text-gray-900 dark:text-white text-center">{room.type}</h5>
          <div className="flex justify-between mb-1 mx-1">
  <p className="font-extrabold text-gray-700 dark:text-gray-400 text-2xl">{room.price}</p>
  <p className="font-extrabold text-gray-700 dark:text-gray-400 text-2xl">{room.location}</p>
</div>
          </div>
          </NavLink>
        ))
      )}
    </div>
  )}
</div>
</div>

);


}

export default Rooms;
