import express from 'express'
import { clientesRouter } from './routes/cliente.route';

const app = express();
app.use(express.json()).use('/clientes', clientesRouter).listen(3000);
