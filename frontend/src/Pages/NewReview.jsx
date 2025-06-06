import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNewReview } from "../Services/fetchAPI";

export const NewReview = () => {
  const { id } = useParams();
  const [newReview, setNewReview] = useState({
    author: "",
    rating: "",
    comment: "",
    productId: id,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewReview(newReview).catch((err) => console.log(err));
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <h2>Avalie este produto!</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="author"
          type="text"
          placeholder="Nome de quem está avaliando"
          value={newReview.author}
          onChange={handleChange}
          required
        />
        <input
          name="rating"
          type="number"
          placeholder="Dê uma nota de 1 á 5"
          value={newReview.rating}
          onChange={handleChange}
          required
        />
        <input
          name="comment"
          type="text"
          placeholder="Avaliação do produto"
          value={newReview.comment}
          onChange={handleChange}
          required
        />
        <button type="submit">Criar avaliação</button>
      </form>
    </div>
  );
};
