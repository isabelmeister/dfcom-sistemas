import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateProduct } from '../Services/fetchAPI';
import './EditPage.css';

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    category: '',
    description: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, product)
      navigate(`/products/${id}`)
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return (
    <div className="edit-product-container">
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Preço:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Categoria:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Descrição:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-btn">Salvar</button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => navigate(`/products/${id}`)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};