const options = (method, body) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : 'Sem corpo da requisição'
});

const URL_BASE = 'http://localhost:8080'

const getAllProducts = async () => {
  fetch(`${URL_BASE}/products`).then(res => res.json());
}

const getProductInfo = async (id) => {
  fetch(`${URL_BASE}/products/${id}`).then(res => res.json());
}

const createNewProduct = async (body) => {
  fetch(`${URL_BASE}/products`, options('POST', body)).then(res => res ? res : res.json())
}

const updateProduct = async (id, body) => {
  fetch(`${URL_BASE}/products`, options('PUT', {id, body})).then(res => res ? res : res.json())
}

const deleteProduct = async (id) => {
  fetch(`${URL_BASE}/products`, options('DELETE', id)).then(res => res ? res : res.json())
}

const getAllReviews = async () => {
  fetch(`${URL_BASE}/reviews`).then(res => res.json());
}

const createNewReview = async (body) => {
  fetch(`${URL_BASE}/reviews`, options('POST', body)).then(res => res ? res : res.json())
}

const updateReview = async (id, body) => {
  fetch(`${URL_BASE}/reviews`, options('PUT', {id, body})).then(res => res ? res : res.json())
}

const deleteReview = async (id) => {
  fetch(`${URL_BASE}/reviews`, options('DELETE', id)).then(res => res ? res : res.json())
}

module.exports = {
  getProductInfo,
  createNewProduct,
  createNewReview,
  getAllProducts,
  getAllReviews,
  updateProduct,
  updateReview,
  deleteProduct,
  deleteReview,
};
