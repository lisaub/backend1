# MobileMania

MobileMania es una tienda de e-commerce para la venta de teléfonos, relojes inteligentes, auriculares y tabletas. Este proyecto está desarrollado utilizando Node.js y Express, y proporciona endpoints para gestionar productos y carritos de compra.

## Estructura del Proyecto

```plaintext
src/
  ├── managers/
  │   ├── data/
  │   │   ├── carts.json
  │   │   └── products.json
  │   ├── cartManager.js
  │   └── productManager.js
  ├── routes/
  │   ├── carts.routes.js
  │   └── products.routes.js
  └── app.js
.gitignore
package-lock.json
package.json

```

## Instalación
Clona el repositorio:
```bash
git clone https://github.com/lisaub/backend1.git
cd MobileMania
```

## Instala las dependencias:
```bash
npm install
```

## Uso
Inicia el servidor:
```bash
npm start
```

El servidor estará escuchando en el puerto 8080.

## Endpoints
Productos
- GET /api/products: Lista todos los productos.
- GET /api/products/:pid: Obtiene un producto por su ID.
- POST /api/products: Agrega un nuevo producto.
- PUT /api/products/:pid: Actualiza un producto por su ID.
- DELETE /api/products/:pid: Elimina un producto por su ID.

Carritos
- POST /api/carts: Crea un nuevo carrito.
- GET /api/carts/:cid: Obtiene un carrito por su ID.
- POST /api/carts/:cid/product/:pid: Agrega un producto a un carrito.

## Ejemplos de Uso
Puedes utilizar herramientas como Postman para interactuar con los endpoints. Aquí hay algunos ejemplos de cómo usar los endpoints:

### Local
Listar todos los productos:
```bash
GET http://localhost:8080/api/products
```

Obtener un producto por ID:
```bash
GET http://localhost:8080/api/products/101
```

Agregar un nuevo producto:
```bash
POST http://localhost:8080/api/products
```

Content-Type: application/json
```bash
{
  "title": "Smartphone XYZ",
  "description": "Un smartphone de última generación",
  "price": 699,
  "thumbnail": ["ruta/a/la/imagen1.jpg", "ruta/a/la/imagen2.jpg"],
  "code": "XYZ123",
  "stock": 100,
  "category": "Smartphones"
}
```

Crear un nuevo carrito:
```bash
POST http://localhost:8080/api/carts
```

Obtener un carrito por ID:
```bash
GET http://localhost:8080/api/carts/1
```

Agregar un producto a un carrito:
```bash
POST http://localhost:8080/api/carts/1/product/101
```

### Producción
Listar todos los productos:
```bash
GET /api/products
```

Obtener un producto por ID:
```bash
GET /api/products/:pid
```

Agregar un nuevo producto:
```bash
POST /api/products
```

Content-Type: application/json
```bash
{
  "title": "Smartphone XYZ",
  "description": "Un smartphone de última generación",
  "price": 699,
  "thumbnail": ["ruta/a/la/imagen1.jpg", "ruta/a/la/imagen2.jpg"],
  "code": "XYZ123",
  "stock": 100,
  "category": "Smartphones"
}
```

Crear un nuevo carrito:
```bash
POST /api/carts
```

Obtener un carrito por ID:
```bash
GET /api/carts/:cid
```

Agregar un producto a un carrito:
```bash
POST /api/carts/:cid/product/:pid
```
