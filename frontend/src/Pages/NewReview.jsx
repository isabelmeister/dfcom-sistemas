import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createNewReview } from '../Services/fetchAPI';

export const NewReview = ({ history }) => {
  const { id } = useParams();
  const [newReview, setNewReview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ [name]: value });
  };

  const handleSubmit = async () => {
    const body = JSON.stringify({productId: id, newReview})
    await createNewReview(body)
    history.push('/');
  }
  return (
    <div>
      <h2>Avalie este produto!</h2>
      <form>
        <input
          name='author'
          type='text'
          placeholder='Nome de quem está avaliando'
          value={newReview.author}
          onChange={ handleChange }
          required
        />
        <input
          name='rating'
          type='number'
          placeholder='Dê uma nota de 1 á 5'
          value={newReview.rating}
          onChange={ handleChange }
          required
        />
        <input
          name='comment'
          type='text'
          placeholder='Avaliação do produto'
          value={newReview.comment}
          onChange={ handleChange }
          required
        />
        <button type='submit' onSubmit={ handleSubmit }>Criar avaliação</button>
      </form>
    </div>
  );
}
