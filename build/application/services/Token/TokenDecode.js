"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var TokenDecode = /** @class */ (function () {
    function TokenDecode() {
        this.exec = function (token) {
            return jsonwebtoken_1.default.decode(token, { json: true });
        };
    }
    return TokenDecode;
}());
exports.default = TokenDecode;
