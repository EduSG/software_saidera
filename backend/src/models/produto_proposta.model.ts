
import Proposta from './proposta.model';
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import sequelize from '../config/database';
import { ProdutoPropostaAttributes } from '../interfaces';

export interface ProdutoPropostaCreationAttributes extends Optional<ProdutoPropostaAttributes, 'id'> {}
class ProdutoProposta extends Model<ProdutoPropostaAttributes, ProdutoPropostaCreationAttributes> {
  public id!: number;
  public data_pedido!: Date | null;
  public empresa!: number | null;
  public id_proposta!: number | null;
  public id_vendedor!: number | null;
  public id_fornecedor!: number | null;
  public id_cliente!: number | null;
  public valor_total!: number | null;
  public valor_unitario!: number | null;
  public quantidade!: number | null;
}

ProdutoProposta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
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
    id_proposta: {
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
    tableName: 'produto_proposta',
    timestamps: false,
  }
);

// Relacionamentos
ProdutoProposta.belongsTo(Proposta, { foreignKey: 'id_proposta', targetKey: 'id' });


export default ProdutoProposta;
