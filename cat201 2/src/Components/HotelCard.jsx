const HotelCard = ({ hotel }) => (
  <a 
    href={hotel.website} 
    target="_blank" 
    rel="noopener noreferrer"
    
  >
    <div className="hotel-card">
      <img src={hotel.image} style={{ width: '100%', borderRadius: '8px' }} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>Rating: {hotel.rating} ⭐</p>
      <p>Price: RM{hotel.price} / night</p>
      <p>Location: {hotel.location}</p>
    </div>
  </a>
);

  
  export default HotelCard;