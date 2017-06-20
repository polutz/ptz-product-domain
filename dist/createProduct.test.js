'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _index = require('./index');

var Product = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var validPrice = 10;
var validName = 'hammer';
var validCategory = 'hardware';
describe('createProduct', function () {
    describe('name', function () {
        it('Add error when null name', function () {
            var product = Product.createProduct({ name: null, price: validPrice, category: validCategory });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'name' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when empty name', function () {
            var product = Product.createProduct({ name: '', price: validPrice, category: validCategory });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'name' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Do not add error when valid name', function () {
            var product = Product.createProduct({ name: validName, price: validPrice, category: validCategory });
            assert.notContainsFind(product.errors, function (e) {
                return e.propName === 'name' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when minLength name', function () {
            var product = Product.createProduct({ name: 'a', price: validPrice, category: validCategory });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'name' && e.errorMsg === V.allErrors.MIN_LENGTH;
            });
        });
        it('Add error when maxLength name', function () {
            var product = Product.createProduct({
                name: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                price: 0, category: ''
            });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'name' && e.errorMsg === V.allErrors.MAX_LENGTH;
            });
        });
        it('Should be lowercase', function () {
            var product = Product.createProduct({ name: 'AnGeLoOcAnA', price: 0, category: validCategory });
            assert.equal(product.name, 'angeloocana');
        });
    });
    describe('price', function () {
        it('Add error when null price', function () {
            var product = Product.createProduct({ name: validName, price: null, category: validCategory });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'price' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when empty price', function () {
            var product = Product.createProduct({ name: validName, price: '', category: '' });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'price' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when invalid price', function () {
            var product = Product.createProduct({ name: '', price: 'invalidprice', category: '' });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'price' && e.errorMsg === V.allErrors.INVALID_NUMBER_ERROR;
            });
        });
        it('Do not add error when valid price', function () {
            // tslint:disable-next-line:max-line-length
            var product = Product.createProduct({
                name: validName, price: 10.99, category: validCategory
            });
            assert.notContainsFind(product.errors, function (e) {
                return e.propName === 'price' && e.errorMsg === V.allErrors.REQUIRED;
            });
            assert.notContainsFind(product.errors, function (e) {
                return e.propName === 'price' && e.errorMsg === V.allErrors.INVALID_NUMBER_ERROR;
            });
        });
        it('Should be lowercase', function () {
            var product = Product.createProduct({
                name: 'AlAnMaRcElL', price: validPrice, category: validCategory
            });
            assert.equal(product.name, 'alanmarcell');
        });
    });
    describe('category', function () {
        it('Add error when null category', function () {
            var product = Product.createProduct({ name: validName, price: validPrice, category: null });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'category' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when empty category', function () {
            var product = Product.createProduct({ name: validName, price: validPrice, category: '' });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'category' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Do not add error when valid category', function () {
            var product = Product.createProduct({ name: validName, price: validPrice, category: validCategory });
            assert.notContainsFind(product.errors, function (e) {
                return e.propName === 'category' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when minLength category', function () {
            var product = Product.createProduct({ name: validName, price: validPrice, category: 'a' });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'category' && e.errorMsg === V.allErrors.MIN_LENGTH;
            });
        });
        it('Add error when maxLength category', function () {
            var product = Product.createProduct({
                name: '',
                price: 0,
                category: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            assert.containsFind(product.errors, function (e) {
                return e.propName === 'category' && e.errorMsg === V.allErrors.MAX_LENGTH;
            });
        });
        it('Should be lowercase', function () {
            var product = Product.createProduct({ name: validName, price: 0, category: 'AnGeLoOcAnA' });
            assert.equal(product.category, 'angeloocana');
        });
    });
    it('throw error when null args', function () {
        assert.throws(function () {
            return Product.createProduct(null);
        });
    });
});
//# sourceMappingURL=createProduct.test.js.map
//# sourceMappingURL=createProduct.test.js.map