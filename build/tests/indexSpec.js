"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("../models/account");
const user_1 = require("../models/user");
const wallets = new account_1.accounts();
const users = new user_1.UserStore();
describe("account model", () => {
    it("should have a fund account method", () => {
        expect(wallets.fundAccount).toBeDefined();
    });
    it("should have a withdraw account method", () => {
        expect(wallets.withdraw).toBeDefined();
    });
});
describe("userStore", () => {
    it("should have a user create method", () => {
        expect(users.create).toBeDefined();
    });
    it("should have a login account method", () => {
        expect(users.authenticate).toBeDefined();
    });
});
