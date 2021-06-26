import React, {useState} from 'react';
import "../ItemListContainer/items.css"
import "bootstrap/dist/css/bootstrap.min.css";


const ItemCount = function({ max, min, initial, onAdd }){

	const [counter, setCounter] = useState(initial);

	const removeItem = function(){
		counter > min ? setCounter(counter-1) : console.log('Se llegó al límite minimo');
	}

	const addItem = function(){
		counter < max ? setCounter(counter+1) : console.log('Se llegó al límite máximo');
	}

	return(
		<>
		<div className="card" >
				
  				<div className="card-body">
    				<div className="row">
  						<div className="col">
  							<a onClick={removeItem} className="btn btn-info">
  								<i class="fa fa-minus">-</i>
  							</a>
  						</div>
  						<div className="col">
  							<p >Cantidad { counter }</p>
  						</div>
  						<div className="col">
  							<a onClick={addItem} className="btn btn-info">
  								<i  class="fa fa-plus">+</i>
  							</a>
  						</div>
  					</div>
  				</div>
  				<div className="card-footer">
  					<button onClick={ () => onAdd(counter) } className="btn btn-info">Agregar al Carrito</button>
  				</div>
			</div>
			<div>
		
</div>
		</>
		);
}

export default ItemCount;
