import { pool } from "../database/connection.js";
import type { Cliente, CriarCliente } from "../types/clientes.js";

class ClientesService {
  async getAll() { return (await pool.query<Cliente>("SELECT * FROM clientes")).rows; }
  
  async getById(id: string) { return (await pool.query<Cliente>("SELECT * FROM clientes WHERE id = $1", [id])).rows[0]; }
  
  async create(d: CriarCliente) { return (await pool.query<Cliente>("INSERT INTO clientes (nome, email, cpf, telefone) VALUES ($1, $2, $3, $4) RETURNING *", [d.nome, d.email, d.cpf, d.telefone])).rows[0]; }
  
  async update(id: string, d: CriarCliente) { return (await pool.query<Cliente>("UPDATE clientes SET nome=$1, email=$2, cpf=$3, telefone=$4 WHERE id=$5 RETURNING *", [d.nome, d.email, d.cpf, d.telefone, id])).rows[0]; }
  
  async delete(id: string) { return (await pool.query("DELETE FROM clientes WHERE id = $1", [id])).rowCount! > 0; }
}

export const clientesService = new ClientesService();
