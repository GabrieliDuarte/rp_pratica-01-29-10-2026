
import { pool } from "../database/connection.js";
import type { Cliente, CriarCliente } from "../types/cliente.js";

class ClientesService {
  async getAll() { return (await pool.query<Cliente>("SELECT * FROM clientes")).rows; }

  async getById(id: string) { return (await pool.query<Cliente>("SELECT * FROM clientes WHERE id = $1", [id])).rows[0]; }

  async create(dados: CriarCliente) { return (await pool.query<Cliente>("INSERT INTO clientes (nome, telefone, dt_nascimento, email) VALUES ($1, $2, $3, $4) RETURNING *", [dados.nome, dados.telefone, dados.dt_nascimento, dados.email])).rows[0]; }

  async update(id: string, dados: CriarCliente) { return (await pool.query<Cliente>("UPDATE clientes SET nome=$1, telefone=$2, dt_nascimento=$3, email=$4 WHERE id=$5 RETURNING *", [dados.nome, dados.telefone, dados.dt_nascimento, dados.email, id])).rows[0]; }

  async delete(id: string) { return (await pool.query("DELETE FROM clientes WHERE id = $1", [id])).rowCount! > 0; }
}

export const clientesService = new ClientesService();
