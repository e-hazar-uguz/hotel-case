import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'

const RoomSearch = ({ roomTypes, setFilteredRoomTypes }) => {
  //arama işlemlerini saklamak için bir state tanımlama alanı
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');

  //koşullara göre bir search fonksiyonu
  const handleSearch = () => {
    const filteredRooms = roomTypes.filter(room =>
      room.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
      room.location.toLowerCase().includes(location.toLowerCase()) &&
      (minPrice === '' || parseFloat(room.price.replace('$', '')) >= parseFloat(minPrice)) &&
      (maxPrice === '' || parseFloat(room.price.replace('$', '')) <= parseFloat(maxPrice))
    );
    // filtrelenmiş odaları güncelleme
    setFilteredRoomTypes(filteredRooms);
  };

  //silme fonksiyonu
  const handleClearSearch = () => {
    setSearchTerm('');
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    setFilteredRoomTypes(roomTypes);
  };

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const clearIcon = <FontAwesomeIcon icon={faTrash} />;

  return (
    <div className="room-search bg-blue-950  border-4 border-orange-400 rounded-lg mx-4 mt-4">
      <input
        type="text"
        placeholder="Oda tipi arayın..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2"
      />

      <input
        type="text"
        placeholder="Lokasyon arayın..."
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 ml-2"
      />

      <input
        type="text"
        placeholder="Minimum fiyat"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 ml-2"
      />

      <input
        type="text"
        placeholder="Maksimum fiyat"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 ml-2"
      />

<button
  onClick={handleSearch}
  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 ml-2 rounded-lg"
>
  {searchIcon} Ara
</button>
<button
  onClick={handleClearSearch}
  className="bg-orange-400 hover:bg-orange-300 text-gray-800 font-semibold py-2 px-4 ml-2 rounded-lg"
>
  {clearIcon} Temizle
</button>
    </div>
  );
};

export default RoomSearch;
