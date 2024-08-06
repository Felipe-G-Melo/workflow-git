"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const user_1 = require("../src/user");
(0, globals_1.describe)('deve retornar true', () => {
    (0, globals_1.test)('deve retornar true', () => {
        var user = new user_1.User();
        (0, globals_1.expect)(user.returnTrue()).toBe(true);
    });
});
