import { Sequelize, DataTypes, Model } from 'sequelize';

// Extensão da classe Model para tipar as colunas
export class User extends Model {
  public id!: number;
  public categoria!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const init_proposta_model = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize, 
      modelName: 'Proposta', 
      tableName: 'propostas', 
      timestamps: true, 
    }
  );
};

