import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { deleteProduct, deleteReview, getProductInfo } from '../Services/fetchAPI';
import Context from '../Context/GeneralContext'
import './ProductDetails.css'

export const ProductDetails = () => {
  const { id } = useParams();
  const { productReviews } = useContext(Context)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Buscar dados do produto
    const fetchData = async () => {
      try {
        const productRes = await getProductInfo(id);
        setProduct(productRes);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      await deleteProduct(id);
      navigate('/');
    }
  };

  const handleDeleteReview = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta avaliação?')) {
      await deleteReview(id);
      navigate('/');
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (!product) return <div>Produto não encontrado</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <p>Categoria: {product.category}</p>
      <p>Descrição: {product.description}</p>

      <div className="actions">
        <Link to={`/products/${id}/edit`} className="edit-btn">
          Editar Produto
        </Link>
        <button onClick={handleDelete(id)} className="delete-btn">
          Excluir Produto
        </button>
      </div>

      <div className="reviews-section">
        <h2>Avaliações</h2>
        {productReviews.map(review => (
          <div key={review.id} className="review-card">
            <p>Nota: {'★'.repeat(review.rating)}</p>
            <p>Comentário: {review.comment}</p>
            <p>Autor: {review.author}</p>
            <Link to={`/reviews/${review.id}/edit`} className="edit-review-btn">
              Editar Avaliação
            </Link>
            <button onClick={handleDeleteReview(review.id)} className="delete-btn">
              Excluir Produto
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
