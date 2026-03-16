import React from 'react';

const About = () => {
  const team = [
    { name: "Sarah Jenkins", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Marcus Chen", role: "Head of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Elena Rodriguez", role: "Resident Success", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
  ];

  return (
    <div className="about-container" style={{ fontFamily: 'Inter, sans-serif', color: '#333' }}>
      
      {/* 1. Hero Section */}
      <section className="about-hero" style={{
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Modern Living, <span style={{ color: '#60a5fa' }}>Simplified.</span></h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>Helping you find the space where your next chapter begins.</p>
        </div>
      </section>

      {/* 2. The Story */}
      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Journey</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
          Founded in 2015, we started with a simple observation: finding an 
          apartment in the city was unnecessarily difficult. We set out to bridge the gap 
          between high-quality listings and eager renters.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Today, we manage over 200 premium properties, focusing on sustainable 
          growth and tech-driven solutions that put the resident first.
        </p>
      </section>

      {/* 3. Values Grid - Using Emojis instead of Lucide */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '30px', 
        padding: '60px 20px', 
        backgroundColor: '#f9fafb' 
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}><i class="bi bi-transparency"></i></div>
          <h3>Transparency</h3>
          <p>No hidden fees, no surprise clauses. What you see is exactly what you get.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
          <h3>Quality</h3>
          <p>Every unit in our portfolio undergoes a rigorous 50-point inspection.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
          <h3>Support</h3>
          <p>Our dedicated team is on standby 24/7 to ensure your comfort.</p>
        </div>
      </section>

      {/* 4. Meet the Team */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '40px' }}>The People Behind the Keys</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {team.map((member, index) => (
            <div key={index} style={{ padding: '20px' }}>
              <img src={member.img} alt={member.name} style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                marginBottom: '15px',
                border: '4px solid #fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }} />
              <h4 style={{ margin: '5px 0' }}>{member.name}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        backgroundColor: '#1f2937', 
        color: 'white' 
      }}>
        <h3 style={{ marginBottom: '20px' }}>Ready to find your new home?</h3>
        <button style={{ 
          padding: '12px 30px', 
          fontSize: '1rem', 
          backgroundColor: '#60a5fa', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Browse Properties
        </button>
      </section>
    </div>
  );
};

export default About;