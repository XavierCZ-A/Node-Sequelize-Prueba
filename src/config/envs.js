import dotenv from 'dotenv'
dotenv.config();

export const DB_HOST = process.env.DATABASE_HOST || 'localhost';
export const DB_USER = process.env.DATABASE_USER
export const DB_PASSWORD = process.env.DATABASE_PASSWORD
export const DB_NAME = process.env.DATABASE_NAME
export const DB_PORT = process.env.DATABASE_PORT
export const PORT = process.env.PORT
export const JWT_SECRET = process.env.JWT_SECRET
export const Frontend_URL=process.env.Frontend_URL || 'http://localhost'

