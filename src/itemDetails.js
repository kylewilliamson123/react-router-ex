import React, {useState, useEffect} from 'react'
import './App.css';
import './Shop.module.css'
import style from './item-detail.css'




function ItemDetails({match}) {
    useEffect(() => {
        fetchItem();
        console.log(match)
    },[]);
        
    const [item, setItem] = useState({});
   
    const fetchItem = async () =>   {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
        
    }
    
  return (
    <div className="item-det">
          <h3>{item.title}</h3>
          <img src={item.image} />
          <p>{item.description}</p>
          <h4>${item.price}</h4> 
          <button>Add to cart!</button>
    </div>
  )
  }

export default ItemDetails;

