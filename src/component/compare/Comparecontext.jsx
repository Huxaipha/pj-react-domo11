import React, { createContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (product) => {
    setCompareList((prevList) => {
      // Prevent duplicate entries
      if (prevList.some((item) => item.id === product.id)) {
        return prevList;
      }
      return [...prevList, product];
    });
  };

  const removeFromCompare = (productId) => {
    setCompareList((prevList) => prevList.filter((item) => item.id !== productId));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};
