const router = require('express').Router();
const controllerProduct = require('../controllers/producto');
const Products = require('../models/producto');
const Categorys = require('../models/categorias');
const { response } = require('express');

const create = (req, res) =>
  controllerProduct.updateCreate(undefined, req.query.categoria, req.body)
    .then(response => {
      if (response) {
        res.status(201).json({
          message: 'Producto creado y guardado',
          data: response
        })
      } else {
        res.status(400).json({
          message: 'No se pudo Crear el Producto',
          data: err
        })
      }
    })
    .catch(err =>
      res.status(400).json({
        message: 'No se pudo Crear el Producto',
        data: err
      }));

const update = (req, res) =>
  controllerProduct.updateCreate(req.params.id, req.query.categoria, req.body)
    .then(response => {
      if (response) {
        res.status(201).json({
          message: 'Producto actualizado',
          data: response
        })
      } else {
        res.status(400).json({
          message: 'No se pudo Actualizar el Producto',
          data: err
        })
      }
    })
    .catch(err =>
      res.status(400).json({
        message: 'No se pudo Actualizar el Producto',
        data: err
      }));

const findAll = (req, res) =>
  controllerProduct.find()
    .then((response) => {
      res.json({
        message: 'Listado de todos los productos',
        data: response
      })
    })
    .catch(err =>
      res.status(400).json({
        message: 'Error al listar productos',
        data: err
      }));

const findCondition = (req, res) =>
  controllerProduct.find(req.body)
  .then((response) => {
    res.json({
      message: 'Listado filtrado de los productos',
      data: response
    })
  })
  .catch(err =>
    res.status(400).json({
      message: 'Error al listar productos',
      data: err
    }));

const deleteProduct = (req, res) => {
  controllerProduct.delete(req.params.id)
    .then(response => {
      if (response) {
        res.json({
          message: 'Delete Product Ok',
          data: response
        })  
      } else {
        res.status(400).json({
          message: 'Producto no existente',
        })  
      }
      
    })
    .catch(err =>
      res.status(400).json({
        message: 'Error al eliminar el producto',
        data: err
      }))
}


//Routes
router.post('/createProduct', create);
router.post('/updateProduct/:id', update);
router.get('/allProducts', findAll);
router.get('/filterProducts', findCondition);
router.delete('/deleteProduct/:id', deleteProduct);

//category
router.post('/createCategory', async (req, res) => {
  try {
    const obj = new Categorys({
      value: req.body.value
    });

    const objSave = await obj.save();

    res.json({
      message: 'Categoria creado y guardado',
      data: objSave
    })
  } catch (err) {
    res.json({
      message: 'Error al crear',
      data: err
    })
    console.error(err);
  }
})

module.exports = router;