import { Router } from "express";
import { clientesService } from "../service/cliente.service";
import { type Request, Response } from "express"



export const clientesRouter = Router();

clientesRouter.get("/", async () => {
  try { Request.status(200).json(await clientesService.getAll()); }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.get("/:id", async () => {
  try { const cliente = await clientesService.getById(Request.params.id); cliente ? Response.status(200).json(cliente) : Response.status(404).json({ msg: "404" }); }
  catch { Request.status(500).json({ message: "Erro" }); }
});

clientesRouter.post("/", async () => {
  try { Request.status(201).json(await clientesService.create(Request.body)); }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.patch("/:id", async () => {
  try {
    const cliente = await clientesService.update(Request.params.id, Request.body);
    cliente ? Response.status(200).json(cliente) : Response.status(404).json({ message: "404" });
  }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.delete("/:id", async () => {
  try { await clientesService.delete(Request.params.id) ? Response.status(200).json({ message: "OK" }) : Response.status(404).json({ message: "404" }); }
  catch { Response.status(500).json({ message: "Erro" }); }
});
