import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>Welcome to the Penang Tourism Website</h1>
          <p1>Explore the best hotels, food, and tourism spots in Penang.</p1>
          <p>Discover Penang, a breathtaking fusion of history, culture, and natural beauty! Located on the northwest coast of Malaysia, Penang is a must-visit destination offering something for everyone—history enthusiasts, food lovers, nature adventurers, and urban explorers alike.
            <h2>What Make Penang Special?</h2>
              <li>Accesibility:  Easily reachable by air, road, or sea, Penang is well-connected and offers modern infrastructure for travelers.</li>
              <li>Eco-Tourism: From butterfly farms to lush tropical gardens, Penang is a haven for nature lovers.</li>
              <li>Shopping & Nightlife: Explore local markets, boutique shops, and a vibrant nightlife scene, especially along Gurney Drive.</li>
          </p>
        </div>
      </div>
      <div className="sections">
        {/* Hotels Section */}
        <div className="section">
          <h2>Hotels</h2>
          <p>
            Find luxurious and comfortable hotels for a relaxing stay, complete
            with top-tier amenities and breathtaking views.
          </p>
          <img
            src="src/assets/images/HotelHome.jpg"
            alt="Hotels"
          />
        </div>

        {/* Tourism Spots Section */}
        <div className="section">
          <h2>Tourism Spots</h2>
          <p>
            Explore popular destinations, scenic landscapes, and cultural
            landmarks that will leave you amazed.
          </p>
          <img
            src="src/assets/images/touristHome.jpg"
            alt="Tourism Spots"
          />
        </div>

        {/* Food Section */}
        <div className="section">
          <h2>Food&Beverage</h2>
          <p>
            Savor delicious local and international cuisines at the best
            restaurants and street food spots.
          </p>
          <img
            src="src/assets/images/food&beverage.jpg"
            alt="Food&Beverage"
          />
        </div>
      </div>
      

    </>
  );
};

export default Home;