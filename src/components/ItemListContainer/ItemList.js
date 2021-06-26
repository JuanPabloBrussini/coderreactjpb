import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "../ItemListContainer/items.css"


const catalog = [
{id:'1', name: 'Buzo Andes', brand: 'Le Port', price: 3999, initial: 2, min: 2, max: 5,},
{id:'2', name: 'Buzo Aconcagua', brand: 'Dryfield', price: 5999, initial: 1, min: 1, max: 3, },
{id:'3', name: 'Buzo Gaiman', brand: 'Animate', price: 4999, initial: 4, min: 3, max: 6, }
];

const ItemList = function(){
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		const task =  new Promise((resolve) => {
			setTimeout(() => {
				resolve(catalog);
			}, 2000)});

	task.then(
		res => {
			setProducts(res);
			
		},
		err => {console.log(err)},
		);

	}, []);

		
				return <> 
				
				<div className='row'>
				
					{products.map((product) => (
						
								<Item 
								id={product.id}
								name={product.name}
								brand={product.brand}
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.max}
								
								/>))};
								
				</div>;
				
				</>
}

export default ItemList;

				