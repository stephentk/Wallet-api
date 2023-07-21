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
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../models/account");
const wallet = new account_1.accounts();
const fund = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = {
            id: req.body.id,
            balance: req.body.balance,
            user_id: req.body.user_id,
        };
        const newacc = yield wallet.fundAccount(account);
        res.json(newacc);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const withdraw = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const withdrawFund = yield wallet.withdraw(req.body.user_id);
    res.json(withdrawFund);
});
const transfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transferFund = yield wallet.transferFrom(req.body.user_id);
    res.json(transferFund);
});
const transferto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transferFund = yield wallet.transferTo(req.body.user_id);
    res.json(transferFund);
});
const account_routes = (app) => {
    app.post("/fund", fund);
    app.patch("/withdrawal", withdraw);
    app.patch("/transfer", transfer);
    app.post("/transferin", transferto);
};
exports.default = account_routes;
