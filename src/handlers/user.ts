import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User, UserStore } from "../models/user";
import dotenv from "dotenv";

const store = new UserStore();
const create = async (req: Request, res: Response) => {
  try {
    const myToken = String(process.env.TOKEN_SECRET);
    const user: User = {
      username: req.body.username,
      password: req.body.password,
    };
    const newUser = await store.create(user);
    const token = jwt.sign({ user: newUser }, myToken);
    res.json(token);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};
const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const myToken = String(process.env.TOKEN_SECRET);
    const result = await store.authenticate(
      req.body.username,
      req.body.password
    );
    const token = jwt.sign({ user: result }, myToken);
    res.json(token);
  } catch (error) {
    res.status(401);
    res.json({ error });
  }
};

const user_routes = (app: express.Application) => {
  app.post("/user", create);
  app.post("/login", authenticate);
};
export default user_routes;
