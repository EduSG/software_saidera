
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import sequelize from '../config/database';
import Usuarios from './usuario.model';
import Clientes from './cliente.model';
import Fornecedores from './fornecedor.model';
import { LeadAttributes } from '../interfaces';

export interface LeadCreationAttributes extends Optional<LeadAttributes, 'id'> {}

class Lead extends Model<LeadAttributes, LeadCreationAttributes> {
  public id!: number;
  public data_lead!: Date | null;
  public empresa!: number | null;
  public id_usuario!: number | null;
  public origem!: string | null;
  public id_cliente!: number | null;
  public id_fornecedor!: number | null;
  public produtos_proposta!: Record<string, any> | null;
}

Lead.init(
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    origem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_fornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    produtos_lead: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'leads',
    timestamps: false,
  }
);

// Relacionamentos
Lead.belongsTo(Usuarios, { foreignKey: 'id_usuario', targetKey: 'id' });
Lead.belongsTo(Clientes, { foreignKey: 'id_cliente', targetKey: 'id' });
Lead.belongsTo(Fornecedores, { foreignKey: 'id_fornecedor', targetKey: 'id' });

export default Lead;
