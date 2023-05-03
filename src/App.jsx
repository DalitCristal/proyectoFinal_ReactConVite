//COMPONENTS
import NavBar from "./components/NavBar/NavBar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm.jsx";

//CONTEXT
import { CartProvider } from "./context/CartContext.jsx";
//PAGES
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details.jsx";
import Error from "./pages/Error/Error.jsx";
import Category from "./pages/Category/Category.jsx";
//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
//STYLES
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/item/:id" element={<Details />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
