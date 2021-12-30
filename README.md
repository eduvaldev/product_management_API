
<h1>Desafio Lincktic</h1>

<h1>Product Management API</h1>

<h1>Como Correr el proyecto</h1>
<ul>
<li>Clonar el Repositorio de GitHub en una carpeta de tu Computador</li>
<li>En una terminal posicionate en la carpeta donde clonaste el repositorio y ejecuta el siguiente codigo</li>
<h3>NOTA: importante ejecutar en el siguiente orden</h3>
<pre>
  <code>
  npm install
  npm start
  </code>
</pre>
</ul>
<p>Esto instalara las dependencias necesarias y correra el proyecto</p>
<h1>Test</h1>
<p>Para correr los TEST de la plicacion ejecutamos el siguiente codigo (Importante detener el proyecto si lo tiene corriendo, en la terminal Ctrl + c)</p>
<pre>
  <code>
  npm run test
  </code>
</pre>


<h1>RESUMEN</h1>

<p>
    El proyecto consta de un gestionador de productos, el cual se exponen ENDPOINT's que se consumiran para consultar generar editar o eliminar un producto de un usuario
</p>

<p>
    Se tienen las siguientes rutas:
</p>
<ul>
<li><spam>http://localhost:3000/api/createCategory </spam>Esta ruta se ejecuta POST, Requiere de un body value con el nombre de la categoria que se va a guardar en la DB</li>
<li><spam>http://localhost:3000/api/createProduct </spam>Esta ruta se ejecuta POST, Requiere de un body JSON el cual tiene que se identico al modelo de la base de datos en este caso Título, descripción y precio, tambien requiere un param query categoria que va a ser igual a una categoria ya creada anteriormente (Si la categorya no existe en la DB, No creara el producto) </li>
<li><spam>http://localhost:3000/api/allProducts </spam>Esta ruta se ejecuta GET, y retorna un objeto con un mensaje de la transaccion y una data (Lista de todos los productos)</li>
<li><spam>http://localhost:3000/api/filterProducts </spam>Esta ruta se ejecuta POST, Requiere de un body con el cual el parametro es la propiedad por la cual se requiere filtar (Título, descripción, precio y categoria) y retorna un objeto con un mensaje de la transaccion y una data (Lista de todos los productos filtrados)</li>
<li><spam>http://localhost:3000/api/updateProduct/ + idProduct </spam>Esta ruta se ejecuta POST, Requiere un ID de producto el cual se va a actualizar, Opcional un body con las propiedades que se quieren actualizar, opcional un param query categoria = a la categoria que se quiere actualizar del producto</li>
<li><spam>http://localhost:3000/api/deleteProduct/ + idProduct </spam>Esta ruta se ejecuta DELETE, Requiere un ID de producto el cual se va a Eliminar</li>
</ul>

<div>
    <h1> Postman</h1>
    <p>En el archivo que clonaste inicialmente encontraras 2 JSON (Coategorys.api_collection.json) (Productos.api_collection.json) los cuales podemos importar en nuestro postman, y visualizar las colecciones que se trabajaron en desarrollo</p>
</div>

<div>
    <h1> TECNOLOGIAS USADAS </h1>
        <h2>BACKEND</h2>
        <ul>
            <li>NODE </li>
            <li>Express</li>
            <li>Mocha</li>
            <li>Mongoose</li>
            <li>Supertest</li>
            <li>Postman</li>
        </ul>
</div>