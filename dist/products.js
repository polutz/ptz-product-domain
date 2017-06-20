'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.products = exports.allProducts = exports.furadeira = exports.parafuso = exports.martelo = undefined;

var _createProduct = require('./createProduct');

var martelo = exports.martelo = (0, _createProduct.createProduct)({
    name: 'Martelo',
    price: 10,
    category: 'hardware'
}); // Products for seed and test data
var parafuso = exports.parafuso = (0, _createProduct.createProduct)({
    name: 'Parafuso',
    price: 10,
    category: 'hardware'
});
var furadeira = exports.furadeira = (0, _createProduct.createProduct)({
    name: 'Furadeira',
    price: 10,
    category: 'hardware'
});
var allProducts = exports.allProducts = [martelo, parafuso, furadeira];
exports.default = allProducts;
var products = exports.products = {
    martelo: martelo,
    parafuso: parafuso,
    furadeira: furadeira,
    allProducts: allProducts
};
//# sourceMappingURL=products.js.map
//# sourceMappingURL=products.js.map