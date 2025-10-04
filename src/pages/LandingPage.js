import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign:'center', padding:'100px', backgroundColor:'#dff0d8' }}>
      <h1>Welcome to GreenLeaf</h1>
      <p>Your one-stop online store for beautiful houseplants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
