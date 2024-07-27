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
import SingleBlog from "./components/blog/singleBlog.js";
import ShopSearch from "./components/shop/shopSearch";
import Certificates from "./components/certificates/certificates.js";
import Payment from "./components/payment/payment.js";
import SuccessPay from "./components/payment/successPay.js";
import CancelPay from "./components/payment/cancelPay.js";
import FailPay from "./components/payment/failPay.js";
import SearchPage from "./components/search/serchPage.js";
import ForgotPass from "./components/auth/resetPassword.js";
import About from "./components/about/index.js";
import Contact from "./components/contact/index.js";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const hideHeaderFooterRoutes = ['/login' , '/signin' , '/search-page' , '/forgot-pass'];

  const shouldShowHeaderFooter = !hideHeaderFooterRoutes.some(path => location.pathname.startsWith(path));


  return (
    <div>
        {shouldShowHeaderFooter && <Header background={isHomePage ? "transparent" : "black"} />}
        {shouldShowHeaderFooter && <MobileNavbar />}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/shop/" element={<ShopArchive />} />
          <Route path="/shop/:params" element={<ShopArchive />} />
          <Route path="/special/:slug" element={<SepcialSell />} />
          <Route path="/search/:slug" element={<ShopSearch />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/product/:slug" element={<SingleShop />} />
          <Route path="/category/:cat" element={<ShopArchive />} />
          <Route path="/blog" element={<ArchiveBlog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
          <Route path="/sendcode" element={<SendCode />} />
          <Route path="/international-sell" element={<InternationalSell />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success-pay" element={<SuccessPay />} />
          <Route path="/cancel-pay" element={<CancelPay />} />
          <Route path="/fail-pay" element={<FailPay />} />
        </Routes>
        {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

export default App;