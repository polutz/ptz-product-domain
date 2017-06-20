import { IProduct } from './IProduct';

/**
 * Update old db product data with new product data.
 * @param oldProduct
 * @param newProduct
 */
export const updateProduct = (oldProduct: IProduct, {
    name,
    price,
    category
    }: IProduct): IProduct => {
    return Object.assign({}, oldProduct, {
        name,
        price,
        category,
        dtChanged: new Date()
    });
};
