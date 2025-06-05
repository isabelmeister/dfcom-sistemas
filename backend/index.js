require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Model/db');
const productRouter = require('./Controller/products')
const reviewRouter = require('./Controller/reviews')

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/products', productRouter)
app.use('/reviews', reviewRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});