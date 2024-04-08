import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import HomePage from './components/index';
import ShopArchive from "./components/shop/shopArchive";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/shop" element={ <ShopArchive/> } />
        </Routes>
    </div>
  );
}

export default App;
