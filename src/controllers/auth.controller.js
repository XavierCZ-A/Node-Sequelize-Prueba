import { bcryptAdapter } from "../config/bcrypt.js";
import { createToken } from "../config/jwt.js";
import { Users } from "../models/users.model.js";
import { JWT_SECRET } from "../config/envs.js";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {

    const { name, email, password, birthdate } = req.body;

    try {

        const userExists = await Users.findOne({ where: { email: email } });
        
        if (userExists) {
            return res.status(400).json(['Email already exists'])
        }
        
        
        const hashedPassword = bcryptAdapter.hash(password)
        
        const createUser = await Users.create({
            full_name: name,
            email: email,
            
            password: hashedPassword,
            birthdate: birthdate
        })
        
        const token = await createToken({ id: createUser.id, email: createUser.email });
        
        res.cookie("token", token);
        
        res.json({ message: "User created successfully", user: createUser.full_name })

    } catch (error) {
        res.status(500).json([ error.message ])
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await Users.findOne({ where: { email: email } });

        if (!userExists) {
            return res.status(400).json(["Email is incorrect"]);
        }
        const token = await createToken({ id: userExists.id, email: userExists.email });

        const passwordMatch = bcryptAdapter.compare(password, userExists.password);

        if (!passwordMatch) {
            return res.status(400).json(["Password is incorrect"]);
        }

        res.cookie("token", token);

        res.json({
            id: userExists.id,
            name: userExists.full_name,
            email: userExists.email,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    
    if (!token) {
        return res.send(false);
    }

    jwt.verify(token, JWT_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userExists = await Users.findByPk(user.id);

        if (!userExists) return res.sendStatus(401);

        return res.json({
            id: userExists.id,
            name: userExists.full_name,
            email: userExists.email,
        });
    });
};