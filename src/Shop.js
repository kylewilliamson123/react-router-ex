import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import style from './Shop.module.css'


function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const items = await data.json();
        console.log(items)
        setItems(items);
    };

    
  return (
    <div className = "shop-grid">
      {items.map(item =>    (
          <h4 className = {style.items} key = {item.id}> 
              <Link to={`/shop/${item.id}`}>
                  <h2> {item.title} </h2>
                  <img src={item.image}/></Link>
                  <h3>${item.price}</h3>
              </h4>
      ))};
    </div>
  );
}

export default Shop;
