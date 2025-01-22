import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { FornecedorTypes } from "../interfaces";

class Fornecedores extends Model<FornecedorTypes> {
  public id!: number;
  public nome_fantasia!: string;
  public razao_social!: string;
  public categoria!: string | "N/A";
  public id_gestor_produto!: number | 146;
  public produto_estrategico!: boolean;
  public cnpj!: string | "N/A";
}

Fornecedores.init(
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
    id_gestor_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    produto_estrategico: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "fornecedores",
    timestamps: false,
  },
);

export default Fornecedores;
