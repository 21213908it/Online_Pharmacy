import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
//pages & components
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer/>
    <NavBar/>
      <Routes>
        <Route path="/cart" exact element={<Cart/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/*" element={ <Navigate to="/not-found" /> }/>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
