import { RequestBody, LeadAttributes } from "../interfaces";
import Lead from "../models/lead.model";

export class LeadService {
  static async createLote(dados: RequestBody<LeadAttributes>) {
    await Lead.bulkCreate(Object.values(dados), { validate: true });
  }

  static async getLeads() {
    return Lead.findAll();
  }
}
