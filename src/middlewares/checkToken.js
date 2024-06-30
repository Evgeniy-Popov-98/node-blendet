import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";
import { findUserById } from "../services/users.js";

export const checkToken = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    try {
        if (!authHeader) {
            throw createHttpError(401, 'Unauthorized');
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
            throw createHttpError(401, 'Unauthorized');
        }
        const { id } = jwt.verify(token, env('JWT_SECRET'));
        const user = await findUserById(id);
        if (!user || !user.token || user.token !== token) {
            throw createHttpError(401, 'Unauthorized');
        }
        req.user = user;
        next()
    } catch (error) {
        next(error);
    }
    
};