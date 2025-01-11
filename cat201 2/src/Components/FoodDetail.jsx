import React from "react";
import { useParams } from "react-router-dom";

function FoodDetail() {
    const { id } = useParams(); // Get the food id from the URL
    const foodData = [
        {
            "id": 1,
            "name": "Laksa Pokok Janggus Balik Pulau",
            "description": "Laksa Janggus in Balik Pulau, Penang, is a famous local eatery known for its delicious, authentic laksa. It serves two main types of laksa: Assam Laksa and Siam Laksa. Laksa Janggus is named after the Janggus tree (cashew nut tree) under which the stall originally started. This humble spot is a must-visit for laksa lovers, offering a rustic dining experience in a cozy, outdoor setting.",
            "location": "338 MK, I, Kampung Perlis, 11000 Balik Pulau, Pulau Pinang",
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjTihcsx6YyUbJXOkKcYaGiljD_iiFhrHheYzR2HgLKR4TumPUrqCc1Sq0z6vMH1DCC9bojLKqE8kJ-e_mWX0k_E5Wd6Uu6XOapMr4T9XoDXQ-7sVe9vNZJeCv4n_l3aB3qZY6aJon-FQ/s640/17.jpg",
            "website": "https://www.tripadvisor.com.my/Restaurant_Review-g3522354-d12291176-Reviews-Laksa_Janggus-Balik_Pulau_Penang_Island_Penang.html"
        },
        {
            "id": 2,
            "name": "Naina Teh Tarik",
            "description": "Naina Teh Tarik in Sungai Dua, Penang, is a popular local spot known for its delicious teh tarik and other traditional Malaysian beverages. The stall is often praised for its smooth and frothy teh tarik, made using high-quality tea leaves and condensed milk, providing a perfect balance of sweetness and strength. Apart from teh tarik, they also serve a variety of local snacks and dishes, making it a favorite among locals and visitors seeking an authentic taste of Malaysian street food culture.",
            "location": "Lorong helang 3 Sungai Dua , Hamna, 11700 Gelugor, Pulau Pinang",
            "image": "https://lh3.googleusercontent.com/p/AF1QipON0-0Wva9JtcH7R7bi286NXXE9PafhoFKoam2l=s1360-w1360-h1020",
            "website": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.waze.com/live-map/directions/my/pulau-pinang/gelogor/naina-cafe%3Fto%3Dplace.ChIJ2bcRRznBSjARuqjCI4KgwMI&ved=2ahUKEwikr6vogueKAxXUSmwGHVI9JoQQFnoECA4QAQ&usg=AOvVaw2t1APysFi54ApgBntC-em5"
        },
        {
            "id": 3,
            "name":"Padang Brown Food Court",
            "description": "APadang Brown is a popular food court in George Town, Penang, known for its wide selection of local Malaysian street food. It offers a variety of dishes, including famous Penang specialties like char kway teow, laksa, and satay. The vibrant atmosphere and diverse food choices make it a favorite spot for both locals and tourists. traditional dessert features a refreshing combination of shaved ice, coconut milk, palm sugar syrup, and green pandan jelly noodles.",
            "location": "Jln Perak, 10400 George Town, Pulau Pinang",
            "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/5e/32/db/padang-brown-food-court.jpg?w=900&h=-1&s=1",
            "website": "https://www.tripadvisor.com/Restaurant_Review-g298303-d1159811-Reviews-Padang_Brown_Food_Court-George_Town_Penang_Island_Penang.html"
        }
    ];

    // Find the food item based on the ID
    const food = foodData.find((item) => item.id.toString() === id);

    if (!food) {
        return <div>Food not found!</div>;
    }

    return (
        <>
        <div className="food-detail">
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} className="food-image" />
            <p>{food.description}</p>
            <p><strong>Location:</strong> {food.location}</p>
            <a href={food.website} target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </div>
        </>
    );
}

export default FoodDetail;