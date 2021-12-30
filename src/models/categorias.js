const { Schema, model } = require('mongoose');

const categorySchema = new Schema({ 
    value: {type: String, required: true}
});

module.exports = model('category', categorySchema);