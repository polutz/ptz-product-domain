// Products for seed and test data

import { createProduct } from './createProduct';

export const martelo = createProduct({
    name: 'Martelo',
    price: 10,
    category: 'hardware'
});

export const parafuso = createProduct({
    name: 'Parafuso',
    price: 10,
    category: 'hardware'
});

export const furadeira = createProduct({
    name: 'Furadeira',
    price: 10,
    category: 'hardware'
});

export const allProducts = [martelo, parafuso, furadeira];

export default allProducts;

export const products = {
    martelo,
    parafuso,
    furadeira,
    allProducts
};
