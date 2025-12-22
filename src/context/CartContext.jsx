import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage when app starts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
    const totalQuantity = saved.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, []);

  // Add product to cart
  const addToCart = (item) => {
    const existingIndex = cart.findIndex(
      (c) =>
        c.id === item.id &&
        c.color === item.color &&
        c.size === item.size
    );

    let updatedCart = [...cart];

    if (existingIndex !== -1) {
      // Increase quantity if same product/color/size exists
      updatedCart[existingIndex].quantity += item.quantity;
    } else {
      updatedCart.push(item);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const totalQuantity = updatedCart.reduce(
      (sum, i) => sum + i.quantity,
      0
    );
    setCartCount(totalQuantity);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const totalQuantity = updatedCart.reduce(
      (sum, i) => sum + i.quantity,
      0
    );
    setCartCount(totalQuantity);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
