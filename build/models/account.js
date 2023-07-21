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
exports.accounts = void 0;
const database_1 = __importDefault(require("../database"));
class accounts {
    fundAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const sql = "INSERT INTO Account(id,balance,user_id) values ($1,$2,$3) returning *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [
                    account.id,
                    account.balance,
                    account.user_id,
                ]);
                const acc = result.rows[0];
                conn.release();
                return acc;
            }
            catch (error) {
                throw new Error(`could not add  error ${error}`);
            }
        });
    }
    withdraw(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const sql = "Update account SET balance = balance-45 WHERE user_id=($1) RETURNING *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id]);
                const acc = result.rows[0];
                conn.release();
                return acc;
            }
            catch (error) {
                throw new Error(`could not update account of ,error ${error}`);
            }
        });
    }
    transferFrom(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const sql = "Update account SET balance = balance - 120 WHERE user_id=($1)  RETURNING * ";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id]);
                const acc = result.rows[0];
                conn.release();
                return acc;
            }
            catch (error) {
                throw new Error(`could not update account of ,error ${error}`);
            }
        });
    }
    transferTo(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const sql = "Update account SET balance = 120 WHERE user_id=($2) RETURNING *";
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id]);
                const acc = result.rows[0];
                conn.release();
                return acc;
            }
            catch (error) {
                throw new Error(`could not update account of ,error ${error}`);
            }
        });
    }
}
exports.accounts = accounts;
