import { DataTypes } from "sequelize";
import { sequelize } from "../data/database.js";


export const Opportunities = sequelize.define('opportunities',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    yield_rate: {
        type: DataTypes.FLOAT
    },
    
  },{ timestamps: true });

