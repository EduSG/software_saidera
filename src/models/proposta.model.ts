import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import { ProdutosProposta } from '../interfaces';

class Proposta extends Model {
  public id!: number;
  public data_proposta!: Date | null;
  public empresa!: number | null;
  public id_vendedor!: number | null;
  public id_lead!: number | null;
  public id_cliente!: number | null;
  public id_fornecedor!: number | null;
  public produtos_proposta!: ProdutosProposta[] | null;
}

Proposta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    data_proposta: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_lead: {
      type: DataTypes.INTEGER,
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
    produtos_proposta: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'propostas',
    timestamps: false,
  }
);

// Relacionamentos
//Proposta.belongsTo(Vendedor, { foreignKey: 'id_vendedor', targetKey: 'id' });
//Proposta.belongsTo(Cliente, { foreignKey: 'id_cliente', targetKey: 'id' });
//Proposta.belongsTo(Fornecedor, { foreignKey: 'id_fornecedor', targetKey: 'id' });

export default Proposta;
