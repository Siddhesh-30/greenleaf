import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

// Import images from local assets folder
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';

const plants = [
  {id:1, name:'Fiddle Leaf Fig', price:50, category:'Indoor', thumbnail: img1},
  {id:2, name:'Snake Plant', price:30, category:'Indoor', thumbnail: img2},
  {id:3, name:'Monstera', price:40, category:'Indoor', thumbnail: img3},
  {id:4, name:'Succulent', price:15, category:'Outdoor', thumbnail: img4},
  {id:5, name:'Cactus', price:20, category:'Outdoor', thumbnail: img5},
  {id:6, name:'Bonsai', price:60, category:'Special', thumbnail: img6},
];

function ProductPage() {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabled([...disabled, plant.id]);
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding:'20px' }}>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div style={{ display:'flex', gap:'20px', flexWrap:'wrap' }}>
            {plants.filter(p => p.category === cat).map(plant => (
              <div key={plant.id} style={{ border:'1px solid #ccc', padding:'10px', width:'150px', textAlign:'center' }}>
                <img src={plant.thumbnail} alt={plant.name} width="100%" />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)} 
                  disabled={disabled.includes(plant.id)}
                >
                  {disabled.includes(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
