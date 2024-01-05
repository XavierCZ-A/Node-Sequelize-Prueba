import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/envs.js";

export const validateJWT = (req, res, next) => {
    const {token} = req.cookies;

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    
    try {
        
        jwt.verify(token, JWT_SECRET, (error, user) => {
            if (error) {
                return res.status(401).json({ msg: 'Token is not valid' });
            }

            req.user = user;
     
        });
    } catch (error) {
        return res.status(401).json({ msg: 'Internal Error' });
    }
    
    next();
}

