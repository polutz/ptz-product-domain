"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Update old db product data with new product data.
 * @param oldProduct
 * @param newProduct
 */
var updateProduct = exports.updateProduct = function updateProduct(oldProduct, _ref) {
    var name = _ref.name,
        price = _ref.price,
        category = _ref.category;

    return Object.assign({}, oldProduct, {
        name: name,
        price: price,
        category: category,
        dtChanged: new Date()
    });
};
//# sourceMappingURL=updateProduct.js.map
//# sourceMappingURL=updateProduct.js.map