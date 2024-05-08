import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import HomePage from './components/index';
import ShopArchive from "./components/shop/shopArchive";
import SepcialSell from "./components/shop/specialSell";
import SingleShop from "./components/shop/singleShop";
import ArchiveBlog from "./components/blog/archiveBlog";
import Signin from "./components/auth/signin";
import Login from "./components/auth/login";
import InternationalSell from "./components/internationalSell";
import Basket from "./components/basket";
import Header from "./components/Header.js";
import Footer from "./components/Footer/index.js";
import MobileNavbar from "./components/Header.js/mobileNavbar";
import Panel from "./components/panel";
import SendCode from "./components/auth/sendCode";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const hideHeaderFooterRoutes = ['/login' , '/signin'];

  const shouldShowHeaderFooter = !hideHeaderFooterRoutes.some(path => location.pathname.startsWith(path));


  return (
    <div>
        {shouldShowHeaderFooter && <Header background={isHomePage ? "transparent" : "black"} />}
        {shouldShowHeaderFooter && <MobileNavbar />}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopArchive />} />
          <Route path="/special/:slug" element={<SepcialSell />} />
          <Route path="/shop/:slug" element={<SingleShop />} />
          <Route path="/blog" element={<ArchiveBlog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sendcode" element={<SendCode />} />
          <Route path="/international-sell" element={<InternationalSell />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
        {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

export default App;