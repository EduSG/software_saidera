"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadService = void 0;
const lead_model_1 = __importDefault(require("../models/lead.model"));
class LeadService {
    static async createLote(dados) {
        await lead_model_1.default.bulkCreate(Object.values(dados), { validate: true });
    }
    static async getLeads() {
        return lead_model_1.default.findAll();
    }
}
exports.LeadService = LeadService;
