import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/inter";
// import "('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')";
import "./App.css";

// Layout & Global Components
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Signup from "./Components/Auth/Signup";

// Page Components
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Pages from './Components/Pages/Pages';
import Properties from './Components/propeties';
import "bootstrap-icons/font/bootstrap-icons"
import Property from "./Components/Housecard";
// import PropertyCard from "./Components/Housecard"; // Usually used inside Properties, not as a standalone route

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Properties />
            </>
          } 
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />

        {/* Property Listing Page */}
        {/* Changed path from /propertycard to /properties for better SEO/UX */}
        <Route path="/properties" element={<Properties />} />
        
        {/* Optional: Detail page for a single house (if you have one)
        <Route path="/property/:id" element={<PropertyDetail />} /> 
        
        */}
                <Route path="/signup" element={<Signup/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;