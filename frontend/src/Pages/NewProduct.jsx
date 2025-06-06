import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewProduct } from '../Services/fetchAPI';

export const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewProduct(newProduct).catch(err => console.log(err));
    navigate('/');
  }

  return (
    <div>
      <h2>Adicione um novo Produto!</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Nome do produto'
          value={newProduct.name}
          onChange={ handleChange }
          required
        />
        <input
          name='description'
          type='text'
          placeholder='Descrição do produto'
          value={newProduct.description}
          onChange={ handleChange }
          required
        />
        <input
          name='price'
          type='number'
          placeholder='Preço do produto'
          value={newProduct.price}
          onChange={ handleChange }
          required
        />
        <input
          name='category'
          type='text'
          placeholder='Categoria do produto'
          value={newProduct.category}
          onChange={ handleChange }
          required
        />
        <button type='submit'>Criar produto</button>
      </form>
    </div>
  );
}