import { emptyArray, ok } from 'ptz-assert';
import { products } from './index';
describe('products', () => {
    it('allProducts has more than 2 test products', () => {
        ok(products.allProducts.length > 2);
        products.allProducts.forEach(product => emptyArray(product.errors));
    });
});
//# sourceMappingURL=products.test.js.map