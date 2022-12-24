"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var apis_1 = __importDefault(require("./routes/apis"));
var teacher_1 = __importDefault(require("./routes/apis/teacher"));
var student_1 = __importDefault(require("./routes/apis/student"));
require("dotenv").config();
var app = (0, express_1["default"])();
var port = 5000;
app.use('/', apis_1["default"]);
app.use('/', teacher_1["default"]);
app.use('/', student_1["default"]);
console.log(process.env.TESt_var);
app.listen(port, function () {
    console.log('listening on port 5000');
});
exports["default"] = app;
