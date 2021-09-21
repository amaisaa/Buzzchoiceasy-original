import React, { useState } from 'react';

export const CartContext = React.createContext({});

export const CartProvider = ({children}) => {

  const [items, setItems] = useState([]);


  const addItem = (product) => {
    const item = {
      ...product,
      quantidade: 1
    };

    setItems([...items, item]);
  };

  const increment = (index) => {
    const newItems = items.map((item, idx) => {
      if(idx === index) {
        return { ...item, quantidade: item.quantidade + 1 }
      }
      return item;
    });

    setItems(newItems);
  }

  const decrement = (index) => {

    if(items[index].quantidade === 1) {
      const newItems = items.filter((item, idx) => {
        return (idx !== index) 
      });

      setItems(newItems);
    } else {
      const newItems = items.map((item, idx) => {
        if(idx === index) {
          return { ...item, quantidade: item.quantidade - 1 }
        }
        return item;
      });
  
      setItems(newItems);
    }

  }

  const contextValue = {
    items: items,
    addItem: addItem,
    increment: increment,
    decrement: decrement
  };
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

