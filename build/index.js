"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const book_1 = __importDefault(require("./handlers/book"));
const user_1 = __importDefault(require("./handlers/user"));
const account_1 = __importDefault(require("./handlers/account"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, book_1.default)(app);
(0, user_1.default)(app);
(0, account_1.default)(app);
app.listen(port, () => {
    console.log('listening on port 5000');
});
exports.default = app;
