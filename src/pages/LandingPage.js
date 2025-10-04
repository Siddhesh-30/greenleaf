import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/wallhaven-jx8p1y.png'; // import your background image

function LandingPage() {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
  };

  return (
    <div style={style}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>GreenLeaf</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '30px' }}>
        GreenLeaf is your one-stop shop for beautiful, healthy houseplants. 
        We provide a wide variety of plants to brighten your home or office, 
        along with expert care tips to help them thrive.
      </p>
      <Link to="/products">
        <button style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
