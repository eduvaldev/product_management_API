const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products-db-app', {
    
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));