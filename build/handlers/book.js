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
const book_1 = require("../models/book");
const store = new book_1.BookStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield store.index();
        res.json(books);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = {
            title: req.body.title,
            total_pages: req.body.total_pages,
            author: req.body.author,
            type: req.body.type,
            summary: req.body.summary,
            id: 0
        };
        const newBook = yield store.create(book);
        res.json(newBook);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield store.show(req.params.id);
        res.json(book);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedbook = yield store.update(req.params.id, req.body.title, req.body.author);
    res.json(updatedbook);
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const excludedbook = yield store.delete(req.params.id);
        res.json(excludedbook);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const book_routes = (app) => {
    app.get("/books", index);
    app.get('/books/:id', show);
    app.post("/books", create);
    app.put('/books/:id', update);
    app.delete('/books/:id', remove);
};
exports.default = book_routes;
