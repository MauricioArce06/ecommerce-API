"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddProduct = exports.AuthenticationMiddUser = void 0;
const common_1 = require("@nestjs/common");
let AuthenticationMiddUser = class AuthenticationMiddUser {
    use(req, res, next) {
        const { name, password, email, adress, phone, country, city } = req.body;
        if (!name)
            next({ message: 'Name is required' });
        else if (!password)
            next({ message: 'Password is required' });
        else if (!email)
            next({ message: 'Email is required' });
        else if (!adress)
            next({ message: 'Adress is required' });
        else if (!phone)
            next({ message: 'Phone is required' });
        else if (!country)
            next({ message: 'Country is required' });
        else if (!city)
            next({ message: 'City is required' });
        else
            next();
    }
};
exports.AuthenticationMiddUser = AuthenticationMiddUser;
exports.AuthenticationMiddUser = AuthenticationMiddUser = __decorate([
    (0, common_1.Injectable)()
], AuthenticationMiddUser);
let AuthenticationMiddProduct = class AuthenticationMiddProduct {
    use(req, res, next) {
        const { name, description, price, stock } = req.body;
        if (!name)
            next({ message: 'Name is required' });
        else if (!description)
            next({ message: 'Description is required' });
        else if (!price)
            next({ message: 'Price is required' });
        else if (stock != stock)
            next({ message: 'Stock is required' });
        else if (typeof stock.stock == 'boolean')
            next({ message: 'Invalid Stock' });
        else
            next();
    }
};
exports.AuthenticationMiddProduct = AuthenticationMiddProduct;
exports.AuthenticationMiddProduct = AuthenticationMiddProduct = __decorate([
    (0, common_1.Injectable)()
], AuthenticationMiddProduct);
//# sourceMappingURL=authenticationMidd.js.map