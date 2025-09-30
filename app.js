const express = require('express');
const sequelize = require("./config/database");
const cors = require('cors');
const app = express();


const userRoutes = require('./routes/users');
const clientRoutes = require('./routes/clients');
const itemRoutes = require('./routes/items');
const invoiceRoutes = require('./routes/invoices');
const budgetRoutes = require('./routes/budgets');
const paymentRoutes = require('./routes/payments');

app.use(express.json());

//Middlewares
app.use(cors()); //Para que el server acepte peticiones externas
app.use(express.json()); //permite recibir y procesar datos en formato json
const rateLimit = require('express-rate-limit');

// Limita a 5 solicitudes por minuto por IP
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 5, // máximo 5 solicitudes
  message: 'Demasiadas solicitudes desde esta IP. Intenta nuevamente en un minuto.'
});

// Aplico solo a rutas sensibles
app.use('/users', limiter);

//Todas las rutas
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/items', itemRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/budgets', budgetRoutes);
app.use('/payments', paymentRoutes);


//sincronizamos db y levantamos server
sequelize.sync().then(()=>{
    console.log("Base de datos sincronizada");
    app.listen(3000, ()=>console.log("Servidor corriendo en http://localhost:3000"))
})