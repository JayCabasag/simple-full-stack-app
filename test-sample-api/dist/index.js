"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const PORT = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors('*'));
app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Test Sample Api nana'
    });
});
app.listen(PORT, () => {
    console.log("Server up and running on port: ", PORT);
});
