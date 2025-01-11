import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelsList from './Components/HotelList'
import './App.css'
import Header from "./Components/header"
import Home from "./Components/Home"
import Footer from "./Components/footer"
import Food from "./Components/Food"
import FoodDetail from "./Components/FoodDetail";
import Tourist from './Components/Tourist';
import TouristDetail from './Components/TouristDetail'; 


const App = () => {
  
  
 
    return (
      <Router>
      <Header />
      <Routes>
        <Route path ="/Home" element={<Home/>} />
        <Route path="/Hotels" element={<HotelsList />} />
        <Route path="/Food&Beverage" element={<Food/>} />
        <Route path="/food/:id" element={<FoodDetail/>} />
        <Route path="/tourism-spots" element={<Tourist />} />
        <Route path="/tourist/:id" element={<TouristDetail />} />


       
      </Routes>
      <Footer/>
    </Router>
     

    
      
    );
  }
  
  


export default App
