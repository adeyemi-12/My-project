import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Your background image is likely here or in CSS */}
      <div className="hero-content">
        <p className="hero-subtitle">Your Reliable Ally In Worldwide Real Estate</p>
        
        {/* The Search Filter Bar */}
        <div className="search-filter-wrapper">
          <div className="filter-item">
            <span>Type</span>
            <select><option>Duplex</option></select>
          </div>
          <div className="filter-item">
            <span>Price</span>
            <select><option>$2k - $5k</option></select>
          </div>
          <div className="filter-item">
            <span>Area</span>
            <select><option>Lagos, Nigeria</option></select>
          </div>
          <button className="search-submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;