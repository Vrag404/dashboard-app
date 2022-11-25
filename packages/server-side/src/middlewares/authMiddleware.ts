import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/User';

dotenv.config();

export interface IPayload {
    _id: string;
    iat: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const tokenSecret: string = process.env.TOKEN_SECRET as string;

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json('Acess Denied');
        }

        const token = authorization.split(' ')[1];

        const payload = jwt.verify(token, tokenSecret) as IPayload;

        req.userID = payload._id;

        const user = User.findOne({ id: req.userID });

        if (!user) {
            throw new Error(`User ${req.userID} not found, unauthorized`);
        }

        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}