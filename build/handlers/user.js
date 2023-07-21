"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
const store = new user_1.UserStore();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myToken = String(process.env.TOKEN_SECRET);
        const user = {
            username: req.body.username,
            password: req.body.password,
        };
        const newUser = yield store.create(user);
        const token = jsonwebtoken_1.default.sign({ user: newUser }, myToken);
        res.json(token);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        username: req.body.username,
        password: req.body.password,
    };
    try {
        const myToken = String(process.env.TOKEN_SECRET);
        const result = yield store.authenticate(req.body.username, req.body.password);
        const token = jsonwebtoken_1.default.sign({ user: result }, myToken);
        res.json(token);
    }
    catch (error) {
        res.status(401);
        res.json({ error });
    }
});
const user_routes = (app) => {
    app.post("/user", create);
    app.post("/login", authenticate);
};
exports.default = user_routes;
