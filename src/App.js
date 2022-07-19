import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Register from './Components/Register';



  
function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/Products" element={<Products/>} />
       <Route  path="/Products/:id" element={<Product/>} />
       <Route  path="/About" element={<About/>} />
       <Route  path="/Contact" element={<Contact/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/register" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
