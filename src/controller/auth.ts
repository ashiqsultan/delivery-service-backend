import { Request, Response, NextFunction } from "express";
import basicAuth from "../services/auth/basicAuth";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const response = await basicAuth(req);
    res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
};
