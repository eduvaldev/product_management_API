const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    titulo: { type: String, required: true }, 
    descripcion: {type: String, required: true}, 
    precio: {type: Number, required: true}, 
    categoria: {type: String, required: true}
});

module.exports = model('produc', productSchema);