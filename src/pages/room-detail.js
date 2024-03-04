import React from 'react';
import { useParams } from 'react-router-dom';
import roomTypesData from '../datas/roomTypes.json'

const RoomDetail = () => {
 
  // useParams hook'u kullanarak URL'den parametre alma
  const { id } = useParams();

  // id'ye göre oda türünü bulma
  const room = roomTypesData.find(room => room.id === parseInt(id));

  
  if (!room) {
    return <h2>Odalar bulunamadı.</h2>;
  }

  return (

  <div className='mb-12' style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center'}}>
      <h2 className='text-4xl mb-4'>{room.type}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'left', flex: '1' }}>
          <p className='text-lg font-bold'> Oda Özellikleri</p>
          <ul>
            {room.features.map((feature, index) => (
              <li key={index} className='font-semibold'>- {feature}</li>
            ))}
          </ul>
          <p><strong>Konumu :</strong> {room.location}</p>
          <p><strong>Oda Kahvaltı :</strong> {room.breakfast_included ? 'Evet' : 'Hayır'}</p>
          <p><strong>Fiyat:</strong> {room.price}</p>
        </div>
        <div style={{ textAlign: 'center', flex: '1' }}>
          <img src={room.image_url} alt={room.type} style={{ maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  </div>

  );
};

export default RoomDetail;
