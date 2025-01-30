import { Request, Response } from "express"; // Importe Request e Response do Express
import { RequestBody, ProdutoPropostaAttributes } from "../interfaces";
import { ProdutosPropostaService } from "../services/produto_proposta";

export class ProdutoPropostaController {
  static async adicionarProdutoPropostaLote(req: Request, res: Response) {
    const dados: RequestBody<ProdutoPropostaAttributes> = req.body;
    try {
      const produto_proposta_repo = await ProdutosPropostaService.createLote(dados);
      res.status(200).send(produto_proposta_repo);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }

  static async getProdutoProposta(req: Request, res: Response) {
    try {
      const produto_proposta_repo = await ProdutosPropostaService.getProdutosProposta();
      console.log(produto_proposta_repo);
      res.status(200).send(produto_proposta_repo);
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  }
}
