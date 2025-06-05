import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { ProductDetails } from './ProductDetails';
import { NewProduct } from './NewProduct';
import { NewReview } from './NewReview';
import { EditProduct } from './EditProduct';
import { EditReview } from './EditReview';


export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/product/:id/edit' element={ <EditProduct /> } />
        <Route exact path='/product/:id' element={ <ProductDetails /> } />
        <Route exact path='/review/:id/edit' element={ <EditReview /> } />
        <Route exact path='/product/new' element={ <NewProduct /> } />
        <Route exact path='/review/new' element={ <NewReview /> } />
        <Route exact path='/home' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}