const { Router } = require('express');
const Product = require('../Model/productSchema');
const productRouter = Router();

productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, count: items.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

productRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Nenhum produto encontrado' });
    }
    
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

productRouter.post('/', async (req, res) => {
  try {
    const { body } = req.params;
    const product = await Product.create(body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

productRouter.put('/:id', async (req, res) => {
  try {
    const { id, body } = req.params;
    const product = await Product.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Produto não encontrado' });
    }
    
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

productRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Produto não encontrado' });
    }
    
    res.status(200).json({ success: true, data: {}, message: 'Deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

module.exports = productRouter;