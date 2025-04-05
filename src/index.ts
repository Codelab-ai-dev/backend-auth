import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import { testConnection } from './config/database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app: Express = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3001', // URL de tu app Next.js
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permite enviar cookies y headers de autenticación
  maxAge: 86400 // Cache de preflight por 24 horas
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Ruta principal
app.get('/', (_req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de Autenticación' });
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de usuarios (protegidas)
app.use('/api/users', userRoutes);

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
