import React from "react";
import { useParams } from "react-router-dom";

function TouristDetail() {
    const { id } = useParams(); 
    const touristData = [
        {
            "id": 1,
            "name": "Penang Hill",
            "description": "Penang Hill is one of the island's most famous natural attractions, offering visitors a refreshing escape from the hustle and bustle of George Town. Standing at 833 meters above sea level, it provides panoramic views of Penang Island, the mainland, and the Andaman Sea, making it a perfect spot for both nature lovers and those seeking stunning vistas.",
            "image": "https://www.buletinmutiara.com/wp-content/uploads/2023/12/IMG_7563.jpeg",
            "website": "https://www.tripadvisor.com.my/Attraction_Review-g298303-d455283-Reviews-Penang_Hill-George_Town_Penang_Island_Penang.html"
        },
        {
            "id": 2,
            "name": "Kek Lok Si Temple",
            "description": "Kek Lok Si Temple is one of the largest and most important Buddhist temples in Southeast Asia, located in Air Itam, Penang. Known for its impressive architecture, the temple complex is a blend of traditional Chinese, Thai, and Burmese styles. It features the stunning Pagoda of Ten Thousand Buddhas, a towering structure with a mix of traditional Chinese and Thai architectural influences, and the iconic Kuan Yin Statue, a massive bronze statue of the Goddess of Mercy. The temple is a peaceful sanctuary with beautiful gardens, ponds, and intricate carvings, making it a popular site for both spiritual visits and tourists seeking to explore Penang’s cultural heritage.",
            "image": "https://live.staticflickr.com/65535/51878941270_73246f0794_b.jpg",
            "website": "https://www.tripadvisor.com/Attraction_Review-g4327677-d455065-Reviews-Kek_Lok_Si_Temple-Air_Itam_Penang_Island_Penang.html"
        },
        {
            "id": 3,
            "name":"Feringghi Beach",
            "description": "Batu Ferringhi Beach is one of Penang’s most popular beaches, known for its beautiful stretch of golden sand and vibrant atmosphere. Located along the island's northern coastline, it offers a mix of relaxation and adventure, making it a favorite among both locals and tourists. The beach is ideal for water sports, including jet skiing, parasailing, and windsurfing, while its calm waters are perfect for swimming. In addition to its natural beauty, Batu Ferringhi is home to a range of resorts, restaurants, and shops, providing plenty of amenities for visitors. The Batu Ferringhi Night Market is a major highlight, offering an eclectic array of local crafts, souvenirs, and street food. Whether you’re looking to unwind under the sun, enjoy the water activities, or explore the vibrant nightlife, Batu Ferringhi Beach is a must-visit destination for those visiting Penang.",
            "image": "https://img.cdn-pictorem.com/uploads/collection/J/JP2FNU4IMQ/900_Kevin-Miller-Photography_Batu_Ferringhi_Penang_Malaysia_Feb_19_23___5.jpg",
            "website": "https://www.tripadvisor.com.my/Attraction_Review-g635527-d7602070-Reviews-Batu_Ferringhi_Beach-Batu_Ferringhi_Penang_Island_Penang.html"
        }
    ];

    
    const tourist = touristData.find((item) => item.id.toString() === id);

    if (!tourist) {
        return <div>Tour spots not found!</div>;
    }

    return (
        <>
        <div className="tourist-detail">
            <h1>{tourist.name}</h1>
            <img src={tourist.image} alt={tourist.name} className="tourist-image" />
            <p>{tourist.description}</p>
            <a href={tourist.website} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
        </div>
        </>
    );
}

export default TouristDetail;