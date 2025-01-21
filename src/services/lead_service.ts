
import { RequestBody, LeadAttributes } from "../interfaces";
import Lead from "../models/lead.model";

export class LeadService {
  static async createLote(dados: RequestBody<LeadAttributes>) {
    const promises = Object.values(dados).map((lead) =>
      Lead.create(lead),
    );
    await Promise.all(promises);

    return;
  }

  static async getLeads() {
    return Lead.findAll();
  }
}
