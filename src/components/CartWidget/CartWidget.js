import React from "react";
import logo from "./logocarrito2.png";
  import Figure from 'react-bootstrap/Figure';

import "bootstrap/dist/css/bootstrap.min.css";
import "../ItemListContainer/items.css"

function CartWidget() {
  return (
    <>
    <div className="App">
    <Figure>
  <Figure.Image
    width={30}
    height={30}
    alt="carrito"
    src={logo} 
    backgroundColor="black"
        className="d-inline-block align-top"
  />
  <Figure.Caption>
      </Figure.Caption>
</Figure>
              </div>
    </>
  );
}

export default CartWidget;

