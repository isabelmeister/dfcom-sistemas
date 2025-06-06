require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Model/db');
const productRouter = require('./Controller/products')
const reviewRouter = require('./Controller/reviews')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
connectDB();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/products', productRouter)
app.use('/reviews', reviewRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});