import { Request, Response } from "express"; // Importe Request e Response do Express
import { ProdutosLeadService } from "../services/produto_lead_service";
import { RequestBody, ProdutoLeadAttributes } from "../interfaces";

export class ProdutoLeadController {
  static async adicionarProdutoLeadLote(req: Request, res: Response) {
    const dados: RequestBody<ProdutoLeadAttributes> = req.body;
    try {
      const produto_lead_lotes = await ProdutosLeadService.createLote(dados);
      res.status(200).send(produto_lead_lotes);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  static async getProdutoLead(req: Request, res: Response) {
    try {
      const produto_lead_lotes = await ProdutosLeadService.getProdutosLead();
      console.log(produto_lead_lotes);
      res.status(200).send(produto_lead_lotes);
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  }
}
