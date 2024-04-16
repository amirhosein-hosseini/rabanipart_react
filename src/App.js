import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import HomePage from './components/index';
import ShopArchive from "./components/shop/shopArchive";
import SepcialSell from "./components/shop/specialSell";
import SingleShop from "./components/shop/singleShop";
import ArchiveBlog from "./components/blog/archiveBlog";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/shop" element={ <ShopArchive /> } />
          <Route path="/special/:slug" element={ <SepcialSell /> } />
          <Route path="/shop/:slug" element={ <SingleShop /> } />
          <Route path="/blog" element={ <ArchiveBlog /> } />
        </Routes>
    </div>
  );
}

export default App;
