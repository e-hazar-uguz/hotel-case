import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-auto bg-gray-800">
    <div className="container mx-auto text-center">
      <h4 className="text-white text-3xl">Zamandan ve paradan tasarruf edin!</h4>
      <p className="text-white">En iyi fırsatlar için kaydolmayı unutmayın.</p>
      <form className='mt-2'>
        <input type="email" placeholder="E-posta adresinizi girin" className="rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kaydol</button>
      </form>
    </div>
    <div className='mx-2 '>
    <div className="text-white mt-4 flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <p>info@example.com</p>
        </div>
        <div className="text-white flex items-center justify-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <p>Örnek Adres, Şehir, Ülke</p>
        </div>
      
      <div className="container mx-auto mt-4">
        <div className="text-white text-center text-2xl">
          <p>Neden Otelfiyat.com ?</p>
        </div>
        <p className='mx-40 text-justify text-white'>Çünkü aradığınız tüm oteller en uygun fiyatlarla bizde. Web sitemizde sizlerin beğenisine sunduğumuz, 5000'in üzerinde otelle yaptığımız ön ödemeli anlaşmalar sayesinde,
           Erken rezervasyon fırsatları ile birlikte kolay güvenilir ve en uygun fiyatlara rezervasyon imkanı sağlıyoruz.
            Rezervasyonlarınızı dilerseniz otele girişte ödeme şeklinde tamamlayabilir,
             Ön ödemesiz kredi kartsız otel rezervasyonu sistem üzerinde bir çok tesisimizde yapabilirsiniz.
             Misafirlerimizden tüm konaklamaların sonunda anketlerle konakladığı otelin yorumlarını talep ediyoruz.
              Bu anketler sonucunda müşteri memnuniyetini ön planda tutan oteller ile çalışmaya devam ediyoruz. Bu sayede müşterilerimize;</p>
    </div>
   </div>
  </footer>
  );
}

export default Footer;
