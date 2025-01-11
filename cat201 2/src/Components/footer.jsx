import React from "react";
import footerBackground from "/src/assets/images/footerback.jpg"; // Adjust the path to where the image is saved

const Footer = () => {
    return (
        <footer
            className="footer"
            style={{
                backgroundImage: `url(${footerBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "black",
                padding: "40px 20px",
            }}
        >
            {/* About Us Section */}
            <div
                className="footer-container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Adds a translucent white overlay for better readability
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <div
                    className="footer-section about-us"
                    style={{ flex: 1, margin: "10px 20px", minWidth: "250px" }}
                >
                    <h2>About Us</h2>
                    <p>
                        Wonderful Penang provide a variety of choices you can do in Penang. Penang, the "Pearl of the Orient," is a vibrant destination that blends cultural heritage, breathtaking landscapes, and modern charm. From luxurious beachfront resorts and charming heritage hotels to world-famous street food like Char Kway Teow and Penang Laksa, the island is a haven for travelers. Explore George Town’s UNESCO-listed streets, adorned with iconic murals and historic sites, or immerse yourself in nature at Penang Hill, Batu Ferringhi’s beaches, and the lush Penang National Park. Whether savoring local cuisine, discovering cultural festivals, or enjoying modern attractions, Penang offers an unforgettable tropical paradise for all.
                    </p>
                    <div className="quick-links" style={{ marginTop: "10px" }}>
                        <h3>Social Links</h3>
                        <a href="#" style={{ color: "black", textDecoration: "none", marginRight: "10px" }}>Facebook</a>
                        <a href="#" style={{ color: "black", textDecoration: "none", marginRight: "10px" }}>Instagram</a>
                        <a href="#" style={{ color: "black", textDecoration: "none", marginRight: "10px" }}>Twitter</a>
                        <a href="#" style={{ color: "black", textDecoration: "none", marginRight: "10px" }}>TikTok</a>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div
                    className="footer-section contact-us"
                    style={{ flex: 1, margin: "10px 20px", minWidth: "250px" }}
                >
                    <h2>Contact Us</h2>
                    <p>
                        <strong>Wonderful Penang</strong><br />
                        George Town, Penang, Malaysia<br />
                        <i>Phone:</i> 012 345 6789<br />
                        <i>Fax:</i> 098 765 4321<br />
                        <i>Email:</i> <a href="mailto:info@wonderfulpenang.com" style={{ color: "black", textDecoration: "underline" }}>info@wonderfulpenang.com</a>
                    </p>
                    <p>
                        <strong>Tourist Information Centre</strong><br />
                        Same address as above<br />
                        <i>Operation Hours:</i><br />
                        Mon-Fri: 9.00am - 5.00pm<br />
                        Sat & Sun: Closed
                    </p>
                </div>
            </div>

            <div className="footer-bottom" style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
                <p>&copy; 2025 Wonderful Penang</p>
            </div>
        </footer>
    );
};

export default Footer;



