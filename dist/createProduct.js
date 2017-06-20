'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createProduct = exports.getPriceValidation = exports.productPropValidation = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var productPropValidation = exports.productPropValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});
var getPriceValidation = exports.getPriceValidation = function getPriceValidation(required) {
    return V.validatePrice({
        required: required,
        canBeNegative: false,
        canBeZero: false
    });
};
/**
 * Create product
 */
var createProduct = exports.createProduct = V.validate({
    name: productPropValidation,
    price: getPriceValidation(true),
    category: productPropValidation
});
//# sourceMappingURL=createProduct.js.map
//# sourceMappingURL=createProduct.js.map