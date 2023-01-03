import { createContext, useContext, useState } from "react";
import {faker} from '@faker-js/faker';

const CartContext = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default Context;