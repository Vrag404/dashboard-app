import { Request, Response } from 'express';

export const home = async (req: Request, res: Response) => {
    return res.send({ userID: req.userID });
}