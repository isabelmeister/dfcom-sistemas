import React, { useState } from 'react';
import GeneralContext from './GeneralContext';

function GeneralProvider({ children }) {
  const [allProducts, setAllProducts] = useState({name: '', description: '', price: '', category: ''});
  const [reviews, setReviews] = useState({productId: '', author: '', rating: '', comment: ''});
  const [productReviews, setProductReviews] = useState([]);

  const context = {
    allProducts,
    setAllProducts,
    reviews,
    setReviews,
    productReviews,
    setProductReviews
  };

  return (
    <GeneralContext.Provider value={context}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;
