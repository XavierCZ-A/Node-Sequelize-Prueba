import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.route.js';
import opportunitiesRoutes from './routes/opportunities.route.js';
import investmentRoutes from './routes/investments.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/api", authRoutes)
app.use("/api", opportunitiesRoutes)
app.use("/api", investmentRoutes)

