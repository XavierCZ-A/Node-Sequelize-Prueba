import { DataTypes } from "sequelize";
import { sequelize } from "../data/database.js";
import { Opportunities } from "./opportunities.model.js";
import { Users } from "./users.model.js";

export const Investment = sequelize.define("investment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount_invested: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
   
  });


Users.hasMany(Investment,{
    foreignKey: 'user_id'
});

Investment.belongsTo(Users,{
    foreignKey: 'user_id'
});

Opportunities.hasMany(Investment,{
    foreignKey: 'opportunity_id'
});

Investment.belongsTo(Opportunities,{
    foreignKey: 'opportunity_id'
});

