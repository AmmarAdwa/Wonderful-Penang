import React, { useEffect, useState } from 'react';
import HotelCard from './HotelCard.jsx';
import './Hotel.css'




const HotelsList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {

    const Hotels = [
      
  
      { id: 1, name: "Eastern & Oriental Hotel","rating": 5,"price": 723,"image": "src/assets/images/imagehotel1.jpg",location:'Georgetown , Penang'
        ,website: 'https://www.eohotels.com'
      },
      { id: 2, name: 'Hard Rock Hotel', rating: 5, price: 349, image: 'src/assets/images/hotel3.jpg', location:'Batu Ferringhi , Penang'
        ,website: 'https://hotel.hardrock.com/penang/'
      },
      { id: 3, name: 'The Prestige Hotel', rating: 5, price: 507, image: 'src/assets/images/hotel2.jpg', location: 'Georgetown , Penang' 
        ,website: 'https://theprestige.my/'
      },
      { id: 4, name: 'Flamingo Hotel By The Beach', rating: 4, price: 220, image: 'src/assets/images/hotel4.jpg', location: 'Tanjung Bungah , Penang' 
        ,website: 'https://penang.flamingo.com.my/'
      },
      { id: 5, name: 'The Gurney Hotel', rating: 5, price: 489, image: 'src/assets/images/hotel5.jpg', location:'Georgetown , Penang' 
        ,website: 'https://gurney.ghotel.com.my/'
      },
      { id: 6, name: 'Ascott Hotel', rating: 5, price: 578, image: 'src/assets/images/hotel6.jpg', location: 'Georgetown , Penang' 
        ,website: 'https://ascottgurney.my-penang.com/'
      },
      { id: 7, name: 'Bayview Beach Resort', rating: 4, price: 297, image: 'src/assets/images/hotel7.jpg', location:'Batu Ferringhi , Penang' 
        ,website: 'https://bbr.bayviewhotels.com/'
      },
      { id: 8, name: 'Shangri-La Rasa Sayang Resort & Spa', rating: 5, price: 1242, image: 'src/assets/images/hotel8.jpg', location:'Batu Ferringhi , Penang' 
        ,website: 'https://www.shangri-la.com/penang/rasasayangresort/'
      },
      { id: 9, name: 'Royale Chulan', rating: 4, price: 250, image: 'src/assets/images/hotel9.jpg', location:' Georgetown , Penang' 
        ,website: 'https://www.royalechulan.com/'
      },
      { id: 10, name: 'Marriott Hotel', rating: 5, price: 770, image: 'src/assets/images/hotel10.jpg', location:' Georgetown , Penang' 
        ,website: 'https://www.marriott.com/'
      },
      { id: 11, name: 'Lexis Suites Penang', rating: 5, price: 458, image: 'src/assets/images/hotel11.jpg', location:' Bayan Lepas , Penang' 
        ,website: 'https://www.lexissuitespenang.com/'
      },
      { id: 12, name: 'Sunway Hotel Penang', rating: 4, price: 272, image: 'src/assets/images/hotel12.jpg', location:' Georgetown , Penang' 
        ,website: 'https://www.sunwayhotels.com/'
      },
    ];
    setHotels(Hotels);
  }, []);

  return (
 <>
    <div className='Hotel-header'>
      <h1>Hotels Recommendation</h1>
        <p>Discover Luxirious Stay and Breathtaking Views</p>
    </div>
    <div className="hotels-list">
      {hotels.map((hotel) => (<HotelCard key={hotel.id} hotel={hotel}/>
      ))}
    </div>
 </>
    
  );
};

export default HotelsList;