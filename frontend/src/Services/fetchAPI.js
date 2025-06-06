const options = (method, body) => {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (body) config.body = JSON.stringify(body);
  return config;
};

const URL_BASE = "http://localhost:3001";

const getAllProducts = async () => {
  try {
    const response = await fetch(`${URL_BASE}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao buscar produtos: ", error);
    throw error;
  }
};

const getProductInfo = async (id) => {
  try {
    const response = await fetch(`${URL_BASE}/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao buscar produto: ", error);
    throw error;
  }
};

const createNewProduct = async (body) => {
  try {
    const response = await fetch(`${URL_BASE}/products`, options("POST", body));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao criar produto: ", error);
    throw error;
  }
};

const updateProduct = async (id, body) => {
  try {
    const response = await fetch(
      `${URL_BASE}/products/${id}`,
      options("PUT", body)
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao atualizar produto: ", error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(
      `${URL_BASE}/products/${id}`,
      options("DELETE")
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao deletar produto: ", error);
    throw error;
  }
};

const getAllReviews = async () => {
  try {
    const response = await fetch(`${URL_BASE}/reviews`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao buscar reviews: ", error);
    throw error;
  }
};

const getProductReviews = async (productId) => {
  try {
    const response = await getAllReviews();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allReviews = response.json();

    const reviewsData = allReviews.data || allReviews;

    return reviewsData.filter((review) => review.productId === productId);
  } catch (error) {
    console.error("ERRO ao buscar reviews do produto: ", error);
    return [];
  }
};

const createNewReview = async (body) => {
  try {
    const response = await fetch(`${URL_BASE}/reviews`, options("POST", body));
    console.log("RESPONSE: ", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao criar review: ", error);
    throw error;
  }
};

const updateReview = async (id, body) => {
  try {
    const response = await fetch(
      `${URL_BASE}/reviews/${id}`,
      options("PUT", body)
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao atualizar review: ", error);
    throw error;
  }
};

const deleteReview = async (id) => {
  try {
    const response = await fetch(
      `${URL_BASE}/reviews/${id}`,
      options("DELETE")
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("ERRO ao deletar review: ", error);
    throw error;
  }
};

export {
  getProductInfo,
  createNewProduct,
  createNewReview,
  getAllProducts,
  getAllReviews,
  getProductReviews,
  updateProduct,
  updateReview,
  deleteProduct,
  deleteReview,
};
