import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding:'20px' }}>
      <h2>Your Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice}</p>

      {cart.items.map(item => (
        <div key={item.id} style={{ display:'flex', alignItems:'center', margin:'10px 0', border:'1px solid #ccc', padding:'10px' }}>
          <img src={item.thumbnail} alt={item.name} style={{ width:'80px', marginRight:'10px' }} />
          <div style={{ flex:1 }}>
            <p>{item.name}</p>
            <p>Unit Price: ${item.price}</p>
            <div>
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <span style={{ margin:'0 10px' }}>{item.quantity}</span>
              <button onClick={() => dispatch(increment(item.id))}>+</button>
            </div>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}

export default CartPage;
