"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = exports.PublicKey = void 0;
exports.PublicKey = Symbol("PUBLIC_KEY");
exports.jwtConstants = {
    access: {
        secret: process.env.JWT_SECRET,
        subject: 'access',
        expiresIn: '15m',
    },
    refresh: {
        secret: process.env.JWT_SECRET,
        subject: 'refresh',
        expiresIn: '30d',
    },
};
//# sourceMappingURL=auth.constants.js.map