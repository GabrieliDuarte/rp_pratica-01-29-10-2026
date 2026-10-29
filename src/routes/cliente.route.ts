/npm init -y
npm i express pg dotenv
npm i -D typescript tsx @types/node @types/express @types/pg
npx tsc --init


 "dev": "tsx watch src/server.ts",

export interface CriarFuncionario {
  nome: string;
  email: string;
  telefone: number;
  cargo: string;
  dt_admissao: string;
}

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE funcionarios(

id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
telefone NUMERIC NOT NULL,
cargo VARCHAR(40) NOT NULL,
dt_admissao DATE NOT NULL
)

import express from 'express';
import { funcionariosRouter } from './routes/funcionarios.routes.js';

const app = express();

app.use(express.json());
app.use('/funcionarios', funcionariosRouter);

app.listen(3000, () => console.log("Rodando na porta 3000"));


import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

export const pool = new Pool()