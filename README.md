# Gestor de Presupuestos y Facturación

Este proyecto es una API RESTful desarrollada con Node.js, Express y Sequelize, diseñada para gestionar clientes, presupuestos, facturas y pagos. La base de datos está alojada en Railway, lo que permite su ejecución desde cualquier entorno con conexión a internet.

---

## 🚀 Instalación y ejecución

### Requisitos

- Node.js v20 o superior
- Acceso a internet (para conectar con la base de datos en Railway)


1. Clonar el repositorio:
git clone https://github.com/andreakowtun/GestorDePresupuestosYFacturacion.git
cd GestorDePresupuestosYFacturacion

2. Instalar dependencias:
npm install


3. Crear archivo .env con tus variables de entorno:
MYSQL_PUBLIC_URL=mysql://root:hiTldtmGCTveftkzokONLWBVbvsjNGKj@shortline.proxy.rlwy.net:40422/railway
PORT=3000


4. Ejecutar el servidor:
node app.js

## Endpoints disponibles
🔐 Autenticación
- POST /login
Autentica al usuario y devuelve un token JWT.

👥 Clientes
- GET /clientes
Lista todos los clientes.
- POST /clientes
Crea un nuevo cliente.
- PUT /clientes/:id
Actualiza un cliente existente.
- DELETE /clientes/:id
Elimina un cliente.


📄 Presupuestos
- GET /presupuestos
Lista todos los presupuestos.
- POST /presupuestos
Crea un nuevo presupuesto.

🧾 Facturas
- GET /facturas
Lista todas las facturas.
- POST /facturas
Crea una nueva factura.

💳 Pagos
- GET /pagos
Lista todos los pagos.
- POST /pagos
Registra un nuevo pago.


🧠 Autora
Andrea Kowtun

---
