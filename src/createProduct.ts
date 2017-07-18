import * as V from 'ptz-validations';
import { IProduct } from './IProduct';

export const productPropValidation: [V.IValidateProp] = [
    V.required,
    V.isString,
    V.min(4),
    V.max(40),
    V.toLowerCase
];

export const priceValidation: [V.IValidateProp] = [
    V.required,
    V.isNumber,
    V.min(1),
    V.max(40)
];

/**
 * Create product
 */
export const createProduct = V.validate<IProduct>({
    name: productPropValidation,
    price: priceValidation,
    category: productPropValidation
});
