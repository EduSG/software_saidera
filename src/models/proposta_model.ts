import { Sequelize, DataTypes, Model } from 'sequelize';

export class Proposta extends Model {
  public id!: number;
  public categoria!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const init_proposta_model = (sequelize: Sequelize) => {
  Proposta.init(
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

