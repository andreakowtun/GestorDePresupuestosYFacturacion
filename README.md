# Gestor de Presupuestos y Facturación

Este proyecto es una API RESTful desarrollada con Node.js, Express y Sequelize, diseñada para gestionar clientes, presupuestos, facturas y pagos. La base de datos está alojada en Railway, lo que permite su ejecución desde cualquier entorno con conexión a internet.

---

## 🚀 Instalación y ejecución

### Requisitos

- Node.js v20 o superior
- Acceso a internet (para conectar con la base de datos en Railway)

1. Clonar el repositorio:

```bash
git clone https://github.com/andreakowtun/GestorDePresupuestosYFacturacion.git
cd GestorDePresupuestosYFacturacion

- Instalar dependencias:
npm install


- Crear archivo .env con tus variables de entorno:
DATABASE_URL=https://railway.com/project/844fbfde-41b7-46cd-bec8-fb7cebe580c6/service/85cdff55-4bc0-406b-b07c-93a62239b91f/variables?environmentId=75502e27-9916-4d4c-b5d6-a9da6cd66b7f
PORT=3000


- Ejecutar el servidor:
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