// src/ItemList.js
import React from 'react';
import mockData from '../mockData';
import './ItemList.css';

const ItemList = () => {
  return (
    <div className="item-list">
      
        {mockData.map(item => (
            <div key={item.id} className="item">
            <h2>{item.title}</h2>
            <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
            <p>{item.description}</p>
        </div>
                    
         
        ))}
      
    </div>
  );
};

export default ItemList;