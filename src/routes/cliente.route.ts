import { Router } from "express";
import { clientesService } from "../service/cliente.service";


export const clientesRouter = Router();

clientesRouter.get("/", async (req, res) => {
  try { res.status(200).json(await clientesService.getAll()); }
  catch { res.status(500).json({ message: "Erro" }); }
});

clientesRouter.get("/:id", async (req, res) => {
  try { const cliente = await clientesService.getById(req.params.id); cliente ? res.status(200).json(c) : res.status(404).json({ msg: "404" }); }
  catch { res.status(500).json({ message: "Erro" }); }
});

clientesRouter.post("/", async (req, res) => {
  try { res.status(201).json(await clientesService.create(req.body)); }
  catch { res.status(500).json({ message: "Erro" }); }
});

clientesRouter.patch("/:id", async (req, res) => {
  try {
    const cliente = await clientesService.update(req.params.id, req.body);
    cliente ? res.status(200).json(cliente) : res.status(404).json({ message: "404" });
  }
  catch { res.status(500).json({ message: "Erro" }); }
});

clientesRouter.delete("/:id", async (req, res) => {
  try { await clientesService.delete(req.params.id) ? res.status(200).json({ message: "OK" }) : res.status(404).json({ message: "404" }); } catch { res.status(500).json({ message: "Erro" }); }
});
