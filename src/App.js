import "./App.css";
import Meals from "./components/Food/Meals";
import Header from "./components/Layouts/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store-context/CartProvider";
import Footer from "./components/Layouts/Footer";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };
  const cartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <>
      <CartProvider>
        <Header onShowCart={cartVisibleHandler} />
        <main>
          {cartVisible && <Cart onClose={cartHideHandler} />}
          <Meals />
        </main>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
