import * as V from 'ptz-validations';
import { IProduct } from './IProduct';

export const productPropValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});

export const getPriceValidation = (required: boolean) => V.validatePrice({
    required,
    canBeNegative: false,
    canBeZero: false
});

/**
 * Create product
 */
export const createProduct = V.validate<IProduct>({
    name: productPropValidation,
    price: getPriceValidation(true),
    category: productPropValidation
});
