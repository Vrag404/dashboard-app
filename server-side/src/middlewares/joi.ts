import { IUser } from './../models/User';

import Joi from 'joi';

export const signupValidation = (data: IUser) => {
    const userSchema = Joi.object({
        username: Joi
            .string()
            .min(4)
            .max(20)
            .required(),
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required(),
    });
    return userSchema.validate(data);
}

export const signinValidation = (data: IUser) => {
    const userSchema = Joi.object({
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required(),
    });
    return userSchema.validate(data);
}