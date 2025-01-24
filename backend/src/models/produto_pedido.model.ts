
import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import sequelize from '../config/database';
import Pedido from './pedido.model';
import { ProdutoPedidoAttributes } from '../interfaces';

export interface ProdutoPedidoCreationAttributes extends Optional<ProdutoPedidoAttributes, 'id'> {}
class ProdutoPedido extends Model<ProdutoPedidoAttributes, ProdutoPedidoCreationAttributes> {
  public id!: number;
  public data_pedido!: Date | null;
  public empresa!: number | null;
  public id_pedido!: number | null;
  public id_vendedor!: number | null;
  public id_fornecedor!: number | null;
  public id_cliente!: number | null;
  public valor_total!: number | null;
  public valor_unitario!: number | null;
  public quantidade!: number | null;
}

ProdutoPedido.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: true,
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_pedido: {
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
    tableName: 'produto_pedido',
    timestamps: false,
  }
);

// Relacionamentos
ProdutoPedido.belongsTo(Pedido, { foreignKey: 'id_pedido', targetKey: 'id' });


export default ProdutoPedido;
