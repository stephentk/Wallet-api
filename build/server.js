"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apis_1 = __importDefault(require("./routes/apis"));
const teacher_1 = __importDefault(require("./routes/apis/teacher"));
const student_1 = __importDefault(require("./routes/apis/student"));
const app = (0, express_1.default)();
const port = 5000;
app.use('/', apis_1.default);
app.use('/', teacher_1.default);
app.use('/', student_1.default);
app.listen(port, () => {
    console.log('listening on port 5000');
});
exports.default = app;
