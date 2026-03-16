import "./Hero.css"

function Hero  ()  {
  
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Reliable Ally in Worldwide Real Estate</h1>
        
        {/* Floating Search Bar */}
        <div className="search-container">
          <div className="search-field">
            <label>Type</label>
            <select><option>Duplex</option></select>
          </div>
          <div className="search-field">
            <label>Price</label>
            <select><option>$2k - $5k</option></select>
          </div>
          <div className="search-field">
            <label>Area</label>
            <select><option>Lagos, Nigeria</option></select>
          </div>
          <button className="search-btn">
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;