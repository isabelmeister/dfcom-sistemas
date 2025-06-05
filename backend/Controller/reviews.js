const { Router } = require('express');
const Review = require('../Model/reviewSchema');
const reviewRouter = Router();


reviewRouter.get('/', async (req, res) => {
  try {
    const review = await Review.find();
    res.status(200).json({ success: true, count: items.length, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

reviewRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review não encontrado' });
    }
    
    res.status(200).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }

})

reviewRouter.post('/', async (req, res) => {
  try {
    const { body } = req.params;
    const review = await Review.create(body);
    res.status(201).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
})

reviewRouter.put('/:id', async (req, res) => {
  try {
    const { id, body } = req.params;
    const review = await Review.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });
    
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review não encontrada' });
    }
    
    res.status(200).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }

})

reviewRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review não encontrada' });
    }
    
    res.status(200).json({ success: true, data: {}, message: 'Deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }

})

module.exports = reviewRouter;