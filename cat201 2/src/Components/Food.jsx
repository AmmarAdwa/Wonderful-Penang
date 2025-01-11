import React from "react";
import { Link } from "react-router-dom";
import "./Food.css";

function Food() {
  const foodData = [
    {
      "id": 1,
      "name": "Laksa Penang",
      "description": "Laksa Penang is a tangy, spicy noodle soup with a fish-based broth, topped with fresh herbs, vegetables, and sweet prawn paste",
      "image": "https://images.deliveryhero.io/image/foodpanda/recipes/asam-laksa-recipe-1.jpg",
    },
    {
      "id": 2,
      "name": "Teh Tarik",
      "description": "Teh Tarik is a popular Malaysian milk tea known for its creamy texture and frothy top. Made with black tea and condensed milk, it gets its name from the pulling technique used to mix and cool the tea by pouring it back and forth between two containers. This process creates its signature froth and enhances the flavor, making it a favorite at mamak stalls and coffee shops",
      "image": "https://thevocket.com/app/uploads/2019/05/tehtarikvckt.jpg",
    },
    {
      "id": 3,
      "name": "Pasembur",
      "description": "Pasembur is a Malaysian salad dish made with a mix of shredded vegetables, boiled potatoes, eggs, and deep-fried fritters, topped with a sweet and spicy peanut sauce. Often served as a light snack or appetizer, it's a flavorful combination of textures and savory flavors, commonly found at street food stalls in Penang and other parts of Malaysia.",
      "image": "https://media-cdn.tripadvisor.com/media/photo-s/07/1e/7a/e6/penang-famous-pasembur.jpg",
      
    }
  ];

  return (
    <div className="food-container">
        <div className="food-video-background">
        
        <div className="food-title-container">
            <h1>Taste of Paradise: Penang’s Must-Try Food and Drinks</h1>
        </div>
    </div>

{/* Food List Section */}
<div className="food-list">
        {foodData.map((food, index) => (
            <div className="food-card" key={index}>
                <img src={food.image} alt={food.name} className="food-image" />
                <h2>{food.name}</h2>
                <p>{food.description}</p>
                <p><strong>Get them now at</strong></p>
                <Link to={`/food/${food.id}`} className="food-link">
              See Place
            </Link>
            </div>
        ))}
    </div>

    <div className="food-video-section">
    <h2>Watch Our Featured Videos</h2>
    <div className="food-videos">
        <video src="/src/assets/images/VisitPenang.mp4" type="video/mp4" controls autoplay muted loop className="food-video">
            Your browser does not support the video tag.
        </video>
    </div>
</div>



    
</div>

  );
}

export default Food;
