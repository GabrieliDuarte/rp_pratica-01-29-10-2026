import { Router, type Request, type Response } from "express";
import { clientesService } from "../service/cliente.service";


export const clientesRouter = Router();

clientesRouter.get("/", async (Request, Response) => {
  try { Request.status(200).json(await clientesService.getAll()); }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.get("/:id", async (Request, Response) => {
  try { const cliente = await clientesService.getById(Request.params.id); cliente ? Response.status(200).json(cliente) : Response.status(404).json({ msg: "404" }); }
  catch { Request.status(500).json({ message: "Erro" }); }
});

clientesRouter.post("/", async (Request, Response) => {
  try { Request.status(201).json(await clientesService.create(Request.body)); }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.patch("/:id", async (Request, Response) => {
  try {
    const cliente = await clientesService.update(Request.params.id, Request.body);
    cliente ? Response.status(200).json(cliente) : Response.status(404).json({ message: "404" });
  }
  catch { Response.status(500).json({ message: "Erro" }); }
});

clientesRouter.delete("/:id", async (Request, Response) => {
  try { await clientesService.delete(Request.params.id) ? Response.status(200).json({ message: "OK" }) : Response.status(404).json({ message: "404" }); }
  catch { Response.status(500).json({ message: "Erro" }); }
});
