import express, {type Request, type Response}

async getById(id: string) {
    return (await pool.query<Funcionarios>("SELECT * FROM funcionarios WHERE id = $1", [id])).rows[0];
  }

funcionariosRouter.get("/:id", async (req, res) => {
  try {
    const item = await funcionariosService.getById(req.params.id);
    if (!item) return res.status(404).json({ message: "Não encontrado" });
    return res.status(200).json(item);
  } catch {
    return res.status(500).json({ message: "Erro interno" });
  }
});