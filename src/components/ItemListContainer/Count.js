import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import "bootstrap/dist/css/bootstrap.min.css";


const Count = function () {
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades')}
	return(
		<>
		<ItemCount max={6} min={2} initial={2} onAdd={addToCart}/>
		<ItemList />
		
		</>)
}

export default Count;

