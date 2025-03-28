require('dotenv').config();
const express = require('express');
const { testConnection } = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de Autenticación' });
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Iniciar el servidor y probar la conexión a PostgreSQL
async function startServer() {
  try {
    // Probar la conexión a PostgreSQL
    await testConnection();

    // Iniciar el servidor Express
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();
