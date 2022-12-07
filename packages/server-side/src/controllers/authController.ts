import { signupValidation, signinValidation } from '../middlewares/joi';
import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const tokenSecret: string = (process.env.TOKEN_SECRET as string);

export const signup = async (req: Request, res: Response) => {
    const { error } = signupValidation(req.body);

    if (error) {
        return res.status(401).send(error.message);
    }

    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {
        return res.status(401).send('Email already exists');
    }

    try {
        const newUser: IUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        newUser.password = await newUser.encryptPassword(newUser.password);
        
        const savedUser = await newUser.save();

        const token: string = jwt.sign({ _id: savedUser._id }, tokenSecret, {
            expiresIn: 60 * 60 * 24,
        });

        res.header('auth-token', token).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

export const signin = async (req: Request, res: Response) => {
    const { error } = signinValidation(req.body);

    if (error) {
        return res.status(401).json(error.message);
    }

    const user = await User.findOne({ email: req.body.email});

    if (!user) {
        return res.status(401).json('Email not found');
    }

    const correctPassword = await user.validatePassword(req.body.password);

    if (!correctPassword) {
        return res.status(401).json('Invalid password');
    }
    
    const token: string = jwt.sign({ _id: user._id }, tokenSecret);

    res.header('auth-token', token).json({ user: user, token: token });
}