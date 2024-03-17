"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.keyRouter = express_1.default.Router();
// /api/keys/paypal
exports.keyRouter.get('/paypal', (req, res) => {
    res.json({ clientId: process.env.PAYPAL_CLIENT_ID || 'sb' });
});
