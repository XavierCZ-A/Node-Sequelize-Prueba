import { DataTypes } from "sequelize";
import { sequelize } from "../data/database.js";


export const Users = sequelize.define("users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 1000.00
    }
},
  {
    timestamps: true,
  }
);
