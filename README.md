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
