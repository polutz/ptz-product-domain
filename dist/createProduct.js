'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createProduct = exports.priceValidation = exports.productPropValidation = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var productPropValidation = exports.productPropValidation = [V.required, V.isString, V.min(4), V.max(40), V.toLowerCase];
var priceValidation = exports.priceValidation = [V.required, V.isNumber, V.min(1), V.max(40)];
/**
 * Create product
 */
var createProduct = exports.createProduct = V.validate({
    name: productPropValidation,
    price: priceValidation,
    category: productPropValidation
});
//# sourceMappingURL=createProduct.js.map
//# sourceMappingURL=createProduct.js.map