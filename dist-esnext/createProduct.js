import * as V from 'ptz-validations';
export const productPropValidation = [
    V.required,
    V.isString,
    V.min(4),
    V.max(40),
    V.toLowerCase
];
export const priceValidation = [
    V.required,
    V.isNumber,
    V.min(1),
    V.max(40)
];
/**
 * Create product
 */
export const createProduct = V.validate({
    name: productPropValidation,
    price: priceValidation,
    category: productPropValidation
});
//# sourceMappingURL=createProduct.js.map