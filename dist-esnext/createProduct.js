import * as V from 'ptz-validations';
export const productPropValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});
export const getPriceValidation = (required) => V.validatePrice({
    required,
    canBeNegative: false,
    canBeZero: false
});
/**
 * Create product
 */
export const createProduct = V.validate({
    name: productPropValidation,
    price: getPriceValidation(true),
    category: productPropValidation
});
//# sourceMappingURL=createProduct.js.map