const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, insira um nome'],
    trim: true,
    maxlength: [50, 'Esse nome tem mais de 50 caracteres, entre em contato com o nosso suporte']
  },
  description: {
    type: String,
    maxlength: [500, 'Descrição não pode ter mais que 500 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'Por favor, adicione um valor'],
  },
  category: {
    type: String,
    required: [true, 'Por favor, adicione uma categoria'],
    trim: true,
    maxlength: [50, 'A Categoria tem mais do que 50 caracteres, entre em contato com o nosso suporte']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Products', ProductSchema);