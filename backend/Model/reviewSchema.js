const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Por favor, selecione o produto que deseja avaliar'],
  },
  author: {
    type: String,
    maxlength: [100, 'Nome do autor é maior que 100 caracteres, entre em contato com o nosso suporte']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Por favor, adicione uma nota'],
    maxlength: [4, 'Nota não pode ter mais do que 4 caracteres']
  },
  comment: {
    type: String,
    required: [true, 'Por favor, adicione um nome'],
    trim: true,
    maxlength: [500, 'Comentário maior que 500 caracteres, entre em contato com o nosso suporte']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reviews', ReviewSchema);