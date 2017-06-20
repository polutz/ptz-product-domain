/**
 * Update old db product data with new product data.
 * @param oldProduct
 * @param newProduct
 */
export const updateProduct = (oldProduct, { name, price, category }) => {
    return Object.assign({}, oldProduct, {
        name,
        price,
        category,
        dtChanged: new Date()
    });
};
//# sourceMappingURL=updateProduct.js.map