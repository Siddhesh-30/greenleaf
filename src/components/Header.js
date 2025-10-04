import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <header style={{ display:'flex', justifyContent:'space-between', padding:'10px', background:'#4CAF50', color:'white'}}>
      <h2>GreenLeaf</h2>
      <nav>
        <Link to="/products" style={{ marginRight: '10px', color:'white' }}>Products</Link>
        <Link to="/cart" style={{ color:'white' }}>
          🛒 {totalQuantity}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
