const Products = require('../models/producto');
const Categorys = require('../models/categorias');

const controllers = {

	find: async (conditions = {}) => {
		const arrayProducts = await Products.find(conditions);
		return arrayProducts;
	},

	updateCreate: async (id, reqCategory, body) => {
		const category = await Categorys.findOne({
			value: reqCategory
		});
		const product = await Products.findOne({
			_id: id
		})

		if (product && category) {
			const { titulo, descripcion, precio} = product
			product['titulo'] = body.titulo || titulo;
			product['descripcion'] = body.descripcion || descripcion;
			product['precio'] = body.precio || precio;
			product['categoria'] = reqCategory ;

			const obj = new Products(product);

			const objSave = await obj.save();
			return objSave;

		}
		
		if (!reqCategory && product) {
			const { titulo, descripcion, precio, categoria } = product
			product['titulo'] = body.titulo || titulo;
			product['descripcion'] = body.descripcion || descripcion;
			product['precio'] = body.precio || precio;
			product['categoria'] = body.categoria || categoria ;

			const obj = new Products(product);

			const objSave = await obj.save();
			return objSave;
		}

		if (category && !product) {

			const obj = new Products({
				titulo: body.titulo,
				descripcion: body.descripcion,
				precio: body.precio,
				categoria: reqCategory
			});

			const objSave = await obj.save();
			return objSave;

		} else {
			return null;
		}
	},

	delete: async (id) => {
		const product = await Products.findOneAndDelete({
      _id: id
    });
		return product;
	}
}

module.exports = controllers;