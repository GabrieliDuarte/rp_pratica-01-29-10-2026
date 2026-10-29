import express from 'express';
import { clientesRouter } from './routes/clientes.routes.js';

const app = express();
app.use(express.json()).use('/clientes', clientesRouter).listen(3000);
