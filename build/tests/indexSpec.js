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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const account_1 = require("../models/account");
const wallets = new account_1.accounts();
describe('account model', () => {
    it('should have a fund account method', () => {
        expect(wallets.fundAccount).toBeDefined();
    });
    it('should have a withdraw account method', () => {
        expect(wallets.withdraw).toBeDefined();
    });
});
describe('Test endpoint responses', () => {
    it('gets the user signup endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(__1.default);
        const response = yield request.get('/user');
        expect(response.status).toBe(200);
    }));
});
