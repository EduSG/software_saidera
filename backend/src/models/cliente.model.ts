import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { ClienteTypes } from "../interfaces";
import Usuarios from "./usuario.model";

class Clientes extends Model<ClienteTypes> {
  public id!: number;
  public nome_fantasia!: string;
  public razao_social!: string;
  public categoria!: string | "N/A";
  public subcategoria!: string | "N/A";
  public cnpj!: string | "N/A";
  public id_vendedor!: number;
}

Clientes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_fantasia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    razao_social: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subcategoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_vendedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "clientes",
    timestamps: false,
  },
);
Clientes.belongsTo(Usuarios, { foreignKey: 'id_vendedor', targetKey: 'id' });

export default Clientes;
