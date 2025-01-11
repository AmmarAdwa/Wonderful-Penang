import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.nav}>
      <Link to ="/Home" style={styles.link}>Home</Link>
      <Link to="/Hotels" style={styles.link}>Hotels</Link>
      <Link to="/food&Beverage" style={styles.link}>Food & Beverage</Link>
      <Link to="/tourism-spots" style={styles.link}>Tourism Spots</Link>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "center", gap: "20px", padding: "10px", backgroundColor: "beige "},
  link: { textDecoration: "none", color: "Black", fontWeight: "bold" },
};

export default Header;