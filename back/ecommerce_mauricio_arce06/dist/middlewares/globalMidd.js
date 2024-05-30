"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMidd = void 0;
function GlobalMidd(req, res, next) {
    console.log(`Estas en la ruta ${req.path} haciendo una peticion de tipo ${req.method} el dia ${new Date()}`);
    next();
}
exports.GlobalMidd = GlobalMidd;
//# sourceMappingURL=globalMidd.js.map