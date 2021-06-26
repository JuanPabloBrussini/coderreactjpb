import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Count from "./components/ItemListContainer/Count";

function App() {
  return (
    <>
      <NavBar />
      <div className="App-container">      
      <ItemListContainer title={"Bienvenidos"} subtitle={"Global Cupon"}/>
      
      <Count />
          
      </div>
    </>
    
  );
}

export default App;
//<CardContainer />
  