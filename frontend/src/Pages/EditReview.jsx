import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllReviews, updateReview } from '../Services/fetchAPI';
import './EditPage.css';

export const EditReview = () => {
  const { reviewId } = useParams();
  const findProductReview = () => {
    let productReview = getAllReviews.find(item => item.id === reviewId)
    return productReview;
  }
  const [review, setReview] = useState({
    author: '',
    comment: '',
    rating: 5
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateReview(reviewId, review)
      navigate(`/product/${review.productId}`);
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return (
    <div className="edit-review-container">
      <h1>Editar Avaliação</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nota:</label>
          <select
            name="rating"
            value={review.rating}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num} ★</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Comentário:</label>
          <textarea
            name="comment"
            value={review.comment}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Autor:</label>
          <input
            type="text"
            name="author"
            value={review.author}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-btn">Salvar</button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate(`/product/${findProductReview.productId}`)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};