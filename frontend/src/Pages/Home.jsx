import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllProducts, getAllReviews } from '../Services/fetchAPI';
import Context from '../Context/GeneralContext'

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productReviews, setProductReviews } = useContext(Context)

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      try {
        getAllProducts().then((response => setProducts(response)))
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        getAllReviews().then(response => setReviews(response))
      } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  },[reviews]);

  const itemReviews = (productId) => {
    setProductReviews(reviews.filter((itens) => itens.productId === productId))
    return productReviews.lenght
  }

  return (
    <div>
      <button><Link to={'/product/new'}>Adicione um novo produto!</Link></button>
      {isLoading ? (
        <h3>Carregando produtos...</h3>
      ) : (
        <ul>
          {products && products.map(product => (
            <Link to={`/product/${product.id}`}>
              <li key={product.id}>
                {product.name} - R$ {product.price} Reviews: {itemReviews(product.id)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}