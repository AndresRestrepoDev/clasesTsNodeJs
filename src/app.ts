import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Rutas
import { router as booksRouter } from './routes/books.ts';
import { router as usersRouter } from './routes/users.ts';

// Middlewares
import { requestLogger } from "./middlewares/validateUser.ts";

// Cronjobs
import "./cronJobs/fetchJob.ts";
import "./cronJobs/mailJob.ts";

const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3001";

const app = express();

// Configuración de CORS
app.use(cors({
  origin: CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Middleware global de logs
app.use(express.json());
app.use(requestLogger);

// Rutas organizadas por módulo
app.use("/books", booksRouter);
app.use("/users", usersRouter);

// Levantar servidor
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🌍 Allowed client: ${CLIENT_URL}`);
});
