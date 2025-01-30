import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface EmpresaTypes {
  id: number;
  nome_empresa: string
}

class Empresas extends Model<EmpresaTypes> {
  public id!: number;
  public nome_empresa!: string;
}

Empresas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome_empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "empresas",
    timestamps: false,
  },
);

export default Empresas;

