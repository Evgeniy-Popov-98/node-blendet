import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(10)
});