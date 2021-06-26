import React from 'react';
import ItemCount from './ItemCount';
import ProductImage from "../assets/buzoandes.jpeg";
import "../ItemListContainer/items.css"

import "bootstrap/dist/css/bootstrap.min.css";

const Item = function({id, name, brand, price, initial, min, max,}){
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
	return(
		<div className="card" >
			<img  className="card-img-top img-thumbnail" src={ProductImage} alt="product-image"/>

				
			<h3>{name}</h3>
			<h5>{brand}</h5>
			<h5>${price}</h5>
  			
			<ItemCount max={max} min={min} initial={initial} onAdd={addToCart}/>
		
		</div>
		);
}

export default Item; 
