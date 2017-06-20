import * as assert from 'ptz-assert';
import * as V from 'ptz-validations';
import * as Product from './index';
const validPrice = 10;
const validName = 'hammer';
const validCategory = 'hardware';
describe('createProduct', () => {
    describe('name', () => {
        it('Add error when null name', () => {
            const product = Product.createProduct({ name: null, price: validPrice, category: validCategory });
            assert.containsFind(product.errors, e => e.propName === 'name'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when empty name', () => {
            const product = Product.createProduct({ name: '', price: validPrice, category: validCategory });
            assert.containsFind(product.errors, e => e.propName === 'name'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Do not add error when valid name', () => {
            const product = Product.createProduct({ name: validName, price: validPrice, category: validCategory });
            assert.notContainsFind(product.errors, e => e.propName === 'name'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when minLength name', () => {
            const product = Product.createProduct({ name: 'a', price: validPrice, category: validCategory });
            assert.containsFind(product.errors, e => e.propName === 'name'
                && e.errorMsg === V.allErrors.MIN_LENGTH);
        });
        it('Add error when maxLength name', () => {
            const product = Product.createProduct({
                name: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                price: 0, category: ''
            });
            assert.containsFind(product.errors, e => e.propName === 'name'
                && e.errorMsg === V.allErrors.MAX_LENGTH);
        });
        it('Should be lowercase', () => {
            const product = Product.createProduct({ name: 'AnGeLoOcAnA', price: 0, category: validCategory });
            assert.equal(product.name, 'angeloocana');
        });
    });
    describe('price', () => {
        it('Add error when null price', () => {
            const product = Product.createProduct({ name: validName, price: null, category: validCategory });
            assert.containsFind(product.errors, e => e.propName === 'price'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when empty price', () => {
            const product = Product.createProduct({ name: validName, price: '', category: '' });
            assert.containsFind(product.errors, e => e.propName === 'price'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when invalid price', () => {
            const product = Product.createProduct({ name: '', price: 'invalidprice', category: '' });
            assert.containsFind(product.errors, e => e.propName === 'price'
                && e.errorMsg === V.allErrors.INVALID_NUMBER_ERROR);
        });
        it('Do not add error when valid price', () => {
            // tslint:disable-next-line:max-line-length
            const product = Product.createProduct({
                name: validName, price: 10.99, category: validCategory
            });
            assert.notContainsFind(product.errors, e => e.propName === 'price'
                && e.errorMsg === V.allErrors.REQUIRED);
            assert.notContainsFind(product.errors, e => e.propName === 'price'
                && e.errorMsg === V.allErrors.INVALID_NUMBER_ERROR);
        });
        it('Should be lowercase', () => {
            const product = Product.createProduct({
                name: 'AlAnMaRcElL', price: validPrice, category: validCategory
            });
            assert.equal(product.name, 'alanmarcell');
        });
    });
    describe('category', () => {
        it('Add error when null category', () => {
            const product = Product.createProduct({ name: validName, price: validPrice, category: null });
            assert.containsFind(product.errors, e => e.propName === 'category'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when empty category', () => {
            const product = Product.createProduct({ name: validName, price: validPrice, category: '' });
            assert.containsFind(product.errors, e => e.propName === 'category'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Do not add error when valid category', () => {
            const product = Product.createProduct({ name: validName, price: validPrice, category: validCategory });
            assert.notContainsFind(product.errors, e => e.propName === 'category'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when minLength category', () => {
            const product = Product.createProduct({ name: validName, price: validPrice, category: 'a' });
            assert.containsFind(product.errors, e => e.propName === 'category'
                && e.errorMsg === V.allErrors.MIN_LENGTH);
        });
        it('Add error when maxLength category', () => {
            const product = Product.createProduct({
                name: '',
                price: 0,
                category: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            assert.containsFind(product.errors, e => e.propName === 'category'
                && e.errorMsg === V.allErrors.MAX_LENGTH);
        });
        it('Should be lowercase', () => {
            const product = Product.createProduct({ name: validName, price: 0, category: 'AnGeLoOcAnA' });
            assert.equal(product.category, 'angeloocana');
        });
    });
    it('throw error when null args', () => {
        assert.throws(() => Product.createProduct(null));
    });
});
//# sourceMappingURL=createProduct.test.js.map