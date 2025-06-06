import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Services/fetchAPI';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts().then(({data:apiProducts}) => {
      setProducts(apiProducts);
    }).catch((err) => console.log(err)).finally(() => setIsLoading(false))
  }, []);

  return (
    <div>
      <button><Link to={'/product/new'}>Adicione um novo produto!</Link></button>
      {isLoading ? (
        <h3>Carregando produtos...</h3>
      ) : (
        <ul>
          {products && products.map(product => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <li>
                {product.name} - R$ {product.price}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}