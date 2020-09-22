"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var __1 = __importDefault(require(".."));
var District = __1.default.define('district', {
    name: sequelize_1.DataTypes.STRING,
}, {
    timestamps: false
});
exports.default = District;
