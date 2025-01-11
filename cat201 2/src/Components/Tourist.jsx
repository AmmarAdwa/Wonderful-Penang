import React from "react";
import { Link } from "react-router-dom";
import "./Tourist.css";

function Tourist() {
  const touristData = [
    {
      "id": 1,
      "name": "Penang Hill",
      "image": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474427-Penang-Hill.jpg",
    },
    {
      "id": 2,
      "name": "Kek Lok Si Temple",
      "image": "https://www.malaysiamall.my/wp-content/uploads/2017/09/Kek-Lok-Si-Temple-in-Penang-1.jpg",
    },
    {
      "id": 3,
      "name": "Feringghi Beach",
      "image": "https://mediaim.expedia.com/destination/2/e7a69c2bfa50ab91c9a52b2779459a94.jpg",
      
    }
  ];

  return (
    <div className="tourist-container">
        <div className="tourist-video-background">
        
        <div className="tourist-title-container">
            <h1>Island Escape: A Guide to the Island’s Most Iconic Spots</h1>
        </div>
    </div>


  

{/* Food List Section */}
<div className="tourist-list">
  {touristData.map((tourist, index) => (
    <Link 
      to={`/tourist/${tourist.id}`} 
      key={index} 
      className="tourist-card-link"  // This wraps the card for the clickable area
    >
      <div 
        className="tourist-card" 
        style={{
          backgroundImage: `url(${tourist.image})`, 
          backgroundSize: 'cover',  
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
        }}
      >
        <div className="tourist-info">
          <h2>{tourist.name}</h2>
        </div>
      </div>
    </Link>
  ))}
</div>



    <div className="tourist-video-section">
    <h2>Watch Our Featured Videos</h2>
    <div className="tourist-videos">
        <video src="src/assets/images/penangtour.mp4" type="video/mp4" controls autoplay muted loop className="tourist-video">
            Your browser does not support the video tag.
        </video>
    </div>
</div>



    
</div>

  );
}

export default Tourist;