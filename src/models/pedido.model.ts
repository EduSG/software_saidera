import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import sequelize from '../config/database';
import Usuarios from './usuario.model';
import Clientes from './cliente.model';
import Fornecedores from './fornecedor.model';
import Lead from './lead.model';
import Proposta from './proposta.model';
import { PedidoAttributes } from '../interfaces';

export interface PedidoCreationAttributes extends Optional<PedidoAttributes, 'id'> {}
class Proposta extends Model<PedidoAttributes, PedidoCreationAttributes> {
  public id!: number;
  public data_proposta!: Date | null;
  public empresa!: number | null;
  public id_usuario!: number | null;
  public id_lead!: number | null;
  public id_proposta!: number | null;
  public id_cliente!: number | null;
  public id_fornecedor!: number | null;
  public produtos_pedido!: Record<string, any> | null;
}

Proposta.init(
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_lead: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_proposta: {
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
    produtos_pedido: {
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
Proposta.belongsTo(Usuarios, { foreignKey: 'id_usuario', targetKey: 'id' });
Proposta.belongsTo(Clientes, { foreignKey: 'id_cliente', targetKey: 'id' });
Proposta.belongsTo(Lead, {foreignKey: 'id_lead', targetKey: 'id'})
Proposta.belongsTo(Fornecedores, { foreignKey: 'id_fornecedor', targetKey: 'id' });

export default Proposta;
