import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Clientes extends Model {
  public id!: number;
  public nome_fantasia!: string;
  public razao_social!: string;
  public categoria!: string | "N/A";
  public subcategoria!: string | "N/A";
  public cnpj!: string | "N/A";
}

Clientes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_fantasia: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    tableName: "clientes",
    timestamps: false,
  },
);

export default Clientes;
