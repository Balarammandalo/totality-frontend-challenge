import {Routes , Route , Navigate} from "react-router-dom"

import { useState } from 'react';

import Home from "./components/Home"
import Login from "./components/Login"
import BookStore from "./components/BookStore"
import Cart from "./components/Cart"


const App = () =>{

  const [cart, setCart] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      
      <Routes>
        <Route path = "/login" element = {<Login setAuthenticated={setAuthenticated}/>} />
        <Route path = "/" element = {authenticated ? <Home />: <Navigate to="/login" />}/>
        <Route path="/store" element={authenticated ? <BookStore addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={authenticated ? <Cart cart={cart} /> : <Navigate to="/login" />} />
      </Routes>

    </div>
)
}

export default App 