import 'dotenv/config';
import express, { Express } from 'express';
import { testConnection } from './config/database';
import authRoutes from './routes/authRoutes';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (_req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de Autenticación' });
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Iniciar el servidor y probar la conexión a PostgreSQL
async function startServer(): Promise<void> {
  try {
    // Probar la conexión a PostgreSQL
    await testConnection();

    // Iniciar el servidor Express
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

startServer();
