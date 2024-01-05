import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/envs.js";

export const createToken = (payload) => {
    return new Promise((resolve, reject) => {

        jwt.sign(
            payload,
            JWT_SECRET,
            {
                expiresIn: "1d"
            },
            (error, token) => {
                if (error) reject({error: "Error al generar el token"});
                resolve(token);
            }
        )

    });
}