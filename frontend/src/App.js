// src/App.js
import React, { useState, useEffect } from 'react';
//import ItemList from '../src/components/ItemList';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Mock API React App</h1>
  //       <ItemList />
  //     </header>
  //   </div>
  // );
  return (
  <div className="App">
    <header className="App-header">
      <h1>React App</h1>
      <div className="item-list">
        {items.map(item => (
          <div key={item._id} className="item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </header>
  </div>
);

  
 
}


export default App;