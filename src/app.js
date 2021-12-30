const express = require('express');
const productRouter = require('./routes/routes');

//Initializations
const app = express();
require('./db');

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//Routes
app.use('/api', productRouter);

//server listenning
app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});

module.exports = app;