import { app } from "./app.js";
import { PORT } from "./config/envs.js";
import { sequelize } from "./data/database.js";
import "./models/users.model.js"
import "./models/opportunities.model.js"
import "./models/investment.model.js"
import { seedDatabase } from "./data/seeds.js";


const connectDB = async () =>{
    try {
        await sequelize.sync({force: true});
        await seedDatabase();
        console.log("Models synced successfully and database connected");
        app.listen(PORT, () => {    
            console.log(`Server is listening on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting database", error);
    }
}

connectDB();
