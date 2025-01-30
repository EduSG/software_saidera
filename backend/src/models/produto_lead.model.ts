import Lead from './lead.model';
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import sequelize from '../config/database';
import { ProdutoLeadAttributes } from '../interfaces';

export interface ProdutoLeadCreationAttributes extends Optional<ProdutoLeadAttributes, 'id'> {}
class ProdutoLead extends Model<ProdutoLeadAttributes, ProdutoLeadCreationAttributes> {
  public id!: number;
  public data_lead!: Date | null;
  public empresa!: number | null;
  public id_lead!: number | null;
  public id_vendedor!: number | null;
  public id_fornecedor!: number | null;
  public id_cliente!: number | null;
  public valor_total!: number | null;
  public valor_unitario!: number | null;
  public quantidade!: number | null;
}

ProdutoLead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: true,
    },
    data_lead: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_lead: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_fornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    valor_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    valor_unitario: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'produto_lead',
    timestamps: false,
  }
);

// Relacionamentos
ProdutoLead.belongsTo(Lead, { foreignKey: 'id_lead', targetKey: 'id' });


export default ProdutoLead;
