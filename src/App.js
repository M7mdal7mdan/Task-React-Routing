import Home from "./components/Home";
import  NavBar from './components/NavBar';
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from './components/Detail'
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';





function App() {

  return (
    <div >
   <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Detail/:productSlug" element={<Detail />} />
      
      </Routes>
     
    </div>
  );
}

export default App;
